<template>
    <div class="min-h-screen">
        <!-- hero -->
        <div class="h-screen w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-10 text-center lg:text-start">
            <div class="lg:w-3/5 space-y-10 px-5">
                <h1 class="text-5xl font-bold capitalize">Programing E- Learning System</h1>
                <p class="text-gray-300 text-xl lg:w-4/5">Kent Beck once said, "Make it work, make it right and make it fast." Writting code that runs isn't difficult in programming, but writing code that's fucntional is difficult. You ought to becoming more adept at doing it quickly and creatively.</p>
                <button class="px-3 py-1 bg-ter text-lg rounded border border-transparent hover:bg-transparent hover:border-white">Get Started</button>
            </div>
            <div class="w-1/2 lg:w-2/5">
                <NuxtImg src="/images/cos.png" class="w-full" />
            </div>
        </div>
        <!-- system about -->
        <div class="h-fit w-full shadow-inner-lg bg-second">
            <div class="w-full max-w-7xl h-full py-14 mx-auto flex flex-col lg:flex-row items-center justify-start gap-y-10 gap-x-20">
                <div class="w-full lg:w-1/2 h-full flex flex-col justify-center text-center gap-y-10 px-5 lg:px-0">
                    <h1 class="uppercase font-bold text-4xl">About</h1>
                    <p class="text-xl text-gray-200 text-justify">In the realm of e-learning systems, programming languages act as essential tools that enable learners to create exceptional programs. These programs help society grasp the intricacies of technology, empowering learners to thrive on their own terms, anytime and anywhere. Programming languages also support continuous growth, fostering lifelong learning and professional development by providing a structured pathway for understanding and manipulating digital systems. This empowers individuals to innovate and create within the evolving landscape of digital education.</p>
                </div>
                <div id="about" class="w-full lg:w-1/2 h-full flex flex-col justify-center gap-y-5 lg:gap-y-10 px-5 lg:px-0">
                    <div class="w-full h-fit rounded-xl bg-prime shadow-inner-lg p-5 space-y-2">
                        <Icon name="vscode-icons:file-type-cpp3" class="text-4xl" />
                        <h2 class="text-xl font-bold">C++</h2>
                        <p class="text-gray-300">C++ is a cross-platform language that can be used to create high-performance applications. C++ was developed by Bjarne Stroustrup, as an extension to the C language. C++ gives programmers a high level of control over system resources and memory. The language was updated 4 major times in 2011, 2014, 2017, and 2020 to C++11, C++14, C++17, C++20.</p>
                    </div>
                    <div class="w-full h-fit rounded-xl bg-prime shadow-inner-lg p-5 space-y-2">
                        <Icon name="skill-icons:java-light" class="text-4xl" />
                        <h2 class="text-xl font-bold">Java  </h2>
                        <p class="text-gray-300">Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
                        <br><br>
                        Designed by: James Gosling
                        <br><br>
                        First appeared: May 23, 1995; 29 years ago</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- cpp tutorial -->
        <CppTutorials />
        <!-- cpp compiler -->
        <CppCompiler />
        <!-- cpp quiz -->
        <CppQuiz />
        <!-- java tutorial -->
        <JavaTutorials />
        <!-- java compiler -->
        <JavaCompiler />
        <!-- java quiz -->
        <JavaQuiz />
    </div>
</template>

<script setup>

</script>   