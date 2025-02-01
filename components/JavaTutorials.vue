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
