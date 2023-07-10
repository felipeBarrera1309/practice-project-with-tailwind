<template>
  <div class="border-4 mt-10 mx-5 border-violet-950 flex flex-wrap md:flex-nowrap gap-2 bg-rosado bg-scroll p-2">
    <div class="h-10 bg-blue w-full md:w-2/5" />
    <div class="h-10 bg-green w-full md:w-4/5" />
  </div>
  <div class="bg-orange mx-5 my-4 p-5 rounded-lg ring-1 ring-slate-900/50 shadow-lg shadow-slate-700">
    <p>width of my page</p>
  </div>
  <div class="flex flex-col gap-3">
    <input
      type="email"
      placeholder="Email"
      class="border border-slate-800 p-1 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-700 focus:invalid:ring-red-600 peer/validation focus:invalid:text-red-800"
    />
    <p class="text-red-600 invisible peer-invalid/validation:visible">Este correo es invalido</p>
  </div>
  <button
    class="hover:from-violet-900 hover:to-green cursor-pointer bg-gradient-to-tl from-emerald-700 from-10% via-red-700 via-30% to-slate-950 to-90% block mx-auto text-rosado px-10 py-3.5 my-3.5 rounded-full"
    style="transition: 0.3s ease-in-out"
    @click="showText"
  >
    Change colors
  </button>
  <button class="hover:bg-fuchsia-600 hover:text-pink bg-slate-700 text-white block mx-auto p-2 px-4 border border-x-lime-600 focus:outline-none focus:bg-blue focus:ring-8 focus:ring-green rounded-full" style="transition: 0.3s ease-in-out;">Change styles</button>
  <div class="bg-clip-text bg-gradient-to-r from-violet-600 to-lime-600 w-fit">
    <p class="text-transparent uppercase font-black text-5xl">content</p>
  </div>
  <ul role="list" class="group hover:ring-2 space-y-1 hover:bg-red-400 p-6 divide-y divide-slate-200 border border-slate-800 ring-red-800 ring-1 mx-4 cursor-pointer" style="transition: 0.3s ease-in-out;">
      <template v-for="(person, i) in information" :key="i">
        <!-- Remove top/bottom padding when first/last child -->
        <li class="group-hover:bg-slate-700 flex py-4 first:pt-0 last:pb-0 [&:nth-child(3)]:bg-red-700" style="transition: 0.3s ease-in-out;">
          <img class="h-10 w-10 rounded-full" :src="person.url" alt="" />
          <div class="ml-3 overflow-hidden">
            <p class="group-hover:text-white text-sm font-medium text-slate-900"  style="transition: 0.3s ease-in-out;">{{person.name}}</p>
            <p class="group-hover:text-white text-sm text-slate-500 truncate" style="transition: 0.3s ease-in-out;">{{person.email}}</p>
          </div>
        </li>
    </template>
  </ul>
  <a href="#" class="group transition my-6 ease-in-out duration-300 transform hover:-translate-y-5 block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
    <div class="flex items-center space-x-3">
      <span v-html="iconFile"></span>
      <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
    </div>
    <p class="text-slate-500 group-hover:text-white font-medium">Create a new project from a variety of starting templates.</p>
  </a>
  <ul role="list" class="divide-y divide-slate-300 space-y-1 mx-5 my-10">
    <template v-for="person in information">
      <li class="group/item ease-in-out duration-300 py-3 px-2 first:pt-0 last:pb-0 flex hover:bg-slate-400 cursor-pointer">
        <img :src="person.url" alt="" class="h-10 w-10" />
        <div class="ms-3 overflow-hidden">
          <p class="ease-in-out duration-300 group-hover/item:text-white text-sm font-medium text-slate-900" >{{person.name}}</p>
          <p class="ease-in-out duration-300 group-hover/item:text-white text-sm text-slate-500 truncate">{{person.email}}</p>
        </div>
        <div class="group/edit ease-in-out duration-300 flex ms-auto me-24 gap-3 items-center hover:bg-slate-200 h-3/4 my-auto px-2 rounded-xl invisible group-hover/item:visible">
          <span>Call</span>
          <span v-html="iconArrow" />
        </div>
      </li>
    </template>
  </ul>
  <input
      type="email"
      placeholder="Correo electronico"
      class="mx-auto block px-3 py-1 mb-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:invalid:ring-red-700 peer"
  />
  <p class="mx-auto w-80 text-center text-red-600 invisible peer-invalid:visible mb-5">Este correo no es valido</p>
  <div class="mx-auto flex space-x-3 justify-center w-3/5 mb-10">
    <input id="first" class="peer/draft" type="radio" name="status" checked />
    <p for="first" class="peer-checked/draft:text-red-600">Borrar</p>

    <input id="second" class="peer/published" type="radio" name="status" />
    <p for="second" class="peer-checked/published:">Publicar</p>

    <p for="first" class="invisible peer-checked/draft:visible">Este es el borrador</p>
    <p class="invisible peer-checked/published:visible">Este es el publicado</p>
  </div>
  <div class="mb-10">
    <p class="after:content-['*'] after:text-red-700 after:ms-1 font-semibold block">Correo electronico</p>
    <input
        type="email"
        name="email"
        placeholder="Email"
        class="border border-slate-300 rounded-md px-2 py-1 placeholder:text-lx focus:outline-none focus:ring-1 focus:ring-slate-800"
    />
  </div>

</template>

<script setup>
import { ref } from 'vue';

function showText(){
  console.log('Este es el boton que cambia los colores');
}

const information = ref([
  { name: 'Felipe Barrera', email: 'felipe@gmail.com', url: 'https://1000marcas.net/wp-content/uploads/2021/05/Google-Photos-logo.png' },
  { name: 'Maria Paula', email: 'maria@gmail.com', url: 'https://1000marcas.net/wp-content/uploads/2021/05/Google-Photos-logo.png' },
  { name: 'Sofia', email: 'sofia@gmail.com', url: 'https://1000marcas.net/wp-content/uploads/2021/05/Google-Photos-logo.png' },
  { name: 'Yave Pico', email: 'yave@gmail.com', url: 'https://1000marcas.net/wp-content/uploads/2021/05/Google-Photos-logo.png' },
  { name: 'Yave Pico', email: 'yave@gmail.com', url: 'https://1000marcas.net/wp-content/uploads/2021/05/Google-Photos-logo.png' },
  { name: 'Yave Pico', email: 'yave@gmail.com', url: 'https://1000marcas.net/wp-content/uploads/2021/05/Google-Photos-logo.png' },
  { name: 'Yave Pico', email: 'yave@gmail.com', url: 'https://1000marcas.net/wp-content/uploads/2021/05/Google-Photos-logo.png' },
  { name: 'Yave Pico', email: 'yave@gmail.com', url: 'https://1000marcas.net/wp-content/uploads/2021/05/Google-Photos-logo.png' },
  { name: 'Yave Pico', email: 'yave@gmail.com', url: 'https://1000marcas.net/wp-content/uploads/2021/05/Google-Photos-logo.png' },
  { name: 'Yave Pico', email: 'yave@gmail.com', url: 'https://1000marcas.net/wp-content/uploads/2021/05/Google-Photos-logo.png' },
])

const iconFile = '<svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19H6.931A1.922 1.922 0 015 17.087V8h12.069C18.135 8 19 8.857 19 9.913V11"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 7.64L13.042 6c-.36-.616-1.053-1-1.806-1H7.057C5.921 5 5 5.86 5 6.92V11M17 15v4M19 17h-4"></path></svg>'

const iconArrow = '<svg class="mt-px h-5 w-5 text-blue transition group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg>'

</script>

<style lang="scss" scoped>

</style>