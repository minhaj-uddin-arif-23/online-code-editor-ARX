// /lib/problemSet.ts

export type TestCase = {
  input: string;
  expected: string;
};

export type Problem = {
  id: string;
  title: string;
  slug: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  starterCode: string;
  testCases: TestCase[];
};

export type ProblemSet = {
  [language: string]: Problem[];
};

export const problemSet: ProblemSet = {
  javascript: [
    {
      id: "js-1",
      title: "Sum Two Numbers",
      slug: "sum-two-numbers",
      difficulty: "Easy",
      description: "Return the sum of two numbers.",
      starterCode: `function solve(a, b) {\n  return 0;\n}`,
      testCases: [
        { input: "solve(1, 2)", expected: "3" },
        { input: "solve(10, 5)", expected: "15" },
      ],
    },
    {
      id: "js-2",
      title: "Find Maximum",
      slug: "find-maximum",
      difficulty: "Easy",
      description: "Return the maximum of two numbers.",
      starterCode: `function solve(a, b) {\n  // return max\n}`,
      testCases: [
        { input: "solve(10, 20)", expected: "20" },
        { input: "solve(-5, 3)", expected: "3" },
      ],
    },
    {
      id: "js-3",
      title: "Reverse a String",
      slug: "reverse-string",
      difficulty: "Medium",
      description: "Reverse the input string.",
      starterCode: `function solve(str) {\n  // reverse str\n}`,
      testCases: [
        { input: `solve("hello")`, expected: "olleh" },
        { input: `solve("abc")`, expected: "cba" },
      ],
    },
    {
      id: "js-4",
      title: "Check Palindrome",
      slug: "check-palindrome",
      difficulty: "Medium",
      description: "Return true if string is palindrome.",
      starterCode: `function solve(str) {\n  // check palindrome\n}`,
      testCases: [
        { input: `solve("mad" + "am")`, expected: "true" },
        { input: `solve("hello")`, expected: "false" },
      ],
    },
    {
      id: "js-5",
      title: "Factorial",
      slug: "factorial",
      difficulty: "Medium",
      description: "Return factorial of a number.",
      starterCode: `function solve(n) {\n  // factorial logic\n}`,
      testCases: [
        { input: "solve(5)", expected: "120" },
        { input: "solve(3)", expected: "6" },
      ],
    },
  ],

  python: [
    {
      id: "py-1",
      title: "Sum Two Numbers",
      slug: "sum-two-numbers",
      difficulty: "Easy",
      description: "Return the sum of two numbers.",
      starterCode: `def solve(a, b):\n    return 0`,
      testCases: [
        { input: "solve(1, 2)", expected: "3" },
        { input: "solve(5, 6)", expected: "11" },
      ],
    },
    {
      id: "py-2",
      title: "Reverse a String",
      slug: "reverse-string",
      difficulty: "Easy",
      description: "Reverse the input string.",
      starterCode: `def solve(s):\n    pass`,
      testCases: [{ input: `solve("hello")`, expected: "olleh" }],
    },
    {
      id: "py-3",
      title: "Check Even or Odd",
      slug: "even-or-odd",
      difficulty: "Easy",
      description: "Return even or odd for given number.",
      starterCode: `def solve(n):\n    pass`,
      testCases: [
        { input: "solve(4)", expected: "even" },
        { input: "solve(7)", expected: "odd" },
      ],
    },
    {
      id: "py-4",
      title: "Fibonacci",
      slug: "fibonacci",
      difficulty: "Medium",
      description: "Return nth Fibonacci number.",
      starterCode: `def solve(n):\n    pass`,
      testCases: [
        { input: "solve(5)", expected: "5" },
        { input: "solve(10)", expected: "55" },
      ],
    },
  ],

  cpp: [
    {
      id: "cpp-1",
      title: "Sum Two Numbers",
      slug: "sum-two-numbers",
      difficulty: "Easy",
      description: "Return the sum of two numbers.",
      starterCode: `#include <iostream>
using namespace std;
int solve(int a, int b) {
    return 0;
}`,
      testCases: [{ input: "solve(1,2)", expected: "3" }],
    },
    {
      id: "cpp-2",
      title: "Find Maximum",
      slug: "find-maximum",
      difficulty: "Easy",
      description: "Return the maximum of 2 numbers.",
      starterCode: `int solve(int a, int b) {\n    return 0;\n}`,
      testCases: [{ input: "solve(10,20)", expected: "20" }],
    },
  ],

  java: [
    {
      id: "java-1",
      title: "Sum Two Numbers",
      slug: "sum-two-numbers",
      difficulty: "Easy",
      description: "Return the sum of two numbers.",
      starterCode: `class Main {
    static int solve(int a, int b) {
        return 0;
    }
}`,
      testCases: [{ input: "solve(5,9)", expected: "14" }],
    },
    {
      id: "java-2",
      title: "Check Positive",
      slug: "check-positive",
      difficulty: "Easy",
      description: "Return true if number is positive.",
      starterCode: `class Main {
    static boolean solve(int n) {
        return false;
    }
}`,
      testCases: [
        { input: "solve(5)", expected: "true" },
        { input: "solve(-3)", expected: "false" },
      ],
    },
  ],

  c: [
    {
      id: "c-1",
      title: "Sum Two Numbers",
      slug: "sum-two-numbers",
      difficulty: "Easy",
      description: "Return the sum of two integers.",
      starterCode: `int solve(int a, int b) {
    return 0;
}`,
      testCases: [{ input: "solve(2,3)", expected: "5" }],
    },
  ],
};
