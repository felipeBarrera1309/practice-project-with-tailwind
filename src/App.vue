<template>
  <article class="w-full my-10 sm:w-9/12 mx-auto sm:max-w-2xl sm:flex">
    <section class="bg-gradient-to-t max-w-md mx-auto to-violet-500 from-violet-800 rounded-b-2xl sm:rounded-2xl p-10 text-white border text-center space-y-5">
      <p class="text-gray-300 font-bold">Your result</p>
      <div class="flex flex-col justify-center aspect-square mx-auto rounded-full bg-gradient-to-b from-violet-800 to-violet-500 w-36">
        <p class="text-5xl font-extrabold">76</p>
        <p>of 100</p>
      </div>
      <p class="text-2xl font-bold">Great</p>
      <p class="inline-block text-gray-400 font-bold">You scored higher than 65% of the people who have taken these test</p>
    </section>
    <section class="dark:bg-gray-800 max-w-md mx-auto sm:w-full shadow-xl">
      <div class="px-10 py-5 space-y-6">
        <p>Summary</p>
        <template v-for="(data, index) in views" :key="index">
          <div class="flex mb-2 p-2 rounded-md text-sm" :class="data.bg">
            <p :class="data.color">{{ data.name }}</p>
            <div class="ms-auto">
              <p>{{ data.viewOne }} <span class="text-gray-400">/ 100</span></p>
            </div>
          </div>
        </template>
        <button class="w-full py-2 rounded-full bg-gray-800 text-white" @click="changeModeDark">Night / day</button>
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';

onBeforeMount(() => {
  // changeModeDark()
})

function changeModeDark(){
  console.log('estas son las preferencias de mi pc: ', window.matchMedia('(prefers-color-scheme)'));
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

localStorage.setItem('theme', 'dark')

// // Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')
}

const views = ref([
  { name: 'reaction', viewOne: 80, color: 'text-red-400', bg: 'bg-red-100' },
  { name: 'memory', viewOne: 80, color: 'text-yellow-400', bg: 'bg-yellow-100' },
  { name: 'verbal', viewOne: 80, color: 'text-green-400', bg: 'bg-green-100' },
  { name: 'Visual', viewOne: 80, color: 'text-blue-400', bg: 'bg-blue-100' },
])

</script>

<style lang="scss" scoped>

</style>