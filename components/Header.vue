<template>
    <div class="h-20 w-full fixed top-0 left-0 flex items-center justify-center z-50">
        <nav class=" w-full max-w-7xl mx flex justify-between px-5 lg:px-0">
            <h1 class="font-black text-xl tracking-wide">RCC</h1>
            <ul class="hidden lg:flex gap-x-10">
                <li>
                    <NuxtLink to="/" class="p-1 hover:border-b-2 border-ter" :class="{ 'border-b-2': $route.hash === '' && $route.path === '/' }">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#about" class="p-1 hover:border-b-2 border-ter" :class="{ 'border-b-2': $route.hash === '#about' }">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="p-1 hover:border-b-2 border-ter">Languages</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/compiler" class="p-1 hover:border-b-2 border-ter" :class="{ 'border-b-2': $route.path === '/compiler' }">Compiler</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="p-1 hover:border-b-2 border-ter">Contact</NuxtLink>
                </li>
            </ul>
            <Icon name="nrk:list" class="lg:hidden text-3xl cursor-pointer" @click="isOpenNav = true" />
        </nav>
        <!-- nav mobile -->
        <nav class="flex lg:hidden w-screen h-screen fixed top-0 left-0 bg-prime items-center justify-center -translate-x-full duration-300" :class="{ '!translate-x-0': isOpenNav }">
            <Icon name="mdi:close" class="text-3xl cursor-pointer absolute top-7 right-10" @click="isOpenNav = false" />
            <ul class="text-center space-y-6 text-xl">
                <li>
                    <NuxtLink to="/" class="p-1 hover:border-b-2 border-ter" :class="{ 'border-b-2': $route.hash === '' && $route.path === '/' }">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#about" class="p-1 hover:border-b-2 border-ter" :class="{ 'border-b-2': $route.hash === '#about' }">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="p-1 hover:border-b-2 border-ter">Languages</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/compiler" class="p-1 hover:border-b-2 border-ter" :class="{ 'border-b-2': $route.path === '/compiler' }">Compiler</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="p-1 hover:border-b-2 border-ter">Contact</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
const isOpenNav = ref(false)
</script>