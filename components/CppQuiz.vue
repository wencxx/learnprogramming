<template>
    <div class="h-[70dvh] flex flex-col justify-center items-center text-center shadow-inner-lg bg-[#2e3267] hover:bg-transparent gap-y-14 px-5 lg:px-0">
        <h2 class="font-black text-3xl tracking-wide">C++  Excercise Quiz</h2>
        <div class="w-72 h-72 shadow-lg shadow-black rounded-xl overflow-hidden bg-white flex flex-col justify-between items-center pb-5">
            <div class="bg-[#0b58a7] h-1/5 flex items-center justify-around text-xl w-full">
                <p>Score: 0</p>
                <p>0</p>
            </div>
            <button class="bg-[#0b58a7] w-fit rounded-full px-7 py-2 hover:bg-blue-700" @click="isOpen = true">Start</button>
        </div>

        <UModal v-model="isOpen" prevent-close>
            <UCard :ui="{ ring: '', divide: '' }">
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white uppercase">
                        Select quiz level
                        </h3>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
                    </div>
                </template>

                <USelect icon="i-heroicons-chart-bar-solid" placeholder="Select quiz level" v-model="level" :options="levels" size="lg" />

                <template #footer>
                    <div class="flex justify-end">
                        <UButton :loading="redirecting" color="gray" variant="solid" size="lg" @click="takeQuiz()">
                            <span>Take quiz</span>
                        </UButton>
                    </div>
                </template>
            </UCard>
        </UModal>
    </div>
</template>

<script setup>
const router = useRouter()

const isOpen = ref(false)

const levels = ['Easy', 'Intermediate', 'Hard']

const level = ref('')

const redirecting = ref(false)
const takeQuiz = () => {
    redirecting.value = true
    setTimeout(() => {
        redirecting.value = false
        router.push({
            path: 'cpp-quiz',
            query: {
                level: level.value
            }
        })
    }, 1000)
}
</script>
