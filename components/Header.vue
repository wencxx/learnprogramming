<template>
    <div class="h-20 w-full fixed top-0 left-0 flex items-center justify-center z-50">
        <nav class=" w-full max-w-7xl mx flex justify-between">
            <h1 class="font-black text-xl tracking-wide">RCC</h1>
            <ul class="flex gap-x-10">
                <li>
                    <NuxtLink to="/" class="p-1 hover:border-b-2 border-ter">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="p-1 hover:border-b-2 border-ter">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="p-1 hover:border-b-2 border-ter">Languages</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="p-1 hover:border-b-2 border-ter">Contact</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-active {
    border-bottom: 2px solid #f75842;
}
</style>