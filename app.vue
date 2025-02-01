<template>
  <div class="bg-prime min-h-screen font-mont">
    <Header :class="{'!bg-header shadow-2xl': y !== 0}" />
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  title: 'Learn Programming'
})

const { x, y } = useWindowScroll()
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
