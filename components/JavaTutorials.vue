<template>
    <div class="h-fit shadow-inner-lg bg-[#2e3267] hover:bg-transparent py-20 space-y-10 px-5 lg:px-0">
        <h2 class="text-center text-3xl font-bold">Java Tutorials</h2>
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
                    <textarea v-if="tutor.code8" class="w-full h-44 p-3 border rounded bg-gray-900 text-white font-mono" readonly v-model="tutor.code8">
                    </textarea>
                    <p v-if="tutor.result8" class="whitespace-pre-line" v-html="tutor.result8"></p>
                    <textarea v-if="tutor.code9" class="w-full h-44 p-3 border rounded bg-gray-900 text-white font-mono" readonly v-model="tutor.code9">
                    </textarea>
                    <p v-if="tutor.result9" class="whitespace-pre-line" v-html="tutor.result9"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const tutorials = ref([
    {
        title: `JAVA Introduction`,
        description: `<strong>Object-Oriented programming</strong>

is a paradigm where concepts in program are presented by “objects”. Each “object” is an instance of a class, which can be seen as a “blueprint” or “template” of the object’s characteristics. Contrary to procedural programming, these characteristics include data attributes or variables describing the object’s state and behaviors method 0r procedures describing the actions an object can perform.

<strong>Object-Oriented programming</strong> – also emphasizes the concept of information hiding, where an object’s data can by default be accessed only by methods contained in the same object. When data elements of one object need to be used by another object, the latter must call a publicly accessible method of the former, basically requesting the “owning object” to perform a change to its data.

Object-oriented programming – also defines concepts to help with structuring programs so that they can be easily extended and evolved. These concepts are polymorphism, which is the ability to treat objects of different types in a similar manner, and inheritance, which is a concept to allow for extending objects and enabling code reuse.


<strong>For now, you’ll see how the object-oriented concepts you have seen so far, the classes, objects, variables (data), and methods (behavior) are use in Java.</strong>`,
        key: 1
    },
    {
        title: `OPP`,
        description: `Basic Concepts of Object-Oriented Programming

Now that you have gained knowledge on the basics of Java, it is time to move on to the topics that make Java an object‐oriented language: classes and objects. The following sections will guide you through the concept of a class, which serves as a declaration, or blueprint, for objects, which can be instantiated from classes.

<strong>Defining Classes in Java</strong>

Java is a “pure” object-oriented programming language, meaning that there are no standalone constants, variables, or functions. It is not possible to define such standalone elements, and everything is thus accessed through classes and objects. Before version 5 of Java, primitive types (such as int and double) were not represented as objects, a decision made by Java’s designers for performance reasons.

Due to this, Java was not considered to be a pure object-oriented programming language.

Java 5 introduced a concept called autoboxing, where programmers can access primitive types as if they were instances of their wrapper class.


<strong>Autoboxing</strong> – is an automatic conversion made by the Java compiler between primitive types and their corresponding wrapper classes. *Example: converting a double to a double is called boxing, and converting a double back to a double is called unboxing.


<strong>For each primitive type, there is an associated wrapper class available:</strong>


boolean wrapper class: Boolean
byte wrapper class: Byte
char wrapper class: Character
float wrapper class: Float
int wrapper class: Integer
long wrapper class: Long
double wrapper class: Double
void wrapper class: Void



The void wrapper class does not actually hold a value but is a representation for the void return type. The mechanism of autoboxing entails that it is perfectly fine to write code like this:
`,
        key: 2,
        code1: `Double d1 = 5.4;
Double d2 = new Double (3.3);`
    },
    {
        title: `Java Syntax`,
        description: `In the previous chapter, we created a Java file called Main.java, and we used the following code to print "Hello World" to the screen:


<strong>Main.java</strong>`,
        key: 3,
        code1: `public class Main {
   public static void main(String[] args) {
        System.out.println("Hello World");
   }
}`,
        result1: `Example explained

Every line of code that runs in Java must be inside a class. In our example, we named the class Main. A class should always start with an uppercase first letter.

<strong>Note:</strong> Java is case-sensitive: "MyClass" and "myclass" has different meaning. The name of the java file must match the class name. When saving the file, save it using the class name and add ".java" to the end of the filename. To run the example above on your computer, make sure that Java is properly installed: Go to the Get Started Chapter for how to install Java.

The output should be:`,
        code2: `Hello world`,
        result2: `The main Method
The main() method is required and you will see it in every Java program:`,
        code3: `public static void main(String[] args)`,
        result3: `Any code inside the main() method will be executed. Don't worry about the keywords before and after main. You will get to know them bit by bit while reading this tutorial.

For now, just remember that every Java program has a class name which must match the filename, and that every program must contain the main() method.

System.out.println()

Inside the main() method, we can use the println() method to print a line of text to the screen:`,
        code4: `public static void main(String[] args) {
   System.out.println("Hello World");
}`,
        result4: `
Note: The curly braces {} marks the beginning and the end of a block of code.
System is a built-in Java class that contains useful members, such as out, which is short for "output". The println() method, short for "print line", is used to print a value to the screen (or a file).
Don't worry too much about System, out and println(). Just know that you need them together to print stuff to the screen.
You should also note that each code statement must end with a semicolon (;).`
    },
    {
        title: `Java Output / Print`,
        description: `<strong>Print Text></strong>

You learned from the previous chapter that you can use the println() method to output values or print text in Java:`,
        key: 4,
        code1: `Example
               
System.out.println("Hello World!");`,
        result1: `You can add as many println() methods as you want. Note that it will add a new line for each method:`,
        code2: `System.out.println("Hello World!");
System.out.println("I am learning Java.");
System.out.println("It is awesome!");`,
        result2: `<strong>Double Quotes</strong>

When you are working with text, it must be wrapped inside double quotations marks "".

If you forget the double quotes, an error occurs:`,
        code3: `System.out.println("This sentence will work!");`,
        code4: `System.out.println(This sentence will produce an error);`,
        result4: `<strong>The Print() Method</strong>

There is also a print() method, which is similar to println().

The only difference is that it does not insert a new line at the end of the output:`,
        code5: `System.out.print("Hello World! ");
System.out.print("I will print on the same line.");`,
        result5: `Note that we add an extra space (after "Hello World!" in the example above), for better readability.

In this tutorial, we will only use println() as it makes it easier to read the output of code.`
    },
    {
        title: `Java Comments`,
        description: `Comments can be used to explain Java code, and to make it more readable. It can also be used to prevent execution when testing alternative code.

<strong>Single-line Comments</strong>

Single-line comments start with two forward slashes (//).

Any text between // and the end of the line is ignored by Java (will not be executed).

This example uses a single-line comment before a line of code:`,
        key: 5,
        code1: `// This is a comment
System.out.println("Hello World");`,
        result1: `<strong>This example uses a single-line comment at the end of a line of code:</strong>`,
        code2: `System.out.println("Hello World"); // This is a comment`,
        result2: `<strong>Java Multi-line Comments</strong>

Multi-line comments start with /* and ends with */.

Any text between /* and */ will be ignored by Java.

This example uses a multi-line comment (a comment block) to explain the code:`,
        code3: `/* The code below will print the words Hello World
to the screen, and it is amazing */
System.out.println("Hello World");`,
        result3: `Single or multi-line comments?
It is up to you which you want to use. Normally, we use // for short comments, and /* */ for longer.`
    },
    {
        title: `Java Variables`,
        description: `Variables are containers for storing data values. In Java, there are different types of variables, for example:

<strong>String</strong> - stores text, such as "Hello". String values are surrounded by double quotes

<strong>int</strong> - stores integers (whole numbers), without decimals, such as 123 or -123

<strong>float</strong> - stores floating point numbers, with decimals, such as 19.99 or -19.99

<strong>char</strong> - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes

<strong>boolean</strong> - stores values with two states: true or false

Declaring (Creating) Variables

To create a variable, you must specify the type and assign it a value:`,
        key: 6,
        code1: `type variableName = value;`,
        result1: `Where type is one of Java's types (such as int or String), and variableName is the name of the variable (such as x or name). The equal sign is used to assign values to the variable.

To create a variable that should store text, look at the following example:

Example
Create a variable called name of type String and assign it the value "John":`,
        code2: `String name = "John";
System.out.println(name);`,
        result2: `To create a variable that should store a number, look at the following example:

Example
Create a variable called myNum of type int and assign it the value 15:`,
        code3: `int myNum = 15;
System.out.println(myNum);`,
        result3: `You can also declare a variable without assigning the value, and assign the value later:

Example`,
        code4: `int myNum;
myNum = 15;
System.out.println(myNum);`,
        result4: `Note that if you assign a new value to an existing variable, it will overwrite the previous value:

Example
Change the value of myNum from 15 to 20:`,
        code5: `int myNum = 15;
myNum = 20;  // myNum is now 20
System.out.println(myNum);`,
        result5: `Final Variables

If you don't want others (or yourself) to overwrite existing values, use the final keyword (this will declare the variable as "final" or "constant", which means unchangeable and read-only):

Example`,
        code6: `final int myNum = 15;
myNum = 20;  // will generate an error: cannot assign a value to a final variable`,
        result6: `Other Types
A demonstration of how to declare variables of other types:`,
        code7: `int myNum = 5;
float myFloatNum = 5.99f;
char myLetter = 'D';
boolean myBool = true;
String myText = "Hello";`
    },
    {
        title: `Java Data Types`,
        description: `As explained in the previous chapter, a variable in Java must be a specified data type:`,
        key: 7,
        code1: `int myNum = 5;  // Integer (whole number)
float myFloatNum = 5.99f;  // Floating point number
char myLetter = 'D';  // Character
boolean myBool = true;   // Boolean
String myText = "Hello";  // String`,
        result1: `<strong>Data types are divided into two groups:</strong>

Primitive data types - includes byte, short, int, long, float, double, boolean and char

Non-primitive data types - such as String, Arrays and Classes (you will learn more about these in a later chapter)


<strong>Primitive Data Types</strong>

A primitive data type specifies the size and type of variable values, and it has no additional methods.

There are eight primitive data types in Java:`,
        code2: `Data Type	Size	Description
byte	1 byte	Stores whole numbers from -128 to 127
short	2 bytes	Stores whole numbers from -32,768 to 32,767
int	4 bytes	Stores whole numbers from -2,147,483,648 to 2,147,483,647
long	8 bytes	Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
float	4 bytes	Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits
double	8 bytes	Stores fractional numbers. Sufficient for storing 15 decimal digits
boolean	1 bit	Stores true or false values
char	2 bytes	Stores a single character/letter or ASCII values`,
        result2: `<strong>Java Numbers</strong>

Numbers Primitive number types are divided into two groups:

Integer types stores whole numbers, positive or negative (such as 123 or -456), without decimals. Valid types are byte, short, int and long. Which type you should use, depends on the numeric value.

Floating point types represents numbers with a fractional part, containing one or more decimals. There are two types: float and double.

Even though there are many numeric types in Java, the most used for numbers are int (for whole numbers) and double (for floating point numbers). However, we will describe them all as you continue to read.



<strong>Integer Types</strong>


<strong>Byte</strong>
The byte data type can store whole numbers from -128 to 127. This can be used instead of int or other integer types to save memory when you are certain that the value will be within -128 and 127:

Example`,
        code3: `byte myNum = 100;
System.out.println(myNum);`,
        result3: `<strong>Short</strong>
The short data type can store whole numbers from -32768 to 32767:

Example`,
        code4: `short myNum = 5000;
System.out.println(myNum);`,
        result4: `<strong>Int</strong>
The int data type can store whole numbers from -2147483648 to 2147483647. In general, and in our tutorial, the int data type is the preferred data type when we create variables with a numeric value.

Example`,
        code5: `int myNum = 100000;
System.out.println(myNum);`,
        result5: `<strong>Long</strong>
The long data type can store whole numbers from -9223372036854775808 to 9223372036854775807. This is used when int is not large enough to store the value. Note that you should end the value with an "L":

Example`,
        code6: `long myNum = 15000000000L;
System.out.println(myNum);`,
        result6: `<strong>Floating Point Types</strong>

You should use a floating point type whenever you need a number with a decimal, such as 9.99 or 3.14515. The float and double data types can store fractional numbers. Note that you should end the value with an "f" for floats and "d" for doubles:

Float Example`,
        code7: `float myNum = 5.75f;
System.out.println(myNum);`,
        resul7: `Double Example`,
        code8: `double myNum = 19.99d;
System.out.println(myNum);`,
        result8: `Use float or double?

The precision of a floating point value indicates how many digits the value can have after the decimal point. The precision of float is only six or seven decimal digits, while double variables have a precision of about 15 digits. Therefore it is safer to use double for most calculations.


<strong>Boolean Types</strong>

Very often in programming, you will need a data type that can only have one of two values, like:

YES / NO
ON / OFF
TRUE / FALSE

For this, Java has a boolean data type, which can only take the values true or false:`,
        code9: `boolean isJavaFun = true;
boolean isFishTasty = false;
System.out.println(isJavaFun);     // Outputs true
System.out.println(isFishTasty);   // Outputs false`,
        result9: `Boolean values are mostly used for conditional testing.

You will learn much more about booleans and conditions later in this tutorial.

Example`,
        code10: `int x = 100 + 50;`
    },
    {
        title: `Java Operators`,
        description: `Operators are used to perform operations on variables and values.

In the example below, we use the + operator to add together two values:`,
        key: 8,
        code1: `int x = 100 + 50;`,
        result1: `Although the + operator is often used to add together two values, like in the example above, it can also be used to add together a variable and a value, or a variable and another variable:


Example`,
        code2: `int sum1 = 100 + 50;   // 150 (100 + 50)
int sum2 = sum1 + 250;   // 400 (150 + 250)
int sum3 = sum2 + sum2;  // 800 (400 + 400)`,
        result2: `Java divides the operators into the following groups:


Arithmetic operators
Assignment operators
Comparison operators
Logical operators
Bitwise operators

<strong>Arithmetic Operators</strong>

Arithmetic operators are used to perform common mathematical operations.`,
        code3: `Operator	Name	               Description	                                   Example	
+	        Addition	       Adds together two values        	                    x + y	
-	        Subtraction	       Subtracts one value from another                     x - y	
*	        Multiplication	       Multiplies two values	                            x * y	
/	        Division	       Divides one value by another	                    x / y	
%	        Modulus	               Returns the division remainder	                    x % y	
++	        Increment	       Increases the value of a variable by 1	            ++x	
--	        Decrement	       Decreases the value of a variable by 1	            --x`,
        result3: `<strong>Java Assignment Operators</strong>

Assignment operators are used to assign values to variables.

In the example below, we use the assignment operator (=) to assign the value 10 to a variable called x:

Example`,
        code4: `int x = 10;`,
        result4: `The addition assignment operator (+=) adds a value to a variable:

Example`,
        code5: `int x = 10;
x += 5;`,
        result5: `<strong>Java Comparison Operators</strong>

Comparison operators are used to compare two values (or variables). This is important in programming, because it helps us to find answers and make decisions.

The return value of a comparison is either true or false. These values are known as Boolean values, and you will learn more about them in the Booleans and If..Else chapter.

In the following example, we use the greater than operator (>) to find out if 5 is greater than 3:

Example`,
        code6: `int x = 5;
int y = 3;
System.out.println(x > y); // returns true, because 5 is higher than 3`,
        code7: `Operator        	Name                        	Example	
==	       Equal to	                        x == y	
!=	       Not equal	                x != y	
>     	       Greater than	                x > y	
<	               Less than                        x < y	
>=	       Greater than or equal to    	 x >= y	
<=    	       Less than or equal to	        x <= y`,
        resul7: `<strong>Java Logical Operators</strong>

You can also test for true or false values with logical operators.

Logical operators are used to determine the logic between variables or values:`,
        code8: `Operator	Name	                Description              	                     Example
     
&& 	       Logical and      Returns true if both statements are true	        x < 5 &&  x < 10	

|| 	       Logical or	Returns true if one of the statements is true	        x < 5 || x < 4	

!	       Logical not	Reverse the result, returns false if the result is true	!(x < 5 && x < 10)`
    },
    {
        title: `Java Strings`,
        description: `<strong>Java Strings</strong> Strings are used for storing text.

A String variable contains a collection of characters surrounded by double quotes:

Example

Create a variable of type String and assign it a value:`,
        key: 9,
        code1: `String greeting = "Hello";`,
        result1: `<strong>String Length</strong>

A String in Java is actually an object, which contain methods that can perform certain operations on strings. For example, the length of a string can be found with the length() method:

Example`,
        code2: `String txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
System.out.println("The length of the txt string is: " + txt.length());`,
        result2: `More String Methods

There are many string methods available, for example toUpperCase() and toLowerCase():

Example`,
        code3: `String txt = "Hello World";
System.out.println(txt.toUpperCase());   // Outputs "HELLO WORLD"
System.out.println(txt.toLowerCase());   // Outputs "hello world"`,
        result3: `Finding a Character in a String

The indexOf() method returns the index (the position) of the first occurrence of a specified text in a string (including whitespace):

Example`,
        code4: `String txt = "Please locate where 'locate' occurs!";
System.out.println(txt.indexOf("locate")); // Outputs 7`
    },
    {
        title: `Java Booleans`,
        description: `<strong>Java Booleans</strong>

Very often, in programming, you will need a data type that can only have one of two values, like:

<strong>
        YES / NO
        
        ON / OFF
        
        TRUE / FALSE
</strong>

For this, Java has a boolean data type, which can store true or false values.

Boolean Values

A boolean type is declared with the boolean keyword and can only take the values true or false:

Example`,
        key: 10,
        code1: `boolean isJavaFun = true;
boolean isFishTasty = false;
System.out.println(isJavaFun);     // Outputs true
System.out.println(isFishTasty);   // Outputs false`,
        result1: `<strong>Boolean Expression</strong>

A Boolean expression returns a boolean value: true or false.
This is useful to build logic, and find answers.
For example, you can use a comparison operator, such as the greater than (>) operator, to find out if an expression (or a variable) is true or false:

Example`,
        code2: `int x = 10;
int y = 9;
System.out.println(x > y); // returns true, because 10 is higher than 9`,
        result2: `In the examples below, we use the equal to (==) operator to evaluate an expression:`,
        code3: `int x = 10;
System.out.println(x == 10); // returns true, because the value of x is equal to 10`,
        result3: `Real Life Example

Let's think of a "real life example" where we need to find out if a person is old enough to vote.

In the example below, we use the >= comparison operator to find out if the age (25) is greater than OR equal to the voting age limit, which is set to 18:`,
        code4: `int myAge = 25;
int votingAge = 18;
System.out.println(myAge >= votingAge);`,
        result4: `NOTE: Booleans are the basis for all Java comparisons and conditions.
You will learn more about conditions (if...else) in the next chapter.`
    },
    {
        title: `Java If ... Else`,
        description: `ava Conditions and If Statements

You already know that Java supports the usual logical conditions from mathematics:


Less than: a < b
Less than or equal to: a <= b
Greater than: a > b
Greater than or equal to: a >= b
Equal to a == b
Not Equal to: a != b

You can use these conditions to perform different actions for different decisions.


<strong>Java has the following conditional statements:</strong>

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed

<strong>The if Statement</strong>

Use the if statement to specify a block of Java code to be executed if a condition is true.`,
        key: 11,
        code1: `if (condition) {
        // block of code to be executed if the condition is true
}`,
        result1: `Note that if is in lowercase letters. Uppercase letters (If or IF) will generate an error.

In the example below, we test two values to find out if 20 is greater than 18. If the condition is true, print some text:

Example`,
        code2: `if (20 > 18) {
        System.out.println("20 is greater than 18");
}`,
        result2: `We can also test variables:

Example`,
        code3: `int x = 20;
int y = 18;
if (x > y) {
        System.out.println("x is greater than y");
}`,
        result3: `Example explained In the example above we use two variables, x and y, to test whether x is greater than y (using the > operator). As x is 20, and y is 18, and we know that 20 is greater than 18, we print to the screen that "x is greater than y".`
    },
    {
        title: `Java Else`,
        description: `<strong>The else Statement</strong>

Use the else statement to specify a block of code to be executed if the condition is false.

Syntax`,
        key: 12,
        code1: `if (condition) {
        // block of code to be executed if the condition is true
} else {
        // block of code to be executed if the condition is false
}`,
        result1: `Example`,
        code2: `int time = 20;
if (time < 18) {
        System.out.println("Good day.");
} else {
        System.out.println("Good evening.");
}
// Outputs "Good evening."`,
        result2: `Example explained

In the example above, time (20) is greater than 18, so the condition is false. Because of this, we move on to the else condition and print to the screen "Good evening". If the time was less than 18, the program would print "Good day".`
    },
    {
        title: `Java Switch`,
        description: `Java Switch Statements

Instead of writing many if..else statements, you can use the switch statement.

The switch statement selects one of many code blocks to be executed:

<strong>Syntax</strong>`,
        key: 13,
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

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
The break and default keywords are optional, and will be described later in this chapter
The example below uses the weekday number to calculate the weekday name:


Syntax`,
        code2: `int day = 4;
switch (day) {
        case 1:
                System.out.println("Monday");
        break;
        case 2:
                System.out.println("Tuesday");
        break;
        case 3:
                System.out.println("Wednesday");
        break;
        case 4:
                System.out.println("Thursday");
        break;
        case 5:
                System.out.println("Friday");
        break;
        case 6:
                System.out.println("Saturday");
        break;
        case 7:
                System.out.println("Sunday");
        break;
}
// Outputs "Thursday" (day 4)`,
        result2: `The break Keyword

When Java reaches a break keyword, it breaks out of the switch block.

This will stop the execution of more code and case testing inside the block.

When a match is found, and the job is done, it's time for a break. There is no need for more testing.

Note:
A break can save a lot of execution time because it "ignores" the execution of all the rest of the code in the switch block.`
    },
    {
        title: `Java Arrays`,
        description: `Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

To declare an array, define the variable type with square brackets:

<strong>Example</strong>`,
        key: 14,
        code1: `String[] cars;`,
        result1: `We have now declared a variable that holds an array of strings. To insert values to it, you can place the values in a comma-separated list, inside curly braces:`,
        code2: `String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};`,
        result2: `To create an array of integers, you could write:`,
        code3: `int[] myNum = {10, 20, 30, 40};`,
        result3: `Access the Elements of an Array

You can access an array element by referring to the index number.

This statement accesses the value of the first element in cars:


<strong>Example</strong>`,
        code4: `String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
System.out.println(cars[0]);
// Outputs Volvo`,
        result4: `Note: Array indexes start with 0: [0] is the first element. [1] is the second element, etc.`
    },
    {
        title: `Java Methods`,
        description: `A method is a block of code which only runs when it is called.


You can pass data, known as parameters, into a method.

Methods are used to perform certain actions, and they are also known as functions.

Why use methods? To reuse code: define the code once, and use it many times

<strong>Create a Method</strong>
A method must be declared within a class. It is defined with the name of the method, followed by parentheses (). Java provides some pre-defined methods, such as System.out.println(), but you can also create your own methods to perform certain actions:

<strong>Example</strong>
Create a method inside Main:`,
        key: 15,
        code1: `public class Main {
        static void myMethod() {
                // code to be executed
        }
}`,
        result1: `• myMethod() is the name of the method

• static means that the method belongs to the Main class and not an object of the Main class. You will learn more about objects and how to access methods through objects later in this tutorial.

• void means that this method does not have a return value. You will learn more about return values later in this chapter


<strong>Call a Method</strong>

To call a method in Java, write the method's name followed by two parentheses () and a semicolon;

In the following example, myMethod() is used to print a text (the action), when it is called:

<strong>Example</strong>
Inside main, call the myMethod() method`,
        code2: `public class Main {
        static void myMethod() {
         System.out.println("I just got executed!");
        }

        public static void main(String[] args) {
                myMethod();
        }
}

// Outputs "I just got executed!"`,
        result2: `A method can also be called multiple times:
Example`,
        code3: `public class Main {
        static void myMethod() {
                System.out.println("I just got executed!");
        }

        public static void main(String[] args) {
                myMethod();
                myMethod();
                myMethod();
        }
}

// I just got executed!
// I just got executed!
// I just got executed!`,
        result3: `In the next chapter, Method Parameters, you will learn how to pass data (parameters) into a method.`
    },
    {
        title: `Java Method`,
        description: `<strong>Parameters and Arguments</strong>

Information can be passed to methods as parameter. Parameters act as variables inside the method.

Parameters are specified after the method name, inside the parentheses. You can add as many parameters as you want, just separate them with a comma.

The following example has a method that takes a String called fname as parameter. When the method is called, we pass along a first name, which is used inside the method to print the full name:
<strong>Example</strong>`,
        key: 16,
        code1: `public class Main {
        static void myMethod(String fname) {
                System.out.println(fname + " Refsnes");
        }

        public static void main(String[] args) {
                myMethod("Liam");
                myMethod("Jenny");
                myMethod("Anja");
        }
}
// Liam Refsnes
// Jenny Refsnes
// Anja Refsnes`,
        result1: `When a parameter is passed to the method, it is called an argument. So, from the example above: fname is a parameter, while Liam, Jenny and Anja are arguments.

<strong>A Method with If...Else</strong>

It is common to use if...else statements inside methods:`,
        code2: ` public class Main {

// Create a checkAge() method with an integer variable called age
static void checkAge(int age) {

        // If age is less than 18, print "access denied"
        if (age < 18) {
        System.out.println("Access denied - You are not old enough!");

        // If age is greater than, or equal to, 18, print "access granted"
        } else {
        System.out.println("Access granted - You are old enough!");
        }

}

public static void main(String[] args) {
        checkAge(20); // Call the checkAge method and pass along an age of 20
}
}

// Outputs "Access granted - You are old enough!"`
    },
    {   
        title: `Java Scope`,
        description: `In Java, variables are only accessible inside the region they are created. This is called scope.

Method Scope

Variables declared directly inside a method are available anywhere in the method following the line of code in which they were declared:

<strong>Example</strong>`,
        key: 17,
        code1: `public class Main {
        public static void main(String[] args) {

                // Code here CANNOT use x

                int x = 100;

                // Code here can use x
                System.out.println(x);
        }
}`,
        result1: `<strong>Block Scope</strong>

A block of code refers to all of the code between curly braces {}.

Variables declared inside blocks of code are only accessible by the code between the curly braces, which follows the line in which the variable was declared:

<strong>Example</strong>`,
        code2: `public class Main {
        public static void main(String[] args) {

                // Code here CANNOT use x

                { // This is a block

                // Code here CANNOT use x

                int x = 100;

                // Code here CAN use x
                System.out.println(x);

                } // The block ends here

        // Code here CANNOT use x

        }
}`,
        result2: `A block of code may exist on its own or it can belong to an if, while or for statement. In the case of for statements, variables declared in the statement itself are also available inside the block's scope.`
    },
    {
        title: `Java Recursion`,
        description: `<strong>Java Recursion</strong>

Recursion is the technique of making a function call itself. This technique provides a way to break complicated problems down into simple problems which are easier to solve.

Recursion may be a bit difficult to understand. The best way to figure out how it works is to experiment with it.

<strong>Recursion Example</strong>

Adding two numbers together is easy to do, but adding a range of numbers is more complicated. In the following example, recursion is used to add a range of numbers together by breaking it down into the simple task of adding two numbers:

<strong>Example</strong>
Use recursion to add all of the numbers up to 10.`,
        key: 18,
        code1: `public class Main {
        public static void main(String[] args) {
                int result = sum(10);
                System.out.println(result);
        }
        public static int sum(int k) {
                if (k > 0) {
                return k + sum(k - 1);
                } else {
                return 0;
                }
        }
}`,
        result1: `Example Explained

When the sum() function is called, it adds parameter k to the sum of all numbers smaller than k and returns the result. When k becomes 0, the function just returns 0. When running, the program follows these steps:`,
        code2: `10 + sum(9)
10 + ( 9 + sum(8) )
10 + ( 9 + ( 8 + sum(7) ) )
...
10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + sum(0)
10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0`,
        result2: `Since the function does not call itself when k is 0, the program stops there and returns the result.`
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
