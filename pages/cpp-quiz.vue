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
            <div v-else-if="$route.query.level === 'Hard'" class="space-y-5">
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
      question: "What is the correct way to print 'Hello, World!' in C++?",
      options: {
        a: "cout << \"Hello, World!\";",
        b: "print(\"Hello, World!\");",
        c: "echo \"Hello, World!\";",
        d: "Console.WriteLine(\"Hello, World!\");"
      },
      answer: "a",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "Which of the following is a valid C++ comment?",
      options: {
        a: "/* This is a comment */",
        b: "// This is a comment",
        c: "Both a and b",
        d: "None of the above"
      },
      answer: "c",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "What is the correct file extension for C++ source files?",
      options: {
        a: ".c++",
        b: ".cpp",
        c: ".cp",
        d: ".ccp"
      },
      answer: "b",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "Which data type is used to store a single character?",
      options: {
        a: "char",
        b: "string",
        c: "int",
        d: "float"
      },
      answer: "a",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "What is the purpose of the return statement in C++?",
      options: {
        a: "It exits the program",
        b: "It stops the loop",
        c: "It returns a value from a function",
        d: "It declares a variable"
      },
      answer: "c",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "What is the default value of an uninitialized integer variable in C++?",
      options: {
        a: "0",
        b: "null",
        c: "garbage value",
        d: "None"
      },
      answer: "c",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "Which of the following is NOT a valid C++ variable name?",
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
      question: "What is the keyword used to define a constant in C++?",
      options: {
        a: "final",
        b: "const",
        c: "constant",
        d: "var"
      },
      answer: "b",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "How do you take input from a user in C++?",
      options: {
        a: "cin >> variable;",
        b: "scanf(\"%d\", &variable);",
        c: "input(variable);",
        d: "read(variable);"
      },
      answer: "a",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "Which header file is required for input/output operations in C++?",
      options: {
        a: "<iostream>",
        b: "<stdio.h>",
        c: "<conio.h>",
        d: "<string>"
      },
      answer: "a",
      chosenAnswer: '',
      set: 2
    }
])

const intermediateLevel = ref([
    {
      question: `What is the output of the following code? <br>
cpp<br>
CopyEdit<br>
int x = 5;<br>
x += 3;<br>
cout << x;
`,
      options: {
        a: "5",
        b: "8",
        c: "3",
        d: "error"
      },
      answer: "b",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "What will happen if you try to divide by zero in C++ using an integer?",
      options: {
        a: "Compilation error",
        b: "Runtime error",
        c: "It returns zero",
        d: 'It prints "Infinity"'
      },
      answer: "b",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "How do you correctly define a function in C++?",
      options: {
        a: "void myFunction() {}",
        b: "function myFunction() {}",
        c: "def myFunction():",
        d: "myFunction {}"
      },
      answer: "a",
      chosenAnswer: '',
      set: 1
    },
    {
      question: `What will be the output of this code? <br>
cpp<br>
CopyEdit<br>
int a = 10;<br>
int *p = &a;<br>
cout << *p;<br>`,
      options: {
        a: "10",
        b: "Address of a",
        c: "*p",
        d: "Error"
      },
      answer: "a",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "Which of the following loops is guaranteed to execute at least once?",
      options: {
        a: "for loop",
        b: "while loop",
        c: "do-while loop",
        d: "None of the above"
      },
      answer: "c",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "What is the size of a pointer variable in a 64-bit system?",
      options: {
        a: "4 bytes",
        b: "8 bytes",
        c: "16 bytes",
        d: "Depends on the compiler"
      },
      answer: "b",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "Which operator is used to allocate memory dynamically in C++?",
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
      question: `What will the following code print?<br>
cpp<br>
CopyEdit<br>
int a = 10, b = 20;<br>
swap(a, b);<br>
cout << a << " " << b;<br>`,
      options: {
        a: "10 20",
        b: "20 10",
        c: "Error",
        d: "Undefined behavior"
      },
      answer: "c",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "How do you correctly deallocate memory allocated using new in C++?",
      options: {
        a: "delete pointer;",
        b: "free(pointer);",
        c: "remove(pointer);",
        d: "clear(pointer);"
      },
      answer: "a",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "Which of the following is used to prevent modification of a variable?",
      "options": {
        "a": "final",
        "b": "static",
        "c": "const",
        "d": "protected"
      },
      answer: "c",
      chosenAnswer: '',
      set: 2
    }
  ])

const hardLevel = ref([
    {
      question: `What is the output of the following C++ code?<br>
cpp<br>
CopyEdit<br>
int x = 10;<br>
int &y = x;<br>
y = 20;<br>
cout << x;`,
      options: {
        a: "10",
        b: "20",
        c: "20",
        d: "None of the above"
      },
      answer: "b",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "What is the primary purpose of a virtual function in C++?",
      options: {
        a: "To allow function overloading",
        b: "To enable polymorphism",
        c: "To allow multiple inheritance",
        d: "To improve performance"
      },
      answer: "b",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "What is this pointer in C++?",
      options: {
        a: "A pointer to the current object",
        b: "A pointer to the parent object",
        c: "A pointer to the first object of the class",
        d: "A pointer to the last object of the class"
      },
      answer: "a",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "Which type of inheritance is NOT supported in C++?",
      options: {
        a: "Single Inheritance",
        b: "Multiple Inheritance",
        c: "Multilevel Inheritance",
        d: "None of the above"
      },
      answer: "d",
      chosenAnswer: '',
      set: 1
    },
    {
      question: `What will the following code output?<br>
cpp<br>
CopyEdit<br>
class Base {<br>
public:<br>
    virtual void show() { cout << "Base"; }<br>
};<br>
class Derived : public Base {<br>
public:<br>
    void show() { cout << "Derived"; }<br>
};<br>
int main() {<br>
    Base* b;<br>
    Derived d;<br>
    b = &d;<br>
    b->show();<br>
}`,
      options: {
        a: "Base",
        b: "Derived",
        c: "Error",
        d: "None"
      },
      answer: "b",
      chosenAnswer: '',
      set: 1
    },
    {
      question: "How can you make a class abstract in C++?",
      options: {
        a: "By declaring at least one pure virtual function",
        b: "By making the constructor private",
        c: "By inheriting from another class",
        d: "By declaring all methods as private"
      },
      answer: "a",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "Which of the following is NOT a valid C++ exception handling keyword?",
      options: {
        a: "try",
        b: "catch",
        c: "throw",
        d: "error"
      },
      answer: "d",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "What is the time complexity of inserting an element in the middle of a std::vector?",
      options: {
        a: "O(1)",
        b: "O(log n)",
        c: "O(n)",
        d: "O(n log n)"
      },
      answer: "c",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "What does the keyword mutable do in C++?",
      options: {
        "a": "Allows modification of class members inside a const function",
        "b": "Prevents modification of class members",
        "c": "Makes a variable static",
        "d": "Allocates dynamic memory"
      },
      answer: "a",
      chosenAnswer: '',
      set: 2
    },
    {
      question: "Which of the following correctly declares a function pointer?",
      options: {
        a: "void (*ptr)();",
        b: "void ptr();",
        c: "void &ptr();",
        d: "void ptr*();"
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

