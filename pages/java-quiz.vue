<template>
    <div class="flex items-center justify-center min-h-screen py-[15dvh] px-5 lg:px-0">
        <form @submit.prevent="submitQuiz" class="w-full max-w-3xl border border-slate-500 h-fit rounded-3xl p-5 space-y-5 bg-slate-900">
            <h1 class="text-center font-semibold tracking-wide text-lg uppercase">C++ QUIZ - {{ $route.query.level }} LEVEL</h1>
            <!-- questions -->
            <!-- easy level quizzes -->
            <div v-if="$route.query.level === 'Easy'" class="space-y-5">
                <div v-for="(quiz, index) in easyLevel" :key="index">
                    <div v-if="quiz.set === set" class="space-y-2">
                        <h3 class="font-medium text-lg tracking-wide" v-html="index + 1 + '. ' + quiz.question"></h3>
                        <div class="pl-3 flex flex-wrap gap-4 w-fit">
                            <div v-for="([key, value]) in Object.entries(quiz.options)" :key="key" class="flex gap-x-2 items-center">
                                <input :id="'option-' + key" :value="key" v-model="quiz.chosenAnswer" type="radio" class="w-4 h-4">
                                <label :for="'option-' + key" class="text-gray-200 text-lg">{{ value }}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- intermediate level quizzes -->
            <div v-else-if="$route.query.level === 'Intermediate'" class="space-y-5">
                <div v-for="(quiz, index) in intermediateLevel" :key="index">
                    <div v-if="quiz.set === set" class="space-y-2">
                        <h3 class="font-medium text-lg tracking-wide" v-html="index + 1 + '. ' + quiz.question"></h3>
                        <div class="pl-3 flex flex-wrap gap-4 w-fit">
                            <div v-for="([key, value]) in Object.entries(quiz.options)" :key="key" class="flex gap-x-2 items-center">
                                <input :id="'option-' + key" :value="key" v-model="quiz.chosenAnswer" type="radio" class="w-4 h-4">
                                <label :for="'option-' + key" class="text-gray-200 text-lg">{{ value }}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- hard level quizzes -->
            <div v-else-if="$route.query.level === 'hard'" class="space-y-5">
                <div v-for="(quiz, index) in hardLevel" :key="index">
                    <div v-if="quiz.set === set" class="space-y-2">
                        <h3 class="font-medium text-lg tracking-wide" v-html="index + 1 + '. ' + quiz.question"></h3>
                        <div class="pl-3 flex flex-wrap gap-4 w-fit">
                            <div v-for="([key, value]) in Object.entries(quiz.options)" :key="key" class="flex gap-x-2 items-center">
                                <input :id="'option-' + key" :value="key" v-model="quiz.chosenAnswer" type="radio" class="w-4 h-4">
                                <label :for="'option-' + key" class="text-gray-200 text-lg">{{ value }}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <UButton v-if="set === 1" label="Next" size="lg" color="white" class="float-end px-8" @click="set++" />
            <div v-else class="flex items-center justify-end gap-x-2">
                <UButton type="submit" label="Back" size="lg" color="white" class="px-8" @click="set--" />
                <UButton :loading="submitting" type="submit" label="Submit" size="lg" color="primary" class="px-8 !h-9" />
            </div>
        </form>

        <UModal v-model="isOpen">
            <div class="p-4 flex flex-col items-center gap-y-3 justify-center">
                <Icon name="noto:confetti-ball" class="text-6xl" />
                <h1 class="text-2xl font-semibold uppercase">Congratulatulations</h1>
                <div class="flex items-center justify-center text-4xl font-bold gap-x-2 border-2 rounded-full h-36 w-36 mt-7">
                    <h2>{{ totalScore }}</h2>
                    <span>/</span>
                    <h2>{{ totalItems }}</h2>
                </div>
                <p class="uppercase tracking-wide text-lg">score</p>
            </div>
            <div class="w-full flex justify-center p-4">
                <UButton label="Home" to="/" class="px-5" />
            </div>
        </UModal>
    </div>
</template>

<script setup>
const route = useRoute()

const easyLevel = ref([
    {
      question: "Which keyword is used to define a class in Java?",
      options: {
        a: "class",
        b: "Class",
        c: "define",
        d: "struct"
      },
      answer: "a",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "Which of the following is used to print output in Java?",
      options: {
        a: "System.out.print()",
        b: "console.log()",
        c: "printf()",
        d: "echo()"
      },
      answer: "a",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "Which data type is used to store a single character in Java?",
      options: {
        a: "String",
        b: "char",
        c: "int",
        d: "float"
      },
      answer: "b",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "What is the default value of an uninitialized int variable in Java?",
      options: {
        a: "0",
        b: "null",
        c: "garbage value",
        d: "undefined"
      },
      answer: "a",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "How do you take input from a user in Java?",
      options: {
        a: "Scanner scanner = new Scanner(System.in);",
        b: "cin >> variable;",
        c: "input(variable);",
        d: "read(variable);"
      },
      answer: "a",
      chosenAnswer: '',
      set: 1
    },
    {
      question: `What will be the output of the following code?<br>
java<br>
CopyEdit<br>
int x = 5;<br>
x += 3;<br>
System.out.println(x);
`,
      options: {
        a: "5",
        b: "8",
        c: "3",
        d: "error"
      },
      answer: "b",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "Which of the following is NOT a valid Java variable name?",
      options: {
        a: "_number",
        b: "2value",
        c: "value_2",
        d: "myVariable"
      },
      answer: "b",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "What is the keyword used to define a constant in Java?",
      options: {
        a: "final",
        b: "const",
        c: "constant",
        d: "var"
      },
      answer: "a",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "Which method is called when a Java program starts execution?",
      options: {
        a: "start()",
        b: "run()",
        c: "main()",
        d: "execute()"
      },
      answer: "c",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "Which of the following is a correct comment in Java?",
      options: {
        a: "// This is a comment",
        b: "/* This is a comment */",
        c: "Both a and b",
        d: "None of the above"
      },
      answer: "c",
      chosenAnswer: '',
      set: 2
    }
])

const intermediateLevel = ref([
    {
      question: `What will be the output of the following code?? <br>
java<br>
CopyEdit<br>
int a = 10, b = 20;<br>
int temp = a;<br>
a = b;<br>
b = temp;<br>
System.out.println(a + " " + b);`,
      options: {
        a: "10 20",
        b: "20 10",
        c: "Error",
        d: "Undefined"
      },
      answer: "b",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "Which of the following loops is guaranteed to execute at least once?",
      options: {
        a: "for loop",
        b: "while loop",
        c: "do-while loop",
        d: 'none of the above"'
      },
      answer: "c",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "What is the size of an int in Java?",
      options: {
        a: "2 bytes",
        b: "4 bytes",
        c: "8 bytes",
        d: "Depends on the system"
      },
      answer: "b",
      chosenAnswer: '',
      set: 1
    },
    {
      question: `How do you correctly define a method in Java?`,
      options: {
        a: "void myMethod() {}",
        b: "function myMethod() {}",
        c: "def myMethod():",
        d: "myMethod {}"
      },
      answer: "a",
      chosenAnswer: '',
      set: 1
    },
    {
      question: `What is the output of the following code?<br>
java<br>
CopyEdit<br>
int a = 10;<br>
int[] arr = {1, 2, 3};<br>
System.out.println(arr[1]);
`,
      options: {
        a: "1",
        b: "2",
        c: "3",
        d: "Error"
      },
      answer: "b",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "Which keyword is used to allocate memory dynamically in Java?",
      options: {
        a: "alloc",
        b: "malloc",
        c: "new",
        d: "create"
      },
      answer: "c",
      chosenAnswer: '',
      set: 2
    },
    {
      question: `How do you prevent a method from being overridden in Java?`,
      options: {
        a: "static",
        b: "final",
        c: "protected",
        d: "private"
      },
      answer: "b",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "Which of the following is NOT a Java access modifier?",
      options: {
        a: "private",
        b: "public",
        c: "internal",
        d: "protected"
      },
      answer: "c",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "What is null in Java?",
      options: {
        "a": "A data type",
        "b": "A keyword",
        "c": "A reference with no value",
        "d": "A function"
      },
      answer: "a",
      chosenAnswer: '',
      set: 2
    },
    {
      question: `What will the following code print?<br>
java<br>
CopyEdit<br>
String s1 = "Hello";<br>
String s2 = new String("Hello");<br>
System.out.println(s1 == s2);`,
      options: {
        "a": "true",
        "b": "false",
        "c": "error",
        "d": "Depends on JVM"
      },
      answer: "b",
      chosenAnswer: '',
      set: 2
    }
  ])

const hardLevel = ref([
    {
      question: `What is the purpose of the super keyword in Java?`,
      options: {
        a: "To call a parent class constructor",
        b: "To refer to a superclass method",
        c: "Both a and b",
        d: "None of the above"
      },
      answer: "c",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "What is method overloading?",
      options: {
        a: "Defining multiple methods with the same name but different parameters",
        b: "Defining multiple methods with the same name and same parameters",
        c: "Redefining a method in a subclass",
        d: "Using the super keyword"
      },
      answer: "a",
      chosenAnswer: '',
      set: 1
    },
    {
      question: `What is the output of this code?<br>
java<br>
CopyEdit<br>
class A {<br>
    void show() { System.out.println("A"); }<br>
}<br>
class B extends A {<br>
    void show() { System.out.println("B"); }<br>
}<br>
public class Main {<br>
    public static void main(String[] args) {<br>
        A obj = new B();<<br>br>
        obj.show();
    }<br>
}`,
      options: {
        a: "A",
        b: "B",
        c: "Error",
        d: "None"
      },
      answer: "b",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "What is the default value of a boolean variable in Java?",
      options: {
        a: "true",
        b: "false",
        c: "null",
        d: "0"
      },
      answer: "b",
      chosenAnswer: '',
      set: 1
    },
    {
      question: `What is a lambda expression in Java?`,
      options: {
        a: "An anonymous function",
        b: "A constructor",
        c: "A method reference",
        d: "A loop"
      },
      answer: "a",
      chosenAnswer: '',
      set: 1
    },
    {
      question: `What is the output of the following code?<br>
java<br>
CopyEdit<br>
class Test {<br>
    public static void main(String[] args) {<br>
        System.out.println(10 + 20 + "Java" + 10 + 20);<br>
    }<br>
}`,
      options: {
        a: "30Java30",
        b: "Java1020",
        c: "30Java1020",
        d: "Error"
      },
      answer: "c",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "Which functional interface is used for defining a lambda expression that takes two arguments and returns a result?",
      options: {
        a: "Function<T, R>",
        b: "Supplier<T>",
        c: "BiFunction<T, U, R>",
        d: "Consumer<T>"
      },
      answer: "c",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "Which of the following statements about Java threads is true?",
      options: {
        a: "A thread can be started twice.",
        b: "The run() method must be explicitly called to start a thread.",
        c: "start() method is used to begin execution of a thread.",
        d: "Thread class does not implement Runnable interface."
      },
      answer: "c",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "Which design pattern is used to restrict a class from having more than one instance?",
      options: {
        a: "Factory Pattern",
        b: "Singleton Pattern",
        c: "Builder Pattern",
        d: "Observer Pattern"
      },
      answer: "b",
      chosenAnswer: '',
      set: 2
    },
    {
      question: `What will be the output of the following program?<br>
java<br>
CopyEdit<br>
class Parent {<br>
    static void show() {<br>
        System.out.println("Parent");<br>
    }<br>
}<br>
class Child extends Parent {<br>
    static void show() {<br>
        System.out.println("Child");<br>
    }<br>
}<br>
public class Main {<br>
    public static void main(String[] args) {<br>
        Parent obj = new Child();<br>
        obj.show();<br>
    }<br>
}`,
      options: {
        a: "Parent",
        b: "Child",
        c: "Error",
        d: "Undefined behavior"
      },
      answer: "a",
      chosenAnswer: '',
      set: 2
    }
])


const set = ref(1)

const totalScore = ref(0)
const totalItems = ref(0)
const submitting = ref(false)

const isOpen = ref(false)

const submitQuiz = () => {
    submitting.value = true
    setTimeout(() => {
        submitting.value = false
        if(route.query.level == 'Easy'){
            for(let item of easyLevel.value){
                if(item.answer === item.chosenAnswer){
                    totalScore.value++
                }
            }
            totalItems.value = easyLevel.value.length
        }else if(route.query.level == 'Intermediate'){
            for(let item of intermediateLevel.value){
                if(item.answer === item.chosenAnswer){
                    totalScore.value++
                }
            }
            totalItems.value = intermediateLevel.value.length
        }else if(route.query.level == 'Hard'){
            for(let item of hardLevel.value){
                if(item.answer === item.chosenAnswer){
                    totalScore.value++
                }
            }
            totalItems.value = hardLevel.value.length
        }
        isOpen.value = true
    }, 2000)
}
</script> 

