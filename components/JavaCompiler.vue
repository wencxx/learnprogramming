<template>
    <div class="h-fit text-center shadow-inner-lg bg-[#2e3267] hover:bg-transparent py-20 space-y-10 px-5 lg:px-0">
        <h2 class="font-black text-3xl tracking-wide">Programming Compiler</h2>
        <NuxtImg src="/images/javacompiler.png" class="lg:w-3/4 mx-auto" />
        <h4 class="font-bold text-xl">Java Compiler</h4>
        <p class="lg:w-3/5 text-sm mx-auto">A Java compiler is a program that takes the text file work of a developer and compiles it into a platform-independent Java file.</p>
        <div>
            <NuxtLink :to="{ path: '/compiler', query: { language: 'java' } }" class="bg-orange-700 border border-transparent hover:bg-transparent hover:border-white px-6 py-3 text-lg">Compile</NuxtLink>
        </div>
    </div>
</template>

<script setup>

</script>
