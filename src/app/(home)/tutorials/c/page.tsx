"use client";
import React, { useState } from "react";
import { Book, Code, ChevronRight, Menu, X } from "lucide-react";

export default function CDocumentation() {
  const [activeSection, setActiveSection] = useState("intro");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const sections = [
    { id: "intro", title: "Introduction", icon: "📘" },
    { id: "syntax", title: "Syntax", icon: "📝" },
    { id: "output", title: "Output", icon: "🖨️" },
    { id: "comments", title: "Comments", icon: "💬" },
    { id: "variables", title: "Variables", icon: "📦" },
    { id: "datatypes", title: "Data Types", icon: "🔢" },
    { id: "constants", title: "Constants", icon: "🔒" },
    { id: "operators", title: "Operators", icon: "➕" },
    { id: "strings", title: "Strings", icon: "🔤" },
    { id: "input", title: "User Input", icon: "⌨️" },
    { id: "conditions", title: "Conditions", icon: "🔀" },
    { id: "switch", title: "Switch", icon: "🎚️" },
    { id: "loops", title: "Loops", icon: "🔄" },
    { id: "arrays", title: "Arrays", icon: "📊" },
    { id: "pointers", title: "Pointers", icon: "👉" },
    { id: "functions", title: "Functions", icon: "⚙️" },
    { id: "structures", title: "Structures", icon: "🏗️" },
    { id: "files", title: "File Handling", icon: "📁" },
  ];

  const content = {
    intro: {
      title: "C Language Introduction",
      description:
        "C is a general-purpose programming language created by Dennis Ritchie at Bell Labs in 1972.",
      topics: [
        {
          subtitle: "What is C?",
          text: "C is a powerful general-purpose programming language. It can be used to develop operating systems, databases, compilers, and much more. C is highly portable and is used for scripting system applications.",
        },
        {
          subtitle: "Why Learn C?",
          text: "• One of the most popular programming languages\n• Fast and efficient\n• Close to the hardware\n• Foundation for many other languages\n• Great for understanding how computers work\n• Used in operating systems, embedded systems, and game development",
        },
        {
          subtitle: "First C Program",
          code: `#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`,
        },
        {
          subtitle: "Program Explanation",
          text: "• #include <stdio.h> - Includes the standard input/output library\n• int main() - The main function where execution begins\n• printf() - Function to print output\n• return 0 - Indicates successful program termination",
        },
      ],
    },
    syntax: {
      title: "C Syntax",
      description:
        "Understanding the basic syntax and structure of C programs.",
      topics: [
        {
          subtitle: "Basic Syntax",
          code: `#include <stdio.h>

int main() {
    // Your code here
    printf("Hello, World!");
    return 0;
}`,
        },
        {
          subtitle: "Semicolons",
          text: "Every statement in C must end with a semicolon (;)",
          code: `printf("Hello");  // Correct
printf("World");  // Correct
printf("Error")   // Error - missing semicolon`,
        },
        {
          subtitle: "Code Blocks",
          text: "Curly braces {} define code blocks",
          code: `int main() {
    // This is a code block
    printf("Inside main function");
    return 0;
}`,
        },
        {
          subtitle: "Case Sensitivity",
          text: 'C is case-sensitive. "Main", "main", and "MAIN" are different.',
          code: `int number = 5;   // Valid
int Number = 10;  // Different variable
int NUMBER = 15;  // Another different variable`,
        },
      ],
    },
    output: {
      title: "C Output",
      description: "Learn how to display output in C using printf() function.",
      topics: [
        {
          subtitle: "printf() Function",
          text: "The printf() function is used to output values/text",
          code: `#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`,
        },
        {
          subtitle: "Multiple printf() Statements",
          code: `printf("Hello World!");
printf("I am learning C.");
printf("It is awesome!");

// Output: Hello World!I am learning C.It is awesome!`,
        },
        {
          subtitle: "New Lines",
          text: "Use \\n to create new lines",
          code: `printf("Hello World!\\n");
printf("I am learning C.\\n");
printf("It is awesome!");

// Output:
// Hello World!
// I am learning C.
// It is awesome!`,
        },
        {
          subtitle: "Format Specifiers",
          text: "Format specifiers are used to output variables",
          code: `int myNum = 15;
float myFloat = 5.99;
char myLetter = 'D';

printf("My number is %d\\n", myNum);
printf("My float is %.2f\\n", myFloat);
printf("My letter is %c\\n", myLetter);

// Output:
// My number is 15
// My float is 5.99
// My letter is D`,
        },
        {
          subtitle: "Common Format Specifiers",
          text: "%d or %i - Integer\n%f - Float\n%c - Character\n%s - String\n%p - Pointer\n%x - Hexadecimal",
          code: `printf("%d\\n", 15);      // 15
printf("%f\\n", 3.14);    // 3.140000
printf("%.2f\\n", 3.14);  // 3.14
printf("%c\\n", 'A');     // A
printf("%s\\n", "Hello"); // Hello`,
        },
      ],
    },
    comments: {
      title: "C Comments",
      description:
        "Comments can be used to explain code and make it more readable.",
      topics: [
        {
          subtitle: "Single-line Comments",
          text: "Single-line comments start with //",
          code: `// This is a single-line comment
printf("Hello World!");  // This is also a comment`,
        },
        {
          subtitle: "Multi-line Comments",
          text: "Multi-line comments start with /* and end with */",
          code: `/* This is a multi-line comment
   It can span multiple lines
   Very useful for longer explanations */
printf("Hello World!");`,
        },
        {
          subtitle: "Best Practices",
          code: `// Good: Explain why, not what
int age = 25;  // User must be 18+

// Good: Document complex logic
/* Calculate discount based on:
   - Customer tier
   - Purchase amount
   - Seasonal promotions */

// Avoid: Stating the obvious
int x = 5;  // Set x to 5 (Bad comment)`,
        },
      ],
    },
    variables: {
      title: "C Variables",
      description: "Variables are containers for storing data values.",
      topics: [
        {
          subtitle: "Declaring Variables",
          text: "Syntax: type variableName = value;",
          code: `int myNum = 15;
float myFloat = 5.99;
char myLetter = 'D';`,
        },
        {
          subtitle: "Variable Types",
          code: `int myNum = 5;              // Integer
float myFloat = 5.99;       // Floating point
double myDouble = 9.98;     // Double precision float
char myLetter = 'D';        // Character`,
        },
        {
          subtitle: "Declaring Without Value",
          code: `int myNum;
myNum = 15;  // Assign value later

// Multiple declarations
int x, y, z;
x = y = z = 50;`,
        },
        {
          subtitle: "Variable Names",
          text: "Rules for naming variables:\n• Can contain letters, digits, and underscores\n• Must begin with a letter or underscore\n• Case-sensitive\n• Cannot use reserved keywords",
          code: `// Valid names
int age;
int _count;
int myVariable123;
int my_var;

// Invalid names
int 2name;    // Starts with digit
int my-var;   // Contains hyphen
int int;      // Reserved keyword`,
        },
        {
          subtitle: "Constants with const",
          code: `const int MINUTES_PER_HOUR = 60;
const float PI = 3.14;

// MINUTES_PER_HOUR = 70;  // Error: cannot modify const`,
        },
      ],
    },
    datatypes: {
      title: "C Data Types",
      description:
        "Data types specify the type and size of data that variables can store.",
      topics: [
        {
          subtitle: "Basic Data Types",
          text: "int - Integer (4 bytes)\nfloat - Floating point (4 bytes)\ndouble - Double precision float (8 bytes)\nchar - Character (1 byte)",
          code: `int myNum = 5;
float myFloat = 5.99;
double myDouble = 9.98;
char myLetter = 'D';`,
        },
        {
          subtitle: "Format Specifiers",
          code: `int myInt = 15;
float myFloat = 5.99;
double myDouble = 19.99;
char myChar = 'A';

printf("%d\\n", myInt);     // Integer
printf("%f\\n", myFloat);   // Float
printf("%lf\\n", myDouble); // Double
printf("%c\\n", myChar);    // Character`,
        },
        {
          subtitle: "Integer Types",
          code: `short a = 100;           // 2 bytes
int b = 1000;            // 4 bytes
long c = 100000;         // 4 or 8 bytes
long long d = 10000000;  // 8 bytes

unsigned int e = 50;     // Only positive values`,
        },
        {
          subtitle: "Size of Data Types",
          code: `#include <stdio.h>

int main() {
    printf("Size of int: %lu bytes\\n", sizeof(int));
    printf("Size of float: %lu bytes\\n", sizeof(float));
    printf("Size of double: %lu bytes\\n", sizeof(double));
    printf("Size of char: %lu bytes\\n", sizeof(char));
    return 0;
}`,
        },
        {
          subtitle: "Type Conversion",
          code: `// Implicit conversion
int myInt = 9;
float myFloat = myInt;  // Automatic conversion

// Explicit conversion (casting)
float sum = 5.5;
int result = (int)sum;  // result = 5

// Division example
float division = (float)5 / 2;  // 2.5
int intDivision = 5 / 2;        // 2`,
        },
      ],
    },
    constants: {
      title: "C Constants",
      description:
        "Constants are fixed values that cannot be altered by the program during execution.",
      topics: [
        {
          subtitle: "Using const Keyword",
          code: `const int MINUTES_PER_HOUR = 60;
const float PI = 3.14159;
const char NEWLINE = '\\n';

printf("Minutes: %d\\n", MINUTES_PER_HOUR);
// MINUTES_PER_HOUR = 70;  // Error!`,
        },
        {
          subtitle: "#define Preprocessor",
          code: `#include <stdio.h>
#define PI 3.14159
#define CIRCLE_AREA(r) (PI * (r) * (r))

int main() {
    printf("PI = %f\\n", PI);
    printf("Area = %f\\n", CIRCLE_AREA(5));
    return 0;
}`,
        },
        {
          subtitle: "Best Practices",
          text: "• Use UPPERCASE for constant names\n• Prefer const over #define for type safety\n• Use #define for macro definitions\n• Constants make code more maintainable",
          code: `#define MAX_SIZE 100
#define MIN_VALUE 0

const int DAYS_IN_WEEK = 7;
const double EARTH_GRAVITY = 9.81;`,
        },
      ],
    },
    operators: {
      title: "C Operators",
      description:
        "Operators are used to perform operations on variables and values.",
      topics: [
        {
          subtitle: "Arithmetic Operators",
          code: `int a = 10, b = 3;

printf("%d\\n", a + b);   // Addition: 13
printf("%d\\n", a - b);   // Subtraction: 7
printf("%d\\n", a * b);   // Multiplication: 30
printf("%d\\n", a / b);   // Division: 3
printf("%d\\n", a % b);   // Modulus: 1

a++;  // Increment: a = 11
b--;  // Decrement: b = 2`,
        },
        {
          subtitle: "Assignment Operators",
          code: `int x = 10;

x += 5;   // x = x + 5  (15)
x -= 3;   // x = x - 3  (12)
x *= 2;   // x = x * 2  (24)
x /= 4;   // x = x / 4  (6)
x %= 4;   // x = x % 4  (2)`,
        },
        {
          subtitle: "Comparison Operators",
          code: `int a = 5, b = 3;

printf("%d\\n", a == b);  // Equal to: 0 (false)
printf("%d\\n", a != b);  // Not equal: 1 (true)
printf("%d\\n", a > b);   // Greater than: 1
printf("%d\\n", a < b);   // Less than: 0
printf("%d\\n", a >= b);  // Greater or equal: 1
printf("%d\\n", a <= b);  // Less or equal: 0`,
        },
        {
          subtitle: "Logical Operators",
          code: `int x = 5;

// AND operator
if (x > 3 && x < 10) {
    printf("x is between 3 and 10\\n");
}

// OR operator
if (x < 3 || x > 10) {
    printf("x is outside 3-10 range\\n");
}

// NOT operator
if (!(x == 3)) {
    printf("x is not 3\\n");
}`,
        },
        {
          subtitle: "Bitwise Operators",
          code: `int a = 5;   // 0101 in binary
int b = 3;   // 0011 in binary

printf("%d\\n", a & b);   // AND: 1 (0001)
printf("%d\\n", a | b);   // OR: 7 (0111)
printf("%d\\n", a ^ b);   // XOR: 6 (0110)
printf("%d\\n", ~a);      // NOT: -6
printf("%d\\n", a << 1);  // Left shift: 10
printf("%d\\n", a >> 1);  // Right shift: 2`,
        },
      ],
    },
    strings: {
      title: "C Strings",
      description:
        "Strings are arrays of characters terminated by a null character.",
      topics: [
        {
          subtitle: "String Declaration",
          code: `// Method 1: Character array
char greeting1[] = "Hello";

// Method 2: Explicit array
char greeting2[] = {'H', 'e', 'l', 'l', 'o', '\\0'};

// Method 3: Pointer
char *greeting3 = "Hello";

printf("%s\\n", greeting1);`,
        },
        {
          subtitle: "Accessing String Characters",
          code: `char text[] = "Hello";

printf("%c\\n", text[0]);  // H
printf("%c\\n", text[1]);  // e

// Modify characters
text[0] = 'J';
printf("%s\\n", text);  // Jello`,
        },
        {
          subtitle: "String Functions",
          code: `#include <string.h>

char str1[20] = "Hello";
char str2[] = "World";
char str3[20];

// String length
printf("%lu\\n", strlen(str1));  // 5

// String copy
strcpy(str3, str1);
printf("%s\\n", str3);  // Hello

// String concatenation
strcat(str1, str2);
printf("%s\\n", str1);  // HelloWorld

// String comparison
if (strcmp(str1, str2) == 0) {
    printf("Strings are equal\\n");
}`,
        },
        {
          subtitle: "String Input",
          code: `char name[50];

// Read string with spaces
printf("Enter your name: ");
fgets(name, 50, stdin);
printf("Hello, %s", name);

// Read single word
scanf("%s", name);`,
        },
      ],
    },
    input: {
      title: "C User Input",
      description: "Learn how to get user input using scanf() function.",
      topics: [
        {
          subtitle: "scanf() Function",
          text: "The scanf() function takes input from the user",
          code: `int myNum;

printf("Enter a number: ");
scanf("%d", &myNum);  // Note the &

printf("You entered: %d\\n", myNum);`,
        },
        {
          subtitle: "Multiple Inputs",
          code: `int x, y;

printf("Enter two numbers: ");
scanf("%d %d", &x, &y);

printf("Sum: %d\\n", x + y);`,
        },
        {
          subtitle: "Different Data Types",
          code: `int age;
float height;
char grade;

printf("Enter age: ");
scanf("%d", &age);

printf("Enter height: ");
scanf("%f", &height);

printf("Enter grade: ");
scanf(" %c", &grade);  // Space before %c

printf("Age: %d, Height: %.2f, Grade: %c\\n", 
       age, height, grade);`,
        },
        {
          subtitle: "String Input",
          code: `char firstName[30];
char fullName[50];

// Single word
printf("Enter first name: ");
scanf("%s", firstName);  // No & for strings

// Full line with spaces
printf("Enter full name: ");
scanf(" %[^\\n]", fullName);  // Read until newline

printf("Hello, %s!\\n", firstName);`,
        },
      ],
    },
    conditions: {
      title: "C Conditions",
      description:
        "Conditional statements are used to perform different actions based on different conditions.",
      topics: [
        {
          subtitle: "If Statement",
          code: `int age = 20;

if (age >= 18) {
    printf("You are an adult\\n");
}`,
        },
        {
          subtitle: "If...Else Statement",
          code: `int number = 10;

if (number % 2 == 0) {
    printf("Even number\\n");
} else {
    printf("Odd number\\n");
}`,
        },
        {
          subtitle: "Else If Statement",
          code: `int score = 75;

if (score >= 90) {
    printf("Grade: A\\n");
} else if (score >= 80) {
    printf("Grade: B\\n");
} else if (score >= 70) {
    printf("Grade: C\\n");
} else if (score >= 60) {
    printf("Grade: D\\n");
} else {
    printf("Grade: F\\n");
}`,
        },
        {
          subtitle: "Nested If",
          code: `int age = 25;
int hasLicense = 1;

if (age >= 18) {
    if (hasLicense) {
        printf("You can drive\\n");
    } else {
        printf("Get a license first\\n");
    }
} else {
    printf("Too young to drive\\n");
}`,
        },
        {
          subtitle: "Ternary Operator",
          code: `int age = 20;

// condition ? true_value : false_value
char *result = (age >= 18) ? "Adult" : "Minor";
printf("%s\\n", result);

// Another example
int a = 10, b = 20;
int max = (a > b) ? a : b;
printf("Maximum: %d\\n", max);`,
        },
      ],
    },
    switch: {
      title: "C Switch Statement",
      description:
        "The switch statement is used to select one of many code blocks to execute.",
      topics: [
        {
          subtitle: "Basic Switch",
          code: `int day = 3;

switch (day) {
    case 1:
        printf("Monday\\n");
        break;
    case 2:
        printf("Tuesday\\n");
        break;
    case 3:
        printf("Wednesday\\n");
        break;
    default:
        printf("Invalid day\\n");
}`,
        },
        {
          subtitle: "Switch with Default",
          code: `char grade = 'B';

switch (grade) {
    case 'A':
        printf("Excellent!\\n");
        break;
    case 'B':
        printf("Good!\\n");
        break;
    case 'C':
        printf("Fair\\n");
        break;
    default:
        printf("Invalid grade\\n");
}`,
        },
        {
          subtitle: "Fall-through Cases",
          code: `int month = 2;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        printf("31 days\\n");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        printf("30 days\\n");
        break;
    case 2:
        printf("28 or 29 days\\n");
        break;
    default:
        printf("Invalid month\\n");
}`,
        },
        {
          subtitle: "Calculator Example",
          code: `char operator;
int num1, num2;

printf("Enter operator (+, -, *, /): ");
scanf("%c", &operator);

printf("Enter two numbers: ");
scanf("%d %d", &num1, &num2);

switch (operator) {
    case '+':
        printf("%d + %d = %d\\n", num1, num2, num1 + num2);
        break;
    case '-':
        printf("%d - %d = %d\\n", num1, num2, num1 - num2);
        break;
    case '*':
        printf("%d * %d = %d\\n", num1, num2, num1 * num2);
        break;
    case '/':
        printf("%d / %d = %d\\n", num1, num2, num1 / num2);
        break;
    default:
        printf("Invalid operator\\n");
}`,
        },
      ],
    },
    loops: {
      title: "C Loops",
      description:
        "Loops can execute a block of code as long as a specified condition is reached.",
      topics: [
        {
          subtitle: "While Loop",
          code: `int i = 1;

while (i <= 5) {
    printf("%d\\n", i);
    i++;
}
// Output: 1 2 3 4 5`,
        },
        {
          subtitle: "Do...While Loop",
          text: "The do...while loop will execute at least once",
          code: `int i = 1;

do {
    printf("%d\\n", i);
    i++;
} while (i <= 5);

// Executes at least once even if condition is false
int j = 10;
do {
    printf("Runs once: %d\\n", j);
} while (j < 5);`,
        },
        {
          subtitle: "For Loop",
          code: `// Basic for loop
for (int i = 1; i <= 5; i++) {
    printf("%d\\n", i);
}

// Skip even numbers
for (int i = 1; i <= 10; i += 2) {
    printf("%d ", i);  // 1 3 5 7 9
}
printf("\\n");

// Countdown
for (int i = 10; i >= 1; i--) {
    printf("%d ", i);
}`,
        },
        {
          subtitle: "Nested Loops",
          code: `// Multiplication table
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        printf("%d * %d = %d\\n", i, j, i * j);
    }
    printf("\\n");
}

// Pattern printing
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        printf("* ");
    }
    printf("\\n");
}`,
        },
        {
          subtitle: "Break and Continue",
          code: `// Break statement
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break;  // Exit loop
    }
    printf("%d ", i);  // 1 2 3 4
}
printf("\\n");

// Continue statement
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;  // Skip to next iteration
    }
    printf("%d ", i);  // 1 2 4 5
}`,
        },
      ],
    },
    arrays: {
      title: "C Arrays",
      description:
        "Arrays are used to store multiple values in a single variable.",
      topics: [
        {
          subtitle: "Declaring Arrays",
          code: `// Method 1: Declare and initialize
int numbers[5] = {1, 2, 3, 4, 5};

// Method 2: Declare then assign
int nums[3];
nums[0] = 10;
nums[1] = 20;
nums[2] = 30;

// Method 3: Size determined by initializer
int values[] = {1, 2, 3, 4, 5};`,
        },
        {
          subtitle: "Accessing Array Elements",
          code: `int numbers[] = {10, 20, 30, 40, 50};

printf("%d\\n", numbers[0]);  // 10
printf("%d\\n", numbers[2]);  // 30

// Modify elements
numbers[1] = 25;
printf("%d\\n", numbers[1]);  // 25`,
        },
        {
          subtitle: "Loop Through Array",
          code: `int numbers[] = {10, 20, 30, 40, 50};
int length = sizeof(numbers) / sizeof(numbers[0]);

// Using for loop
for (int i = 0; i < length; i++) {
    printf("%d ", numbers[i]);
}
printf("\\n");

// Calculate sum
int sum = 0;
for (int i = 0; i < 5; i++) {
    sum += numbers[i];
}
printf("Sum: %d\\n", sum);`,
        },
        {
          subtitle: "Multi-dimensional Arrays",
          code: `// 2D Array (Matrix)
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

// Access elements
printf("%d\\n", matrix[0][1]);  // 2
printf("%d\\n", matrix[1][2]);  // 6

// Loop through 2D array
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d ", matrix[i][j]);
    }
    printf("\\n");
}`,
        },
        {
          subtitle: "Array as Function Parameter",
          code: `void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    
    printArray(numbers, size);
    return 0;
}`,
        },
      ],
    },
    pointers: {
      title: "C Pointers",
      description:
        "A pointer is a variable that stores the memory address of another variable.",
      topics: [
        {
          subtitle: "Creating Pointers",
          code: `int age = 25;
int *ptr = &age;  // Pointer to age

printf("Value: %d\\n", age);         // 25
printf("Address: %p\\n", &age);      // Memory address
printf("Pointer: %p\\n", ptr);       // Same address
printf("Value via pointer: %d\\n", *ptr);  // 25`,
        },
        {
          subtitle: "Pointer Operators",
          text: "& - Address-of operator (gets address)\n* - Dereference operator (gets value)",
          code: `int num = 100;
int *p = &num;

printf("Address of num: %p\\n", &num);
printf("Value of p: %p\\n", p);
printf("Value at p: %d\\n", *p);

// Modify through pointer
*p = 200;
printf("New num value: %d\\n", num);  // 200`,
        },
        {
          subtitle: "Pointers and Arrays",
          code: `int arr[] = {10, 20, 30, 40, 50};
int *ptr = arr;  // Array name is a pointer

// Access array elements using pointer
printf("%d\\n", *ptr);      // 10
printf("%d\\n", *(ptr+1));  // 20
printf("%d\\n", *(ptr+2));  // 30

// Loop through array using pointer
for (int i = 0; i < 5; i++) {
    printf("%d ", *(ptr + i));
}`,
        },
        {
          subtitle: "Pointer Arithmetic",
          code: `int numbers[] = {10, 20, 30, 40, 50};
int *p = numbers;

printf("%d\\n", *p);    // 10
p++;                     // Move to next element
printf("%d\\n", *p);    // 20
p += 2;                  // Skip 2 elements
printf("%d\\n", *p);    // 50`,
        },
        {
          subtitle: "Pointers and Functions",
          code: `void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    printf("Before: x=%d, y=%d\\n", x, y);
    
    swap(&x, &y);  // Pass addresses
    printf("After: x=%d, y=%d\\n", x, y);
    
    return 0;
}`,
        },
      ],
    },
    functions: {
      title: "C Functions",
      description:
        "A function is a block of code which only runs when it is called.",
      topics: [
        {
          subtitle: "Function Declaration and Definition",
          code: `// Function declaration (prototype)
void greet();

int main() {
    greet();  // Function call
    return 0;
}

// Function definition
void greet() {
    printf("Hello, World!\\n");
}`,
        },
        {
          subtitle: "Function with Parameters",
          code: `void printName(char name[]) {
    printf("Hello, %s!\\n", name);
}

void addNumbers(int a, int b) {
    printf("Sum: %d\\n", a + b);
}

int main() {
    printName("John");
    addNumbers(5, 3);
    return 0;
}`,
        },
        {
          subtitle: "Function with Return Value",
          code: `int add(int a, int b) {
    return a + b;
}

float divide(float a, float b) {
    if (b == 0) {
        printf("Error: Division by zero\\n");
        return 0;
    }
    return a / b;
}

int main() {
    int sum = add(10, 20);
    printf("Sum: %d\\n", sum);
    
    float result = divide(10.0, 3.0);
    printf("Result: %.2f\\n", result);
    
    return 0;
}`,
        },
        {
          subtitle: "Multiple Parameters",
          code: `int findMax(int a, int b, int c) {
    int max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}

float calculateArea(float length, float width) {
    return length * width;
}

int main() {
    printf("Max: %d\\n", findMax(10, 25, 15));
    printf("Area: %.2f\\n", calculateArea(5.5, 3.2));
    return 0;
}`,
        },
        {
          subtitle: "Recursion",
          code: `// Factorial using recursion
int factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Fibonacci series
int fibonacci(int n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    printf("5! = %d\\n", factorial(5));  // 120
    printf("Fib(7) = %d\\n", fibonacci(7));  // 13
    return 0;
}`,
        },
        {
          subtitle: "Function Prototypes",
          code: `#include <stdio.h>

// Function prototypes
int add(int, int);
int subtract(int, int);
int multiply(int, int);
float divide(int, int);

int main() {
    printf("%d\\n", add(5, 3));
    printf("%d\\n", subtract(5, 3));
    printf("%d\\n", multiply(5, 3));
    printf("%.2f\\n", divide(5, 3));
    return 0;
}

int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }
int multiply(int a, int b) { return a * b; }
float divide(int a, int b) { return (float)a / b; }`,
        },
      ],
    },
    structures: {
      title: "C Structures",
      description:
        "Structures are used to group several related variables into one place.",
      topics: [
        {
          subtitle: "Defining a Structure",
          code: `struct Person {
    char name[50];
    int age;
    float salary;
};

int main() {
    struct Person person1;
    return 0;
}`,
        },
        {
          subtitle: "Accessing Structure Members",
          code: `struct Person {
    char name[50];
    int age;
    float salary;
};

int main() {
    struct Person person1;
    
    // Assign values
    strcpy(person1.name, "John");
    person1.age = 30;
    person1.salary = 50000.50;
    
    // Access values
    printf("Name: %s\\n", person1.name);
    printf("Age: %d\\n", person1.age);
    printf("Salary: %.2f\\n", person1.salary);
    
    return 0;
}`,
        },
        {
          subtitle: "Initialize Structure",
          code: `struct Person {
    char name[50];
    int age;
    float salary;
};

int main() {
    // Method 1: Initialize during declaration
    struct Person p1 = {"Alice", 25, 45000.00};
    
    // Method 2: Designated initializers
    struct Person p2 = {
        .name = "Bob",
        .age = 28,
        .salary = 55000.00
    };
    
    printf("%s is %d years old\\n", p1.name, p1.age);
    printf("%s earns %.2f\\n", p2.name, p2.salary);
    
    return 0;
}`,
        },
        {
          subtitle: "Array of Structures",
          code: `struct Student {
    char name[50];
    int rollNo;
    float marks;
};

int main() {
    struct Student students[3] = {
        {"Alice", 101, 85.5},
        {"Bob", 102, 78.0},
        {"Charlie", 103, 92.5}
    };
    
    for (int i = 0; i < 3; i++) {
        printf("Name: %s, Roll: %d, Marks: %.2f\\n",
               students[i].name,
               students[i].rollNo,
               students[i].marks);
    }
    
    return 0;
}`,
        },
        {
          subtitle: "Nested Structures",
          code: `struct Date {
    int day;
    int month;
    int year;
};

struct Employee {
    char name[50];
    int id;
    struct Date joinDate;
};

int main() {
    struct Employee emp = {
        "John Doe",
        1001,
        {15, 6, 2020}
    };
    
    printf("Name: %s\\n", emp.name);
    printf("Join Date: %d/%d/%d\\n",
           emp.joinDate.day,
           emp.joinDate.month,
           emp.joinDate.year);
    
    return 0;
}`,
        },
        {
          subtitle: "Structures and Pointers",
          code: `struct Point {
    int x;
    int y;
};

int main() {
    struct Point p1 = {10, 20};
    struct Point *ptr = &p1;
    
    // Access using pointer
    printf("x = %d, y = %d\\n", ptr->x, ptr->y);
    
    // Modify using pointer
    ptr->x = 30;
    ptr->y = 40;
    
    printf("x = %d, y = %d\\n", p1.x, p1.y);
    
    return 0;
}`,
        },
        {
          subtitle: "typedef with Structures",
          code: `typedef struct {
    char title[100];
    char author[50];
    int pages;
    float price;
} Book;

int main() {
    // No need to write 'struct' keyword
    Book book1 = {
        "C Programming",
        "Dennis Ritchie",
        500,
        29.99
    };
    
    printf("Title: %s\\n", book1.title);
    printf("Author: %s\\n", book1.author);
    printf("Price: $%.2f\\n", book1.price);
    
    return 0;
}`,
        },
      ],
    },
    files: {
      title: "C File Handling",
      description: "File handling is used to store data permanently in a file.",
      topics: [
        {
          subtitle: "Opening and Closing Files",
          code: `#include <stdio.h>

int main() {
    FILE *fptr;
    
    // Open file for writing
    fptr = fopen("filename.txt", "w");
    
    if (fptr == NULL) {
        printf("Error opening file!\\n");
        return 1;
    }
    
    // Close file
    fclose(fptr);
    
    return 0;
}`,
        },
        {
          subtitle: "File Opening Modes",
          text: '"r" - Read (file must exist)\n"w" - Write (creates new or overwrites)\n"a" - Append (adds to end)\n"r+" - Read and write\n"w+" - Write and read\n"a+" - Append and read',
          code: `FILE *f1 = fopen("file.txt", "r");   // Read
FILE *f2 = fopen("file.txt", "w");   // Write
FILE *f3 = fopen("file.txt", "a");   // Append
FILE *f4 = fopen("file.txt", "r+");  // Read/Write`,
        },
        {
          subtitle: "Writing to File",
          code: `#include <stdio.h>

int main() {
    FILE *fptr;
    
    fptr = fopen("output.txt", "w");
    
    if (fptr == NULL) {
        printf("Error!\\n");
        return 1;
    }
    
    // Write to file
    fprintf(fptr, "Hello, World!\\n");
    fprintf(fptr, "This is line 2\\n");
    fprintf(fptr, "Number: %d\\n", 42);
    
    fclose(fptr);
    printf("File written successfully\\n");
    
    return 0;
}`,
        },
        {
          subtitle: "Reading from File",
          code: `#include <stdio.h>

int main() {
    FILE *fptr;
    char buffer[100];
    
    fptr = fopen("output.txt", "r");
    
    if (fptr == NULL) {
        printf("Error opening file!\\n");
        return 1;
    }
    
    // Read line by line
    while (fgets(buffer, 100, fptr) != NULL) {
        printf("%s", buffer);
    }
    
    fclose(fptr);
    
    return 0;
}`,
        },
        {
          subtitle: "Reading Single Character",
          code: `#include <stdio.h>

int main() {
    FILE *fptr;
    char ch;
    
    fptr = fopen("file.txt", "r");
    
    if (fptr == NULL) {
        printf("File not found!\\n");
        return 1;
    }
    
    // Read character by character
    while ((ch = fgetc(fptr)) != EOF) {
        printf("%c", ch);
    }
    
    fclose(fptr);
    
    return 0;
}`,
        },
        {
          subtitle: "Append to File",
          code: `#include <stdio.h>

int main() {
    FILE *fptr;
    
    fptr = fopen("log.txt", "a");
    
    if (fptr == NULL) {
        printf("Error!\\n");
        return 1;
    }
    
    fprintf(fptr, "New log entry\\n");
    fprintf(fptr, "Timestamp: 12:30 PM\\n");
    
    fclose(fptr);
    printf("Data appended successfully\\n");
    
    return 0;
}`,
        },
        {
          subtitle: "Check if File Exists",
          code: `#include <stdio.h>

int main() {
    FILE *fptr;
    
    fptr = fopen("test.txt", "r");
    
    if (fptr == NULL) {
        printf("File does not exist\\n");
    } else {
        printf("File exists\\n");
        fclose(fptr);
    }
    
    return 0;
}`,
        },
        {
          subtitle: "Delete a File",
          code: `#include <stdio.h>

int main() {
    if (remove("filename.txt") == 0) {
        printf("File deleted successfully\\n");
    } else {
        printf("Error deleting file\\n");
    }
    
    return 0;
}`,
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
            <div className="text-2xl">📘</div>
            <h1 className="text-xl font-bold text-gray-800">C Tutorial</h1>
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
                    <span className="text-gray-400 text-sm ml-2">C</span>
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
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Ready to compile?
            </h4>
            <p className="text-gray-600">
              Try out the examples in your compiler and experiment with the code
              to master C programming!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
