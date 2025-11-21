"use client";
import React, { useState } from "react";
import { Book, Code, ChevronRight, Menu, X } from "lucide-react";

export default function PythonDocumentation() {
  const [activeSection, setActiveSection] = useState("intro");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const sections = [
    { id: "intro", title: "Introduction", icon: "🐍" },
    { id: "syntax", title: "Syntax", icon: "📝" },
    { id: "variables", title: "Variables", icon: "📦" },
    { id: "datatypes", title: "Data Types", icon: "🔢" },
    { id: "operators", title: "Operators", icon: "➕" },
    { id: "strings", title: "Strings", icon: "🔤" },
    { id: "lists", title: "Lists", icon: "📋" },
    { id: "tuples", title: "Tuples", icon: "🎯" },
    { id: "sets", title: "Sets", icon: "🎲" },
    { id: "dictionaries", title: "Dictionaries", icon: "📚" },
    { id: "ifelse", title: "If...Else", icon: "🔀" },
    { id: "loops", title: "Loops", icon: "🔄" },
    { id: "functions", title: "Functions", icon: "⚙️" },
    { id: "classes", title: "Classes/Objects", icon: "🏗️" },
    { id: "modules", title: "Modules", icon: "📦" },
    { id: "filehandling", title: "File Handling", icon: "📁" },
    { id: "exceptions", title: "Exception Handling", icon: "⚠️" },
  ];

  const content = {
    intro: {
      title: "Python Introduction",
      description:
        "Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.",
      topics: [
        {
          subtitle: "What is Python?",
          text: "Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms including procedural, object-oriented, and functional programming.",
        },
        {
          subtitle: "What can Python do?",
          text: "• Web development (Django, Flask)\n• Data analysis and visualization\n• Machine learning and AI\n• Automation and scripting\n• Game development\n• Desktop applications",
        },
        {
          subtitle: "Why Python?",
          text: "• Easy to learn and read\n• Large standard library\n• Active community\n• Cross-platform compatibility\n• Versatile and powerful",
        },
        {
          subtitle: "Python Syntax",
          code: `print("Hello, World!")`,
        },
      ],
    },
    syntax: {
      title: "Python Syntax",
      description:
        "Python syntax refers to the set of rules that defines how a Python program will be written and interpreted.",
      topics: [
        {
          subtitle: "Python Indentation",
          text: "Python uses indentation to indicate a block of code. The number of spaces is up to you, but it must be consistent.",
          code: `if 5 > 2:
    print("Five is greater than two!")`,
        },
        {
          subtitle: "Python Comments",
          text: "Comments start with a #, and Python will ignore them.",
          code: `# This is a comment
print("Hello, World!")  # This is also a comment`,
        },
        {
          subtitle: "Multi-line Comments",
          code: `"""
This is a multi-line comment
written in Python.
"""
print("Hello, World!")`,
        },
      ],
    },
    variables: {
      title: "Python Variables",
      description:
        "Variables are containers for storing data values. Python has no command for declaring a variable.",
      topics: [
        {
          subtitle: "Creating Variables",
          text: "A variable is created the moment you first assign a value to it.",
          code: `x = 5
y = "Hello"
z = 3.14`,
        },
        {
          subtitle: "Variable Names",
          text: "Rules for variable names:\n• Must start with a letter or underscore\n• Cannot start with a number\n• Can only contain alpha-numeric characters and underscores\n• Case-sensitive",
          code: `my_var = "Valid"
_my_var = "Valid"
myVar = "Valid"
MYVAR = "Valid"
my_var_2 = "Valid"`,
        },
        {
          subtitle: "Multiple Assignment",
          code: `x, y, z = "Orange", "Banana", "Cherry"
print(x)  # Orange
print(y)  # Banana
print(z)  # Cherry`,
        },
      ],
    },
    datatypes: {
      title: "Python Data Types",
      description:
        "Variables can store data of different types, and different types can do different things.",
      topics: [
        {
          subtitle: "Built-in Data Types",
          text: "Python has the following data types built-in by default:",
          code: `# Text Type
x = "Hello World"  # str

# Numeric Types
x = 20             # int
x = 20.5           # float
x = 1j             # complex

# Sequence Types
x = ["apple", "banana"]  # list
x = ("apple", "banana")  # tuple
x = range(6)             # range

# Mapping Type
x = {"name": "John", "age": 36}  # dict

# Set Types
x = {"apple", "banana"}  # set

# Boolean Type
x = True  # bool

# None Type
x = None  # NoneType`,
        },
        {
          subtitle: "Getting Data Type",
          code: `x = 5
print(type(x))  # <class 'int'>`,
        },
      ],
    },
    operators: {
      title: "Python Operators",
      description:
        "Operators are used to perform operations on variables and values.",
      topics: [
        {
          subtitle: "Arithmetic Operators",
          code: `x = 10
y = 3

print(x + y)   # Addition: 13
print(x - y)   # Subtraction: 7
print(x * y)   # Multiplication: 30
print(x / y)   # Division: 3.333...
print(x % y)   # Modulus: 1
print(x ** y)  # Exponentiation: 1000
print(x // y)  # Floor division: 3`,
        },
        {
          subtitle: "Comparison Operators",
          code: `x = 5
y = 3

print(x == y)  # Equal: False
print(x != y)  # Not equal: True
print(x > y)   # Greater than: True
print(x < y)   # Less than: False
print(x >= y)  # Greater or equal: True
print(x <= y)  # Less or equal: False`,
        },
        {
          subtitle: "Logical Operators",
          code: `x = 5

print(x > 3 and x < 10)  # True
print(x > 3 or x < 4)    # True
print(not(x > 3 and x < 10))  # False`,
        },
      ],
    },
    strings: {
      title: "Python Strings",
      description:
        "Strings in python are surrounded by either single or double quotation marks.",
      topics: [
        {
          subtitle: "String Basics",
          code: `a = "Hello"
b = 'World'
c = """Multi-line
string"""`,
        },
        {
          subtitle: "String Methods",
          code: `txt = "Hello World"

print(txt.upper())      # HELLO WORLD
print(txt.lower())      # hello world
print(txt.strip())      # Removes whitespace
print(txt.replace("H", "J"))  # Jello World
print(txt.split(" "))   # ['Hello', 'World']`,
        },
        {
          subtitle: "String Concatenation",
          code: `a = "Hello"
b = "World"
c = a + " " + b
print(c)  # Hello World`,
        },
        {
          subtitle: "String Formatting",
          code: `age = 36
txt = f"My name is John, I am {age}"
print(txt)  # My name is John, I am 36`,
        },
        {
          subtitle: "String Slicing",
          code: `b = "Hello, World!"
print(b[2:5])   # llo
print(b[:5])    # Hello
print(b[2:])    # llo, World!
print(b[-5:-2]) # orl`,
        },
      ],
    },
    lists: {
      title: "Python Lists",
      description:
        "Lists are used to store multiple items in a single variable. Lists are ordered, changeable, and allow duplicate values.",
      topics: [
        {
          subtitle: "Creating Lists",
          code: `mylist = ["apple", "banana", "cherry"]
print(mylist)

# List can contain different data types
list1 = ["abc", 34, True, 40, "male"]`,
        },
        {
          subtitle: "Accessing Items",
          code: `thislist = ["apple", "banana", "cherry"]
print(thislist[0])   # apple
print(thislist[-1])  # cherry (negative indexing)`,
        },
        {
          subtitle: "List Methods",
          code: `fruits = ["apple", "banana", "cherry"]

fruits.append("orange")      # Add item
fruits.insert(1, "lemon")   # Insert at position
fruits.remove("banana")     # Remove item
fruits.pop()                # Remove last item
fruits.sort()               # Sort list
fruits.reverse()            # Reverse list
fruits.clear()              # Empty list

print(len(fruits))  # Length of list`,
        },
        {
          subtitle: "List Comprehension",
          code: `# Create a list of squares
squares = [x**2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With condition
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]`,
        },
      ],
    },
    tuples: {
      title: "Python Tuples",
      description:
        "Tuples are used to store multiple items in a single variable. Tuples are ordered and unchangeable.",
      topics: [
        {
          subtitle: "Creating Tuples",
          code: `mytuple = ("apple", "banana", "cherry")
print(mytuple)

# Single item tuple (note the comma)
thistuple = ("apple",)`,
        },
        {
          subtitle: "Accessing Tuples",
          code: `thistuple = ("apple", "banana", "cherry")
print(thistuple[1])   # banana
print(thistuple[-1])  # cherry`,
        },
        {
          subtitle: "Tuple Methods",
          code: `thistuple = ("apple", "banana", "cherry")

x = thistuple.count("apple")  # Count occurrences
y = thistuple.index("banana") # Find index

# Tuples are immutable, but you can convert to list
x = list(thistuple)
x.append("orange")
thistuple = tuple(x)`,
        },
      ],
    },
    sets: {
      title: "Python Sets",
      description:
        "Sets are used to store multiple items in a single variable. Sets are unordered, unchangeable, and do not allow duplicates.",
      topics: [
        {
          subtitle: "Creating Sets",
          code: `myset = {"apple", "banana", "cherry"}
print(myset)

# Duplicates are ignored
thisset = {"apple", "banana", "cherry", "apple"}
print(thisset)  # {'cherry', 'banana', 'apple'}`,
        },
        {
          subtitle: "Set Methods",
          code: `thisset = {"apple", "banana", "cherry"}

thisset.add("orange")           # Add item
thisset.update(["mango", "grapes"])  # Add multiple
thisset.remove("banana")        # Remove (error if not exists)
thisset.discard("apple")        # Remove (no error)
thisset.pop()                   # Remove random item
thisset.clear()                 # Empty set`,
        },
        {
          subtitle: "Set Operations",
          code: `set1 = {"a", "b", "c"}
set2 = {"c", "d", "e"}

# Union
set3 = set1.union(set2)
print(set3)  # {'a', 'b', 'c', 'd', 'e'}

# Intersection
set3 = set1.intersection(set2)
print(set3)  # {'c'}

# Difference
set3 = set1.difference(set2)
print(set3)  # {'a', 'b'}`,
        },
      ],
    },
    dictionaries: {
      title: "Python Dictionaries",
      description:
        "Dictionaries are used to store data values in key:value pairs. They are ordered, changeable, and do not allow duplicates.",
      topics: [
        {
          subtitle: "Creating Dictionaries",
          code: `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict)`,
        },
        {
          subtitle: "Accessing Items",
          code: `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = thisdict["model"]
y = thisdict.get("brand")

# Get all keys
keys = thisdict.keys()

# Get all values
values = thisdict.values()

# Get all items
items = thisdict.items()`,
        },
        {
          subtitle: "Dictionary Methods",
          code: `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

# Add/Update item
thisdict["color"] = "red"
thisdict.update({"year": 2020})

# Remove items
thisdict.pop("model")
del thisdict["brand"]
thisdict.clear()  # Empty dictionary`,
        },
        {
          subtitle: "Loop Through Dictionary",
          code: `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

# Loop through keys
for x in thisdict:
  print(x)

# Loop through values
for x in thisdict.values():
  print(x)

# Loop through both
for x, y in thisdict.items():
  print(x, y)`,
        },
      ],
    },
    ifelse: {
      title: "Python If...Else",
      description:
        "Python supports the usual logical conditions from mathematics and uses them to make decisions.",
      topics: [
        {
          subtitle: "If Statement",
          code: `a = 33
b = 200
if b > a:
    print("b is greater than a")`,
        },
        {
          subtitle: "Elif Statement",
          code: `a = 33
b = 33
if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")`,
        },
        {
          subtitle: "Else Statement",
          code: `a = 200
b = 33
if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")
else:
    print("a is greater than b")`,
        },
        {
          subtitle: "Short Hand If",
          code: `a = 2
b = 330

# One line if
if a > b: print("a is greater than b")

# Ternary operator
print("A") if a > b else print("B")

# Multiple conditions
result = "A" if a > b else "Equal" if a == b else "B"`,
        },
        {
          subtitle: "Logical Operators",
          code: `a = 200
b = 33
c = 500

if a > b and c > a:
    print("Both conditions are True")

if a > b or a > c:
    print("At least one condition is True")

if not a > b:
    print("a is NOT greater than b")`,
        },
      ],
    },
    loops: {
      title: "Python Loops",
      description:
        "Python has two primitive loop commands: while loops and for loops.",
      topics: [
        {
          subtitle: "While Loop",
          code: `i = 1
while i < 6:
    print(i)
    i += 1`,
        },
        {
          subtitle: "Break Statement",
          code: `i = 1
while i < 6:
    print(i)
    if i == 3:
        break
    i += 1`,
        },
        {
          subtitle: "Continue Statement",
          code: `i = 0
while i < 6:
    i += 1
    if i == 3:
        continue
    print(i)`,
        },
        {
          subtitle: "For Loop",
          code: `fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)

# Loop through string
for x in "banana":
    print(x)`,
        },
        {
          subtitle: "Range Function",
          code: `# Loop through numbers
for x in range(6):
    print(x)  # 0 to 5

# Start and end
for x in range(2, 6):
    print(x)  # 2 to 5

# With step
for x in range(2, 30, 3):
    print(x)  # 2, 5, 8, 11, ...`,
        },
        {
          subtitle: "Nested Loops",
          code: `adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
    for y in fruits:
        print(x, y)`,
        },
      ],
    },
    functions: {
      title: "Python Functions",
      description:
        "A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function.",
      topics: [
        {
          subtitle: "Creating a Function",
          code: `def my_function():
    print("Hello from a function")

my_function()  # Call the function`,
        },
        {
          subtitle: "Arguments",
          code: `def my_function(fname):
    print(fname + " Refsnes")

my_function("Emil")
my_function("Tobias")
my_function("Linus")`,
        },
        {
          subtitle: "Parameters with Default Values",
          code: `def my_function(country = "Norway"):
    print("I am from " + country)

my_function("Sweden")
my_function("India")
my_function()  # Uses default`,
        },
        {
          subtitle: "Return Values",
          code: `def my_function(x):
    return 5 * x

print(my_function(3))  # 15
print(my_function(5))  # 25
print(my_function(9))  # 45`,
        },
        {
          subtitle: "Keyword Arguments",
          code: `def my_function(child3, child2, child1):
    print("The youngest child is " + child3)

my_function(child1="Emil", child2="Tobias", child3="Linus")`,
        },
        {
          subtitle: "Arbitrary Arguments (*args)",
          code: `def my_function(*kids):
    print("The youngest child is " + kids[2])

my_function("Emil", "Tobias", "Linus")`,
        },
        {
          subtitle: "Lambda Functions",
          code: `# Lambda syntax: lambda arguments : expression
x = lambda a: a + 10
print(x(5))  # 15

# Lambda with multiple arguments
x = lambda a, b: a * b
print(x(5, 6))  # 30

# Lambda in function
def myfunc(n):
    return lambda a: a * n

mydoubler = myfunc(2)
print(mydoubler(11))  # 22`,
        },
      ],
    },
    classes: {
      title: "Python Classes and Objects",
      description:
        "Python is an object oriented programming language. Almost everything in Python is an object, with its properties and methods.",
      topics: [
        {
          subtitle: "Creating a Class",
          code: `class MyClass:
    x = 5

p1 = MyClass()
print(p1.x)  # 5`,
        },
        {
          subtitle: "The __init__() Function",
          code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p1 = Person("John", 36)
print(p1.name)  # John
print(p1.age)   # 36`,
        },
        {
          subtitle: "Object Methods",
          code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def myfunc(self):
        print("Hello my name is " + self.name)

p1 = Person("John", 36)
p1.myfunc()`,
        },
        {
          subtitle: "The self Parameter",
          text: "The self parameter is a reference to the current instance of the class, and is used to access variables that belong to the class.",
          code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, I am {self.name}"`,
        },
        {
          subtitle: "Inheritance",
          code: `class Person:
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname
    
    def printname(self):
        print(self.firstname, self.lastname)

class Student(Person):
    def __init__(self, fname, lname, year):
        super().__init__(fname, lname)
        self.graduationyear = year

x = Student("Mike", "Olsen", 2019)
x.printname()`,
        },
      ],
    },
    modules: {
      title: "Python Modules",
      description:
        "A module is a file containing Python definitions and statements. The file name is the module name with the suffix .py added.",
      topics: [
        {
          subtitle: "Creating a Module",
          text: "Save this code in a file named mymodule.py:",
          code: `# mymodule.py
def greeting(name):
    print("Hello, " + name)`,
        },
        {
          subtitle: "Using a Module",
          code: `import mymodule

mymodule.greeting("Jonathan")`,
        },
        {
          subtitle: "Built-in Modules",
          code: `import platform

x = platform.system()
print(x)`,
        },
        {
          subtitle: "Import From Module",
          code: `from mymodule import greeting

greeting("Jonathan")  # No need for module name`,
        },
        {
          subtitle: "Using Aliases",
          code: `import mymodule as mx

mx.greeting("Jonathan")`,
        },
        {
          subtitle: "Popular Built-in Modules",
          text: "• math - Mathematical functions\n• random - Generate random numbers\n• datetime - Work with dates and times\n• os - Operating system interface\n• json - Work with JSON data\n• re - Regular expressions",
          code: `import math
print(math.sqrt(64))  # 8.0

import random
print(random.randint(1, 10))

import datetime
x = datetime.datetime.now()
print(x)`,
        },
      ],
    },
    filehandling: {
      title: "Python File Handling",
      description:
        "File handling is an important part of any web application. Python has several functions for creating, reading, updating, and deleting files.",
      topics: [
        {
          subtitle: "Opening Files",
          code: `# "r" - Read (default)
# "a" - Append
# "w" - Write
# "x" - Create

f = open("demofile.txt", "r")
print(f.read())
f.close()`,
        },
        {
          subtitle: "Reading Files",
          code: `# Read entire file
f = open("demofile.txt", "r")
print(f.read())
f.close()

# Read one line
f = open("demofile.txt", "r")
print(f.readline())
f.close()

# Loop through lines
f = open("demofile.txt", "r")
for x in f:
    print(x)
f.close()`,
        },
        {
          subtitle: "Writing to Files",
          code: `# Append to file
f = open("demofile.txt", "a")
f.write("Now the file has more content!")
f.close()

# Overwrite file
f = open("demofile.txt", "w")
f.write("I have deleted the content!")
f.close()`,
        },
        {
          subtitle: "Creating Files",
          code: `# Create new file
f = open("myfile.txt", "x")
f.close()

# Or use "w" mode
f = open("myfile.txt", "w")
f.close()`,
        },
        {
          subtitle: "Deleting Files",
          code: `import os

# Check if file exists
if os.path.exists("demofile.txt"):
    os.remove("demofile.txt")
else:
    print("The file does not exist")

# Delete folder
os.rmdir("myfolder")`,
        },
        {
          subtitle: "Using With Statement",
          text: "The with statement automatically closes the file when done:",
          code: `# Better way to handle files
with open("demofile.txt", "r") as f:
    content = f.read()
    print(content)
# File is automatically closed`,
        },
      ],
    },
    exceptions: {
      title: "Python Exception Handling",
      description:
        "The try block lets you test a block of code for errors. The except block lets you handle the error.",
      topics: [
        {
          subtitle: "Try...Except",
          code: `try:
    print(x)
except:
    print("An exception occurred")`,
        },
        {
          subtitle: "Multiple Exceptions",
          code: `try:
    print(x)
except NameError:
    print("Variable x is not defined")
except:
    print("Something else went wrong")`,
        },
        {
          subtitle: "Else Clause",
          code: `try:
    print("Hello")
except:
    print("Something went wrong")
else:
    print("Nothing went wrong")`,
        },
        {
          subtitle: "Finally Clause",
          text: "The finally block will be executed regardless if the try block raises an error or not:",
          code: `try:
    print(x)
except:
    print("Something went wrong")
finally:
    print("The try except is finished")`,
        },
        {
          subtitle: "Raise an Exception",
          code: `x = -1

if x < 0:
    raise Exception("Sorry, no numbers below zero")`,
        },
        {
          subtitle: "Common Exception Types",
          code: `# ValueError
try:
    x = int("hello")
except ValueError:
    print("Cannot convert string to int")

# ZeroDivisionError
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")

# FileNotFoundError
try:
    f = open("nonexistent.txt")
except FileNotFoundError:
    print("File not found")

# IndexError
try:
    mylist = [1, 2, 3]
    print(mylist[10])
except IndexError:
    print("Index out of range")`,
        },
      ],
    },
  };
  type SectionKey = keyof typeof content;
  const currentContent = content[activeSection as SectionKey];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-0"
        } bg-white border-r border-gray-200 overflow-hidden transition-all duration-300`}
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="text-2xl">🐍</div>
            <h1 className="text-xl font-bold text-gray-800">Python Tutorial</h1>
          </div>
        </div>
        <nav className="p-2 overflow-y-auto h-[calc(100vh-73px)]">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg mb-1 transition-colors flex items-center gap-2 ${
                activeSection === section.id
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="text-lg">{section.icon}</span>
              <span className="text-sm">{section.title}</span>
              {activeSection === section.id && (
                <ChevronRight className="ml-auto w-4 h-4" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              {isSidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
            <div className="flex items-center gap-2">
              <Book className="w-5 h-5 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">
                {currentContent.title}
              </h2>
            </div>
          </div>
          <p className="text-gray-600 mt-2 ml-12">
            {currentContent.description}
          </p>
        </div>

        {/* Content */}
        <div className="p-8 max-w-5xl">
          {currentContent.topics.map((topic, index) => (
            <div key={index} className="mb-8">
              {topic.subtitle && (
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  {topic.subtitle}
                </h3>
              )}

              {"text" in topic && topic.text && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                  <p className="text-gray-700 whitespace-pre-line">
                    {topic.text}
                  </p>
                </div>
              )}

              {topic.code && (
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-gray-400 text-sm ml-2">Python</span>
                  </div>
                  <pre className="p-4 overflow-x-auto">
                    <code className="text-green-400 text-sm font-mono">
                      {topic.code}
                    </code>
                  </pre>
                </div>
              )}
            </div>
          ))}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12 pt-6 border-t border-gray-200">
            <button
              onClick={() => {
                const currentIndex = sections.findIndex(
                  (s) => s.id === activeSection
                );
                if (currentIndex > 0) {
                  setActiveSection(sections[currentIndex - 1].id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              disabled={sections.findIndex((s) => s.id === activeSection) === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                sections.findIndex((s) => s.id === activeSection) === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              Previous
            </button>

            <button
              onClick={() => {
                const currentIndex = sections.findIndex(
                  (s) => s.id === activeSection
                );
                if (currentIndex < sections.length - 1) {
                  setActiveSection(sections[currentIndex + 1].id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              disabled={
                sections.findIndex((s) => s.id === activeSection) ===
                sections.length - 1
              }
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                sections.findIndex((s) => s.id === activeSection) ===
                sections.length - 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Footer */}
          <div className="mt-12 p-6 bg-linear-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Ready to practice?
            </h4>
            <p className="text-gray-600">
              Try out the examples in your compiler and experiment with the code
              to learn better!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
