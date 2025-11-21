"use client";
import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  Pen,
  Eraser,
  Square,
  Circle,
  ArrowRight,
  Type,
  Hand,
  RotateCcw,
  Redo,
  Download,
  ZoomIn,
  ZoomOut,
  Move,
  Minus,
  Plus,
  Palette,
  Settings,
  Grid3X3,
} from "lucide-react";
import Link from "next/link";

interface Point {
  x: number;
  y: number;
}

interface Transform {
  scale: number;
  offsetX: number;
  offsetY: number;
}

interface DrawingElement {
  id: string;
  type: "pen" | "eraser" | "rectangle" | "circle" | "arrow" | "text";
  points: Point[];
  color: string;
  width: number;
  fill?: boolean;
  text?: string;
  fontSize?: number;
  opacity: number;
  roughness: number;
  selected?: boolean;
  bounds?: { x: number; y: number; width: number; height: number };
}

interface ViewState {
  transform: Transform;
  showGrid: boolean;
  snapToGrid: boolean;
}

const TOOLS = [
  { id: "select", icon: Hand, label: "Select" },
  { id: "pen", icon: Pen, label: "Pen" },
  { id: "eraser", icon: Eraser, label: "Eraser" },
  { id: "rectangle", icon: Square, label: "Rectangle" },
  { id: "circle", icon: Circle, label: "Circle" },
  { id: "arrow", icon: ArrowRight, label: "Arrow" },
  { id: "text", icon: Type, label: "Text" },
] as const;

type ToolType = (typeof TOOLS)[number]["id"];

const COLORS = [
  "#1a1a1a",
  "#e03131",
  "#2f9e44",
  "#1971c2",
  "#f08c00",
  "#7c2d12",
  "#862e9c",
  "#0c8599",
  "#495057",
  "#c2255c",
  "#5f3dc4",
  "#099268",
];

const STROKE_WIDTHS = [1, 2, 4, 8, 12];

const AdvancedWhiteboard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const backgroundCanvasRef = useRef<HTMLCanvasElement>(null);
  const backgroundContextRef = useRef<CanvasRenderingContext2D | null>(null);

  const [elements, setElements] = useState<DrawingElement[]>([]);
  const [history, setHistory] = useState<DrawingElement[][]>([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const [currentTool, setCurrentTool] = useState<ToolType>("pen");
  const [currentColor, setCurrentColor] = useState("#1a1a1a");
  const [currentWidth, setCurrentWidth] = useState(2);
  const [currentOpacity, setCurrentOpacity] = useState(1);
  const [fill, setFill] = useState(false);

  const [isDrawing, setIsDrawing] = useState(false);
  const [isPanning, setIsPanning] = useState(false);
  const [currentPath, setCurrentPath] = useState<Point[]>([]);
  const [startPoint, setStartPoint] = useState<Point | null>(null);
  const [lastPanPoint, setLastPanPoint] = useState<Point | null>(null);

  const [viewState, setViewState] = useState<ViewState>({
    transform: { scale: 1, offsetX: 0, offsetY: 0 },
    showGrid: true,
    snapToGrid: false,
  });

  const [selectedElements, setSelectedElements] = useState<Set<string>>(
    new Set()
  );
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showStrokePicker, setShowStrokePicker] = useState(false);

  // Performance optimization: Memoized canvas dimensions
  const canvasDimensions = useMemo(() => {
    const canvas = canvasRef.current;
    return canvas
      ? { width: canvas.width, height: canvas.height }
      : { width: 0, height: 0 };
  }, [canvasRef.current?.width, canvasRef.current?.height]);

  // Initialize canvases with high DPI support
  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const backgroundCanvas = backgroundCanvasRef.current;
    if (!canvas || !backgroundCanvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    const devicePixelRatio = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();

    // Set display size
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    backgroundCanvas.style.width = `${rect.width}px`;
    backgroundCanvas.style.height = `${rect.height}px`;

    // Set actual size (with DPI scaling)
    canvas.width = rect.width * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;
    backgroundCanvas.width = rect.width * devicePixelRatio;
    backgroundCanvas.height = rect.height * devicePixelRatio;

    const context = canvas.getContext("2d");
    const backgroundContext = backgroundCanvas.getContext("2d");

    if (context && backgroundContext) {
      // Scale context for high DPI
      context.scale(devicePixelRatio, devicePixelRatio);
      backgroundContext.scale(devicePixelRatio, devicePixelRatio);

      // Optimize rendering
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      backgroundContext.imageSmoothingEnabled = true;
      backgroundContext.imageSmoothingQuality = "high";

      contextRef.current = context;
      backgroundContextRef.current = backgroundContext;

      drawGrid();
    }
  }, []);

  useEffect(() => {
    initializeCanvas();
    window.addEventListener("resize", initializeCanvas);
    return () => window.removeEventListener("resize", initializeCanvas);
  }, [initializeCanvas]);

  // Draw grid background
  const drawGrid = useCallback(() => {
    const context = backgroundContextRef.current;
    const canvas = backgroundCanvasRef.current;
    if (!context || !canvas || !viewState.showGrid) return;

    const { transform } = viewState;
    const gridSize = 20 * transform.scale;
    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);

    context.clearRect(0, 0, width, height);
    context.fillStyle = "#f8f9fa";
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "#e9ecef";
    context.lineWidth = 1;
    context.setLineDash([]);

    context.beginPath();

    // Vertical lines
    const startX = -transform.offsetX % gridSize;
    for (let x = startX; x < width; x += gridSize) {
      context.moveTo(x, 0);
      context.lineTo(x, height);
    }

    // Horizontal lines
    const startY = -transform.offsetY % gridSize;
    for (let y = startY; y < height; y += gridSize) {
      context.moveTo(0, y);
      context.lineTo(width, y);
    }

    context.stroke();
  }, [viewState]);

  // Transform point from screen to canvas coordinates
  const screenToCanvas = useCallback(
    (point: Point): Point => {
      const { transform } = viewState;
      return {
        x: (point.x - transform.offsetX) / transform.scale,
        y: (point.y - transform.offsetY) / transform.scale,
      };
    },
    [viewState]
  );

  // Transform point from canvas to screen coordinates
  const canvasToScreen = useCallback(
    (point: Point): Point => {
      const { transform } = viewState;
      return {
        x: point.x * transform.scale + transform.offsetX,
        y: point.y * transform.scale + transform.offsetY,
      };
    },
    [viewState]
  );

  // Generate unique ID
  const generateId = () => Math.random().toString(36).substr(2, 9);

  // Get event position with high precision
  const getEventPos = useCallback(
    (e: React.MouseEvent | React.TouchEvent): Point => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, y: 0 };

      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0]?.clientX ?? 0 : e.clientX;
      const clientY = "touches" in e ? e.touches[0]?.clientY ?? 0 : e.clientY;

      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    },
    []
  );

  // Smooth line drawing with quadratic curves
  const drawSmoothPath = useCallback(
    (
      context: CanvasRenderingContext2D,
      points: Point[],
      color: string,
      width: number,
      opacity: number
    ) => {
      if (points.length < 2) return;

      context.save();
      context.strokeStyle = color;
      context.lineWidth = width;
      context.lineCap = "round";
      context.lineJoin = "round";
      context.globalAlpha = opacity;
      context.imageSmoothingEnabled = true;

      context.beginPath();
      context.moveTo(points[0].x, points[0].y);

      if (points.length === 2) {
        context.lineTo(points[1].x, points[1].y);
      } else {
        for (let i = 1; i < points.length - 1; i++) {
          const currentPoint = points[i];
          const nextPoint = points[i + 1];
          const controlX = (currentPoint.x + nextPoint.x) / 2;
          const controlY = (currentPoint.y + nextPoint.y) / 2;
          context.quadraticCurveTo(
            currentPoint.x,
            currentPoint.y,
            controlX,
            controlY
          );
        }
        const lastPoint = points[points.length - 1];
        context.lineTo(lastPoint.x, lastPoint.y);
      }

      context.stroke();
      context.restore();
    },
    []
  );

  // Draw rectangle with rounded corners
  const drawRectangle = useCallback(
    (
      context: CanvasRenderingContext2D,
      points: Point[],
      color: string,
      width: number,
      opacity: number,
      fill: boolean
    ) => {
      if (points.length < 2) return;

      const [start, end] = points;
      const w = Math.abs(end.x - start.x);
      const h = Math.abs(end.y - start.y);
      const x = Math.min(start.x, end.x);
      const y = Math.min(start.y, end.y);
      const radius = Math.min(8, Math.min(w, h) / 4);

      context.save();
      context.strokeStyle = color;
      context.fillStyle = color;
      context.lineWidth = width;
      context.globalAlpha = opacity;

      context.beginPath();
      context.roundRect(x, y, w, h, radius);

      if (fill) {
        context.globalAlpha = opacity * 0.3;
        context.fill();
        context.globalAlpha = opacity;
      }
      context.stroke();
      context.restore();
    },
    []
  );

  // Draw circle/ellipse
  const drawCircle = useCallback(
    (
      context: CanvasRenderingContext2D,
      points: Point[],
      color: string,
      width: number,
      opacity: number,
      fill: boolean
    ) => {
      if (points.length < 2) return;

      const [start, end] = points;
      const centerX = (start.x + end.x) / 2;
      const centerY = (start.y + end.y) / 2;
      const radiusX = Math.abs(end.x - start.x) / 2;
      const radiusY = Math.abs(end.y - start.y) / 2;

      context.save();
      context.strokeStyle = color;
      context.fillStyle = color;
      context.lineWidth = width;
      context.globalAlpha = opacity;

      context.beginPath();
      context.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);

      if (fill) {
        context.globalAlpha = opacity * 0.3;
        context.fill();
        context.globalAlpha = opacity;
      }
      context.stroke();
      context.restore();
    },
    []
  );

  // Draw arrow
  const drawArrow = useCallback(
    (
      context: CanvasRenderingContext2D,
      points: Point[],
      color: string,
      width: number,
      opacity: number
    ) => {
      if (points.length < 2) return;

      const [start, end] = points;
      const angle = Math.atan2(end.y - start.y, end.x - start.x);
      const headLength = Math.min(
        30,
        Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)) /
          3
      );

      context.save();
      context.strokeStyle = color;
      context.fillStyle = color;
      context.lineWidth = width;
      context.lineCap = "round";
      context.lineJoin = "round";
      context.globalAlpha = opacity;

      // Draw line
      context.beginPath();
      context.moveTo(start.x, start.y);
      context.lineTo(end.x, end.y);
      context.stroke();

      // Draw arrowhead
      context.beginPath();
      context.moveTo(end.x, end.y);
      context.lineTo(
        end.x - headLength * Math.cos(angle - Math.PI / 6),
        end.y - headLength * Math.sin(angle - Math.PI / 6)
      );
      context.lineTo(
        end.x - headLength * Math.cos(angle + Math.PI / 6),
        end.y - headLength * Math.sin(angle + Math.PI / 6)
      );
      context.closePath();
      context.fill();

      context.restore();
    },
    []
  );

  // Render all elements with optimizations
  const renderElements = useCallback(() => {
    const context = contextRef.current;
    const canvas = canvasRef.current;
    if (!context || !canvas) return;

    const { transform } = viewState;
    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);

    context.save();
    context.clearRect(0, 0, width, height);

    // Apply transform
    context.translate(transform.offsetX, transform.offsetY);
    context.scale(transform.scale, transform.scale);

    // Render elements
    elements.forEach((element) => {
      const screenPoints = element.points.map((p) => p);

      switch (element.type) {
        case "pen":
          drawSmoothPath(
            context,
            screenPoints,
            element.color,
            element.width,
            element.opacity
          );
          break;
        case "eraser":
          context.save();
          context.globalCompositeOperation = "destination-out";
          drawSmoothPath(context, screenPoints, "#000000", element.width, 1);
          context.restore();
          break;
        case "rectangle":
          drawRectangle(
            context,
            screenPoints,
            element.color,
            element.width,
            element.opacity,
            element.fill || false
          );
          break;
        case "circle":
          drawCircle(
            context,
            screenPoints,
            element.color,
            element.width,
            element.opacity,
            element.fill || false
          );
          break;
        case "arrow":
          drawArrow(
            context,
            screenPoints,
            element.color,
            element.width,
            element.opacity
          );
          break;
      }
    });

    // Render current drawing
    if (currentPath.length > 0) {
      switch (currentTool) {
        case "pen":
          drawSmoothPath(
            context,
            currentPath,
            currentColor,
            currentWidth,
            currentOpacity
          );
          break;
        case "eraser":
          context.save();
          context.globalCompositeOperation = "destination-out";
          drawSmoothPath(context, currentPath, "#000000", currentWidth, 1);
          context.restore();
          break;
        case "rectangle":
          if (startPoint && currentPath.length > 0) {
            drawRectangle(
              context,
              [startPoint, currentPath[currentPath.length - 1]],
              currentColor,
              currentWidth,
              currentOpacity,
              fill
            );
          }
          break;
        case "circle":
          if (startPoint && currentPath.length > 0) {
            drawCircle(
              context,
              [startPoint, currentPath[currentPath.length - 1]],
              currentColor,
              currentWidth,
              currentOpacity,
              fill
            );
          }
          break;
        case "arrow":
          if (startPoint && currentPath.length > 0) {
            drawArrow(
              context,
              [startPoint, currentPath[currentPath.length - 1]],
              currentColor,
              currentWidth,
              currentOpacity
            );
          }
          break;
      }
    }

    context.restore();
  }, [
    elements,
    currentPath,
    currentTool,
    currentColor,
    currentWidth,
    currentOpacity,
    fill,
    startPoint,
    viewState,
    drawSmoothPath,
    drawRectangle,
    drawCircle,
    drawArrow,
  ]);

  // Debounced render for performance
  useEffect(() => {
    const timeoutId = setTimeout(renderElements, 0);
    return () => clearTimeout(timeoutId);
  }, [renderElements]);

  useEffect(() => {
    drawGrid();
  }, [drawGrid]);

  // History management
  const saveToHistory = useCallback(() => {
    setHistory((prev) => {
      const newHistory = prev.slice(0, historyIndex + 1);
      newHistory.push([...elements]);
      return newHistory.slice(-50); // Keep last 50 states
    });
    setHistoryIndex((prev) => Math.min(prev + 1, 49));
  }, [elements, historyIndex]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setElements([...history[newIndex]]);
      setHistoryIndex(newIndex);
    }
  }, [history, historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setElements([...history[newIndex]]);
      setHistoryIndex(newIndex);
    }
  }, [history, historyIndex]);

  // Event handlers
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (e.button === 1 || e.ctrlKey || e.metaKey) {
        setIsPanning(true);
        setLastPanPoint(getEventPos(e));
        return;
      }

      const pos = screenToCanvas(getEventPos(e));
      setIsDrawing(true);
      setStartPoint(pos);

      if (currentTool === "pen" || currentTool === "eraser") {
        setCurrentPath([pos]);
      } else {
        setCurrentPath([pos]);
      }
    },
    [currentTool, getEventPos, screenToCanvas]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const eventPos = getEventPos(e);

      if (isPanning && lastPanPoint) {
        const deltaX = eventPos.x - lastPanPoint.x;
        const deltaY = eventPos.y - lastPanPoint.y;

        setViewState((prev) => ({
          ...prev,
          transform: {
            ...prev.transform,
            offsetX: prev.transform.offsetX + deltaX,
            offsetY: prev.transform.offsetY + deltaY,
          },
        }));

        setLastPanPoint(eventPos);
        return;
      }

      if (!isDrawing) return;

      const pos = screenToCanvas(eventPos);

      if (currentTool === "pen" || currentTool === "eraser") {
        setCurrentPath((prev) => [...prev, pos]);
      } else {
        setCurrentPath([pos]);
      }
    },
    [
      isDrawing,
      isPanning,
      lastPanPoint,
      currentTool,
      getEventPos,
      screenToCanvas,
    ]
  );

  const handleMouseUp = useCallback(() => {
    if (isPanning) {
      setIsPanning(false);
      setLastPanPoint(null);
      return;
    }

    if (!isDrawing || !startPoint) {
      setIsDrawing(false);
      return;
    }

    if (currentPath.length < 1) {
      setIsDrawing(false);
      setCurrentPath([]);
      setStartPoint(null);
      return;
    }

    let finalPoints: Point[] = [];

    if (currentTool === "pen" || currentTool === "eraser") {
      finalPoints = currentPath;
    } else {
      finalPoints = [startPoint, currentPath[currentPath.length - 1]];
    }

    const newElement: DrawingElement = {
      id: generateId(),
      type: currentTool as DrawingElement["type"],
      points: finalPoints,
      color: currentColor,
      width: currentWidth,
      opacity: currentOpacity,
      roughness: 1,
      fill:
        currentTool === "rectangle" || currentTool === "circle"
          ? fill
          : undefined,
    };

    setElements((prev) => [...prev, newElement]);
    saveToHistory();

    setIsDrawing(false);
    setCurrentPath([]);
    setStartPoint(null);
  }, [
    isDrawing,
    isPanning,
    currentPath,
    currentTool,
    currentColor,
    currentWidth,
    currentOpacity,
    fill,
    startPoint,
    saveToHistory,
  ]);

  // Zoom functionality
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const pos = getEventPos(e);
        const scaleFactor = e.deltaY < 0 ? 1.1 : 0.9;

        setViewState((prev) => {
          const newScale = Math.max(
            0.1,
            Math.min(5, prev.transform.scale * scaleFactor)
          );
          const scaleChange = newScale / prev.transform.scale;

          return {
            ...prev,
            transform: {
              scale: newScale,
              offsetX: pos.x - (pos.x - prev.transform.offsetX) * scaleChange,
              offsetY: pos.y - (pos.y - prev.transform.offsetY) * scaleChange,
            },
          };
        });
      }
    },
    [getEventPos]
  );

  const zoomIn = () => {
    setViewState((prev) => ({
      ...prev,
      transform: {
        ...prev.transform,
        scale: Math.min(5, prev.transform.scale * 1.2),
      },
    }));
  };

  const zoomOut = () => {
    setViewState((prev) => ({
      ...prev,
      transform: {
        ...prev.transform,
        scale: Math.max(0.1, prev.transform.scale / 1.2),
      },
    }));
  };

  const resetZoom = () => {
    setViewState((prev) => ({
      ...prev,
      transform: { scale: 1, offsetX: 0, offsetY: 0 },
    }));
  };

  const clearCanvas = () => {
    setElements([]);
    saveToHistory();
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    const backgroundCanvas = backgroundCanvasRef.current;
    if (!canvas || !backgroundCanvas) return;

    // Create a temporary canvas for export
    const exportCanvas = document.createElement("canvas");
    const exportContext = exportCanvas.getContext("2d");
    if (!exportContext) return;

    exportCanvas.width = canvas.width;
    exportCanvas.height = canvas.height;

    // Draw background
    exportContext.fillStyle = "#ffffff";
    exportContext.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

    // Draw the whiteboard content
    exportContext.drawImage(backgroundCanvas, 0, 0);
    exportContext.drawImage(canvas, 0, 0);

    // Download
    const link = document.createElement("a");
    link.download = `whiteboard-${Date.now()}.png`;
    link.href = exportCanvas.toDataURL("image/png");
    link.click();
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case "z":
            e.preventDefault();
            if (e.shiftKey) {
              redo();
            } else {
              undo();
            }
            break;
          case "y":
            e.preventDefault();
            redo();
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [undo, redo]);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Top Toolbar */}
      <div className="bg-white shadow-sm border-b border-gray-200 p-3 flex items-center justify-between gap-4">
        {/* Tool Selection */}

        <div className="flex items-center bg-gray-100 rounded-lg p-1">
          <div>
            <Link
              href={"/"}
              className="text-black font-semibold mr-2 border p-2 rounded-2xl"
            >
              Go Home
            </Link>
          </div>
          {TOOLS.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setCurrentTool(tool.id)}
              className={`p-2 rounded-md transition-all  ${
                currentTool === tool.id
                  ? "bg-blue-500 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              title={tool.label}
            >
              <tool.icon size={18} />
            </button>
          ))}
        </div>

        {/* Properties Panel */}
        <div className="flex items-center gap-3">
          {/* Color Picker */}
          <div className="relative">
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="w-8 h-8 rounded-lg border-2 border-gray-300 shadow-sm hover:shadow-md transition-shadow"
              style={{ backgroundColor: currentColor }}
            />
            {showColorPicker && (
              <div className="absolute top-10 left-0 bg-white rounded-lg shadow-lg border p-3 z-50">
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {COLORS.map((color) => (
                    <button
                      key={color}
                      onClick={() => {
                        setCurrentColor(color);
                        setShowColorPicker(false);
                      }}
                      className={`w-8 h-8 rounded-lg border-2 hover:scale-110 transition-transform ${
                        currentColor === color
                          ? "border-gray-800"
                          : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <input
                  type="color"
                  value={currentColor}
                  onChange={(e) => setCurrentColor(e.target.value)}
                  className="w-full h-8 rounded border"
                />
              </div>
            )}
          </div>

          {/* Stroke Width */}
          <div className="relative">
            <button
              onClick={() => setShowStrokePicker(!showStrokePicker)}
              className="px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <div
                className="bg-gray-800 rounded-full"
                style={{
                  width: `${Math.min(currentWidth + 4, 16)}px`,
                  height: `${Math.min(currentWidth + 4, 16)}px`,
                }}
              />
              <span className="text-sm font-medium text-black">
                {currentWidth}
              </span>
            </button>
            {showStrokePicker && (
              <div className="absolute top-10 left-0 bg-white rounded-lg shadow-lg border p-3 z-50">
                <div className="flex flex-col gap-2">
                  {STROKE_WIDTHS.map((width) => (
                    <button
                      key={width}
                      onClick={() => {
                        setCurrentWidth(width);
                        setShowStrokePicker(false);
                      }}
                      className={`flex items-center gap-3 p-2 rounded hover:bg-gray-100 ${
                        currentWidth === width ? "bg-blue-50" : ""
                      }`}
                    >
                      <div
                        className="bg-gray-800 rounded-full text-black font-medium"
                        style={{
                          width: `${width + 4}px`,
                          height: `${width + 4}px`,
                        }}
                      />
                      <span className="text-sm text-black font-medium">
                        {width}px
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Fill Toggle */}
          {(currentTool === "rectangle" || currentTool === "circle") && (
            <button
              onClick={() => setFill(!fill)}
              className={`px-3 py-2 rounded-lg transition-colors ${
                fill
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Fill
            </button>
          )}

          {/* Opacity */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-black font-medium">Opacity:</span>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={currentOpacity}
              onChange={(e) => setCurrentOpacity(parseFloat(e.target.value))}
              className="w-16 text-black font-medium"
            />
            <span className="text-sm w-8 text-black font-medium">
              {Math.round(currentOpacity * 100)}%
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* History */}
          <button
            onClick={undo}
            disabled={historyIndex <= 0}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-black font-medium"
            title="Undo"
          >
            <RotateCcw size={16} />
          </button>
          <button
            onClick={redo}
            disabled={historyIndex >= history.length - 1}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-black font-medium"
            title="Redo"
          >
            <Redo size={16} />
          </button>

          {/* Zoom Controls */}
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={zoomOut}
              className="p-1.5 hover:bg-gray-200 rounded-md transition-colors text-black font-medium"
              title="Zoom Out"
            >
              <ZoomOut size={16} />
            </button>
            <span className="px-2 text-sm  min-w-12 text-center text-black font-medium">
              {Math.round(viewState.transform.scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              className="p-1.5 hover:bg-gray-200 rounded-md transition-colors text-black font-medium"
              title="Zoom In"
            >
              <ZoomIn size={16} />
            </button>
            <button
              onClick={resetZoom}
              className="p-1.5 hover:bg-gray-200 rounded-md transition-colors ml-1 text-black font-medium"
              title="Reset Zoom"
            >
              <Move size={16} />
            </button>
          </div>

          {/* Grid Toggle */}
          <button
            onClick={() =>
              setViewState((prev) => ({ ...prev, showGrid: !prev.showGrid }))
            }
            className={`p-2 rounded-lg transition-colors ${
              viewState.showGrid
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            }`}
            title="Toggle Grid"
          >
            <Grid3X3 size={16} />
          </button>

          {/* Clear */}
          <button
            onClick={clearCanvas}
            className="p-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors text-black font-medium"
            title="Clear Canvas"
          >
            <RotateCcw size={16} />
          </button>

          {/* Download */}
          <button
            onClick={downloadCanvas}
            className="p-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors text-black font-medium"
            title="Download"
          >
            <Download size={16} />
          </button>
        </div>
      </div>

      {/* Canvas Container */}
      <div className="flex-1 relative overflow-hidden">
        {/* Background Canvas (Grid) */}
        <canvas
          ref={backgroundCanvasRef}
          className="absolute inset-0 pointer-events-none"
        />

        {/* Main Canvas */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 ${
            currentTool === "select"
              ? "cursor-default"
              : currentTool === "pen"
              ? "cursor-crosshair"
              : currentTool === "eraser"
              ? "cursor-cell"
              : "cursor-crosshair"
          } touch-none`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          onTouchStart={(e) => {
            e.preventDefault();
            const touch = e.touches[0];
            if (touch) {
              const mouseEvent = new MouseEvent("mousedown", {
                clientX: touch.clientX,
                clientY: touch.clientY,
                button: 0,
              });
              handleMouseDown(mouseEvent as any);
            }
          }}
          onTouchMove={(e) => {
            e.preventDefault();
            const touch = e.touches[0];
            if (touch) {
              const mouseEvent = new MouseEvent("mousemove", {
                clientX: touch.clientX,
                clientY: touch.clientY,
              });
              handleMouseMove(mouseEvent as any);
            }
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            handleMouseUp();
          }}
        />

        {/* Status Overlay */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm border">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>
              <span className="font-medium">Tool:</span>{" "}
              {TOOLS.find((t) => t.id === currentTool)?.label}
            </span>
            <span>
              <span className="font-medium">Elements:</span> {elements.length}
            </span>
            <span>
              <span className="font-medium">Zoom:</span>{" "}
              {Math.round(viewState.transform.scale * 100)}%
            </span>
          </div>
        </div>

        {/* Instructions Overlay */}
        {elements.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border max-w-md text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Welcome to Advanced Whiteboard
              </h3>
              <p className="text-gray-600 mb-4">
                Start drawing with the tools above. Features include:
              </p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>• Smooth pen | eraser tools</p>
                <p>• Shape tools (rectangle, circle, arrow)</p>
                <p>• Zoom & pan (Ctrl+wheel, middle mouse)</p>
                <p>• Undo/Redo (Ctrl+Z/Ctrl+Y)</p>
                <p>• Grid snapping & professional UI</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedWhiteboard;
