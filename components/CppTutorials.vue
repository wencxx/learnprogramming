<template>
    <div class="h-fit shadow-inner-lg bg-[#2e3267] hover:bg-transparent py-20 space-y-10 px-5 lg:px-0">
        <h2 class="text-center text-3xl font-bold">C++ Tutorials</h2>
        <div class="w-full max-w-7xl mx-auto h-fit grid md:grid-cols-2 gap-y-5 gap-x-10">
            <div v-for="tutor in tutorials" :key="tutor.key" class="bg-header rounded shadow-inner-lg h-28 flex flex-col px-5 duration-300 overflow-hidden py-10 gap-y-11" :class="{ 'h-fit': openedTutorial.includes(tutor.key) }" @click="openTutorial(tutor.key)">
                <div class="flex items-center justify-between">
                    <h3 class="text-xl font-bold">{{ tutor.title }}</h3>
                    <Icon v-if="openedTutorial.includes(tutor.key)" name="ic:round-minus" class="text-2xl" />
                    <Icon v-else name="ic:round-plus" class="text-2xl" />
                </div>
                <div class="space-y-5">
                    <p class="whitespace-pre-line" v-html="tutor.description"></p>
                    
                    <!-- Textarea for C++ Code Example -->
                    <textarea v-if="tutor.code1" class="w-full h-44 p-2 border rounded bg-gray-900 text-white font-mono" readonly v-model="tutor.code1">
                    </textarea>
                    <p v-if="tutor.result1" class="whitespace-pre-line" v-html="tutor.result1"></p>
                    <textarea v-if="tutor.code2" class="w-full h-44 p-2 border rounded bg-gray-900 text-white font-mono" readonly v-model="tutor.code2">
                    </textarea>
                    <p v-if="tutor.result2" class="whitespace-pre-line" v-html="tutor.result2"></p>
                    <textarea v-if="tutor.code3" class="w-full h-44 p-3 border rounded bg-gray-900 text-white font-mono" readonly v-model="tutor.code3">
                    </textarea>
                    <p v-if="tutor.result3" class="whitespace-pre-line" v-html="tutor.result3"></p>
                    <textarea v-if="tutor.code4" class="w-full h-44 p-3 border rounded bg-gray-900 text-white font-mono" readonly v-model="tutor.code4">
                    </textarea>
                    <p v-if="tutor.result4" class="whitespace-pre-line" v-html="tutor.result4"></p>
                    <textarea v-if="tutor.code5" class="w-full h-44 p-3 border rounded bg-gray-900 text-white font-mono" readonly v-model="tutor.code5">
                    </textarea>
                    <p v-if="tutor.result5" class="whitespace-pre-line" v-html="tutor.result5"></p>
                    <textarea v-if="tutor.code6" class="w-full h-44 p-3 border rounded bg-gray-900 text-white font-mono" readonly v-model="tutor.code6">
                    </textarea>
                    <p v-if="tutor.result6" class="whitespace-pre-line" v-html="tutor.result6"></p>
                    <textarea v-if="tutor.code7" class="w-full h-44 p-3 border rounded bg-gray-900 text-white font-mono" readonly v-model="tutor.code7">
                    </textarea>
                    <p v-if="tutor.result7" class="whitespace-pre-line" v-html="tutor.result7"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const tutorials = ref([
    {
        title: 'C++ Introduction',
        description: `<strong>What is C++?</strong>

C++ is a cross-platform language that can be used to create high-performance applications.

C++ was developed by Bjarne Stroustrup, as an extension to the C language.

C++ gives programmers a high level of control over system resources and memory.

The language was updated 4 major times in 2011, 2014, 2017, and 2020 to C++11, C++14, C++17, C++20.

<strong>Why We Use C++?</strong>

C++ is one of the world's most popular programming languages.

C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.

C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.

C++ is portable and can be used to develop applications that can be adapted to multiple platforms.

<strong>C++ is fun and easy to learn!</strong>

As C++ is close to C, C# and Java, it makes it easy for programmers to switch to C++ or vice versa.

Now You Can Proceed To Get Started!`,
        key: '1',
        code1: '',
        result1: '' 
    },
    {
        title: 'Get Started',
        description: `<strong>To start using C++, you need two things:</strong>

1. A text editor, <strong>like Notepad</strong>, to write C++ code.
2. A compiler, <strong>like GCC</strong>, to translate the C++ code into a language that the computer will understand.

<strong>C++ Quickstart:</strong>

Let's create our first C++ file.

Open CodeBlocks and go to File > New > Empty File.

Write the following C++ code and save the file as myfirstprogram.cpp:`,
        key: '2',
        code1: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!";
    return 0;
}`,
    result1: `<strong>Result:</strong>
Hello World!`
    },
    {
        title: 'C++ Syntax',
        description: `<strong>Let's break up the following code to understand it better:</strong>`,
        key: '3',
        code1: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!";
    return 0;
}`,
    result1: `<strong>Example explained</strong>

<strong>Line 1:</strong> "#include iostream" is a header file library that lets us work with input and output objects, such as cout (used in line 5).
Header files add functionality to C++ programs.

<strong>Line 2:</strong> "using namespace std" means that we can use names for objects and variables from the standard library.

<strong>Line 3:</strong> A blank line. C++ ignores white space. But we use it to make the code more readable.

<strong>Line 4:</strong> Another thing that always appear in a C++ program is int main(). This is called a function. Any code inside its curly brackets {} will be executed.

<strong>Line 5:</strong> A blank line. C++ ignores white space. But we use it to make the code more readable.

<strong>Line 6:</strong> return 0 ends the main function.

<strong>Line 7:</strong> Do not forget to add the closing curly bracket } to actually end the main function.`
    },
    {
        title: `C++ Output (Print Text)`,
        description: `<strong>Let's break up the following code to understand it better:</strong>`,
        key: 4,
        code1: ` #include <iostream>
using namespace std;
int main() {
cout << "Hello World!";
return 0;
}`,
        result1: `<strong>You can add as many cout objects as you want. However, note that it does not insert a new line at the end of the output:</strong>`,
        code2: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!";
    cout << "I am learning C++";
    return 0;
}`,
        resutl2: ``
    },
    {
        title: `C++ Comments`,
        description: `Multi-line comments start with /* and ends with */.

Any text between /* and */ will be ignored by the compiler:`,
        key: 5,
        code1: ` /* The code below will print the words Hello World!
to the screen, and it is amazing */
cout << "Hello World!"`,
        result: ''
    },
    {
        title: 'C++ Variables',
        description: `In C++, there are different types of variables (defined with different keywords), for example:

<strong>int</strong> - stores integers (whole numbers), without decimals, such as 123 or -123.

<strong>double</strong> - stores floating point numbers, with decimals, such as 19.99 or -19.99.

<strong>char</strong> - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes.

<strong>string</strong> - stores text, such as "Hello World". String values are surrounded by double quotes.

<strong>bool</strong> - stores values with two states: true or false.

<strong>Declaring (Creating) Variables</strong>

To create a variable, specify the type and assign it a value:`,
        key: 6,
        code1: `Syntax
type variableName = value;`,
        result1: `Where type is one of C++ types (such as int), and variableName is the name of the variable (such as x or myName). The equal sign is used to assign values to the variable.

To create a variable that should store a number, look at the following example:

Create a variable called myNum of type int and assign it the value 15:`,
        code2: `
int myNum = 15;
cout << myNum;`
    },
    {
        title: 'C++ Data Types',
        description: `<strong>As explained in the Variables chapter, a variable in C++ must be a specified data type:</strong>`,
        key: 7,
        code1: `int myNum = 5;  / Integer (whole number)
float myFloatNum = 5.99;     // Floating point number
double myDoubleNum = 9.98;   // Floating point number
char myLetter = 'D';         // Character
bool myBoolean = true;       // Boolean
string myText = "Hello";     // String`,
        result1: `<strong>Basic Data Types</strong>`,
        code2: ` int	2 or 4 bytes	Stores whole numbers, without decimals
float	4 bytes	Stores fractional numbers, containing one or more decimals. Sufficient for storing 6-7 decimal digits
double	8 bytes	Stores fractional numbers, containing one or more decimals. Sufficient for storing 15 decimal digits`,
        result2: `<strong>Numeric Types</strong>

Use int when you need to store a whole number without decimals, like 35 or 1000, and float or double when you need a floating point number (with decimals), like 9.99 or 3.14515.

<strong>INT</strong>`,
        code3: `int myNum = 1000;
cout << myNum;`,
        result3: `<strong>FLOAT</strong>`,
        code4: `float myNum = 5.75;
cout << myNum;`,
        result4: `<strong>DOUBLE</strong>`,
        code5: `double myNum = 19.99;
cout << myNum;`,
        result5: `<strong>float vs. double</strong>

The precision of a floating point value indicates how many digits the value can have after the decimal point. The precision of float is only six or seven decimal digits, while double variables have a precision of about 15 digits. Therefore it is safer to use double for most calculations.`
    },
    {
        title: 'C++ Operators',
        description: `Operators are used to perform operations on variables and values.

In the example below, we use the + operator to add together two values:

<strong>Example</strong>`,
        key: 8,
        code1: `int x = 100 + 50;`,
        result1: `Although the + operator is often used to add together two values, like in the example above, it can also be used to add together a variable and a value, or a variable and another variable:

<strong>Example</strong>`,
        code2: `int sum1 = 100 + 50; // 150 (100 + 50)
int sum2 = sum1 + 250;  // 400 (150 + 250)
int sum3 = sum2 + sum2;  // 800 (400 + 400)`,
        result2: `<strong>Arithmetic Operators</strong>`,
        code3: ` Operator	Name	Description	Example

+	Addition	Adds together two values 

-	Subtraction	Subtracts one value from another 

*	Multiplication	Multiplies two values	

/	Division	Divides one value by another 

%	Modulus	Returns the division remainder	

++	Increment	Increases the value of a variable by 1	

--	Decrement	Decreases the value of a variable by 1`
    },
    {
        title: 'C++ Strings',
        description: `Strings are used for storing text/characters.

For example, "Hello World" is a string.

A string variable contains a collection of characters surrounded by double quotes:

<strong>Example Create a variable of type string and assign it a value:</strong>`,
        key: 9,
        code1: `string greeting = "Hello";`,
        result1: `To use strings, you must include an additional header file in the source code, the string> library:

<strong>EXAMPLE</strong>`,
        code2: `// Include the string library
#include <string>

// Create a string variable
string greeting = "Hello";`
    },
    {
        title: `C++ Booleans`,
        description: `Very often, in programming, you will need a data type that can only have one of two values, like:

YES / NO
ON / OFF
TRUE / FALSE

For this, C++ has a bool data type, which can take the values true (1) or false (0).


<strong>
    Boolean Values
    
    EXAMPLE
</strong>`,
        key: 10,
        code1: `bool isCodingFun = true;
bool isFishTasty = false;
cout << isCodingFun;  // Outputs 1 (true)
cout << isFishTasty;  // Outputs 0 (false)`
    },
    {
        title: `C++ Condition`,
        description: `<strong>C++ Conditions and If Statements</strong>


You already know that C++ supports the usual logical conditions from mathematics:`,
        key: 11,
        code1: `Less than: a < b
Less than or equal to: a <= b
Greater than: a > b
Greater than or equal to: a >= b
Equal to a == b
Not Equal to: a != b`,
        result1: `You can use these conditions to perform different actions for different decisions.

<strong>C++ has the following conditional statements:</strong>

Use if to specify a block of code to be executed, if a specified condition is true

Use else to specify a block of code to be executed, if the same condition is false

Use else if to specify a new condition to test, if the first condition is false

Use switch to specify many alternative blocks of code to be executed.

<strong>The if Statement</strong>
Use the if statement to specify a block of C++ code to be executed if a condition is true.

<strong>SYNTAX</strong>`,
        code2: `if (condition) {
    // block of code to be executed if the condition is true
}`,
        result2: `Note that if is in lowercase letters. Uppercase letters (If or IF) will generate an error.

In the example below, we test two values to find out if 20 is greater than 18. If the condition is true, print some text:

<strong>EXAMPLE</strong>`,
        code3: `if (20 > 18) {
    cout << "20 is greater than 18";
}`,
        result3: `We can also test variables:

<strong>EXAMPLE</strong>`,
        code4: `int x = 20;
int y = 18;
if (x > y) {
    cout << "x is greater than y";
}`,
        result4: `<strong>Example explained</strong>
In the example above we use two variables, x and y, to test whether x is greater than y (using the > operator). As x is 20, and y is 18, and we know that 20 is greater than 18, we print to the screen that "x is greater than y".`
    },
    {
        title: `C++ Switch`,
        description: `Use the switch statement to select one of many code blocks to be executed.

<strong>Syntax</strong>`,
        key: 12,
        code1: `switch(expression) {
case x:
        // code block
        break;
case y:
        // code block
        break;
default:
        // code block
    }`,
        result1: `<strong>This is how it works:</strong>

The switch expression is evaluated once

The value of the expression is compared with the values of each case

If there is a match, the associated block of code is executed

The break and default keywords are optional, and will be described later in this chapter

The example below uses the weekday number to calculate the weekday name:

<strong>Example</strong>`,
        code2: `int day = 4;
switch (day) {
    case 1:
    cout << "Monday";
    break;
    case 2:
    cout << "Tuesday";
    break;
    case 3:
    cout << "Wednesday";
    break;
    case 4:
    cout << "Thursday";
    break;
    case 5:
    cout << "Friday";
    break;
    case 6:
    cout << "Saturday";
    break;
    case 7:
    cout << "Sunday";
    break;
}
// Outputs "Thursday" (day 4)`,
    result2: `The break Keyword

When C++ reaches a break keyword, it breaks out of the switch block.
This will stop the execution of more code and case testing inside the block.
When a match is found, and the job is done, it's time for a break. There is no need for more testing.`
    },
    {
        title: `C++ While Loop`,
        description: `Loops can execute a block of code as long as a specified condition is reached.

Loops are handy because they save time, reduce errors, and they make code more readable.

The while loop loops through a block of code as long as a specified condition is true:

<strong>Syntax</strong>`,
        key: 13,
        code1: `while (condition) {
    // code block to be executed
}`,
        result1: `In the example below, the code in the loop will run, over and over again, as long as a variable (i) is less than 5:


<strong>Example</strong>`,
        code2: `int i = 0;
while (i < 5) {
cout << i << "\n";
i++;
}`,
        result2: `Note: Do not forget to increase the variable used in the condition, otherwise the loop will never end!`
    },
    {
        title: `C++ For Loop`,
        description: `When you know exactly how many times you want to loop through a block of code, use the for loop instead of a while loop:

<strong>Syntax</strong>`,
        key: 14,
        code1: `for (statement 1; statement 2; statement 3) {
    // code block to be executed
}`,
        result1: `<strong>Statement 1</strong> is executed (one time) before the execution of the code block.

<strong>Statement 2</strong> defines the condition for executing the code block.

<strong>Statement 3</strong> is executed (every time) after the code block has been executed.

The example below will print the numbers 0 to 4:


<strong>Example</strong>`,
        code2: `for (int i = 0; i < 5; i++) {
    cout << i << "\n";
}`,
        result2: `Example explained <strong>Statement 1</strong> sets a variable before the loop starts (int i = 0).

<strong>Statement 2</strong> defines the condition for the loop to run (i must be less than 5). If the condition is true, the loop will start over again, if it is false, the loop will end.

<strong>Statement 3</strong> increases a value (i++) each time the code block in the loop has been executed.

Nested Loops

It is also possible to place a loop inside another loop. This is called a nested loop.

The "inner loop" will be executed one time for each iteration of the "outer loop":

<strong>Example</strong>`,
        code3: `// Outer loop
for (int i = 1; i <= 2; ++i) {
    cout << "Outer: " << i << "\n"; // Executes 2 times

    // Inner loop
    for (int j = 1; j <= 3; ++j) {
    cout << " Inner: " << j << "\n"; // Executes 6 times (2 * 3)
    }
}`,
        result3: `The foreach Loop

There is also a "for-each loop" (introduced in C++ version 11 (2011), which is used exclusively to loop through elements in an array (or other data sets):

<strong>Example</strong>`,
        code4: `for (type variableName : arrayName) {
    // code block to be executed
}`,
        result4: `The following example outputs all elements in an array, using a "for-each loop":
<strong>Example</strong>`,
        code5: `int myNumbers[5] = {10, 20, 30, 40, 50};
for (int i : myNumbers) {
    cout << i << "\n";
}`,
        result5: `Note: Don't worry if you don't understand the example above. You will learn more about arrays in the C++ Arrays chapter.`
    },
    {
        title: `C++ Structures`,
        description: `Structures (also called structs) are a way to group several related variables into one place. Each variable in the structure is known as a member of the structure.


Unlike an array, a structure can contain many different data types (int, string, bool, etc.).

<strong>Create a Structure</strong>

To create a structure, use the struct keyword and declare each of its members inside curly braces.

After the declaration, specify the name of the structure variable (myStructure in the example below):

<strong>Example</strong>`,
        key: 15,
        code1: `struct { // Structure declaration
    int myNum;         // Member (int variable)
    string myString;   // Member (string variable)
} myStructure;       // Structure variable`,
        result1: `<strong>Access Structure Members</strong>

To access members of a structure, use the dot syntax (.): <strong>Example</strong>

<strong>Assign data to members of a structure and print it:</strong>`,
        code2: `// Create a structure variable called myStructure
struct {
    int myNum;
    string myString;
} myStructure;

// Assign values to members of myStructure
myStructure.myNum = 1;
myStructure.myString = "Hello World!";

// Print members of myStructure
cout << myStructure.myNum << "\n";
cout << myStructure.myString << "\n";`,
        result2: `<strong>One Structure in Multiple Variables</strong>

You can use a comma (,) to use one structure in many variables:`,
        code3: `struct {
    int myNum;
    string myString;
} myStruct1, myStruct2, myStruct3; // Multiple structure variables separated with commas`,
        result3: `This example shows how to use a structure in two different variables:

<strong>
    Example
    
    Use one structure to represent two cars:
</strong>`,
        code4: `struct {
    string brand;
    string model;
    int year;
} myCar1, myCar2; // We can add variables by separating them with a comma here

// Put data into the first structure
myCar1.brand = "BMW";
myCar1.model = "X5";
myCar1.year = 1999;

// Put data into the second structure
myCar2.brand = "Ford";
myCar2.model = "Mustang";
myCar2.year = 1969;

// Print the structure members
cout << myCar1.brand << " " << myCar1.model << " " << myCar1.year << "\n";
cout << myCar2.brand << " " << myCar2.model << " " << myCar2.year << "\n";`,
        result4: `<strong>Named Structures</strong>

By giving a name to the structure, you can treat it as a data type.
This means that you can create variables with this structure anywhere in the program at any time.

To create a named structure, put the name of the structure right after the struct keyword:`,
        code5: `struct myDataType { // This structure is named "myDataType"
    int myNum;
    string myString;
};`,
        result5: `To declare a variable that uses the structure, use the name of the structure as the data type of the variable:`,
        code6: `myDataType myVar;`,
        result6: `<strong>Example</strong>

<strong>Use one structure to represent two cars:</strong>`,
        code7: `// Declare a structure named "car"
struct car {
    string brand;
    string model;
    int year;
};

int main() {
    // Create a car structure and store it in myCar1;
    car myCar1;
    myCar1.brand = "BMW";
    myCar1.model = "X5";
    myCar1.year = 1999;

    // Create another car structure and store it in myCar2;
    car myCar2;
    myCar2.brand = "Ford";
    myCar2.model = "Mustang";
    myCar2.year = 1969;
    
    // Print the structure members
    cout << myCar1.brand << " " << myCar1.model << " " << myCar1.year << "\n";
    cout << myCar2.brand << " " << myCar2.model << " " << myCar2.year << "\n";
    
    return 0;
}`
    },
    {
        title: `C++ Reference`,
        description: `A reference variable is a "reference" to an existing variable, and it is created with the & operator:

<strong>Example</strong>`,
        key: 16,
        code1: `string food = "Pizza";  // food variable
string &meal = food;    // reference to food`,
        result1: `Now, we can use either the variable name food or the reference name meal to refer to the food variable:

<strong>Example</strong>`,
        code2: `string food = "Pizza";
string &meal = food;

cout << food << "\n";  // Outputs Pizza
cout << meal << "\n";  // Outputs Pizza`
    }
]);

const openedTutorial = ref([]);

const openTutorial = (key) => {
    const index = openedTutorial.value.indexOf(key);
    if (openedTutorial.value.includes(key)) {
        openedTutorial.value.splice(index, 1);
    } else {
        openedTutorial.value.push(key);
    }
};
</script>
