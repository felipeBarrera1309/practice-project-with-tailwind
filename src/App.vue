<template>

  <nav class="container flex flex-wrap md:flex-nowrap items-center justify-between p-4 mx-auto my-20 bg-blue-400">
    <div class="flex items-center gap-x-3">
      <span v-html="iconChat" />
      <p class="font-bold text-lg text-white">Tailwind CSS</p>
    </div>
    <div class="block md:hidden">
      <button
      @click="openMenu"
      class="border transitionAction md:hidden hover:border-white focus:shadow focus:shadow-black cursor-pointer border-teal-200 w-12 h-12 rounded-md"
    >
    </button>
    </div>
    <div ref="refTitles"  class="transitionAction w-full hidden justify-end grow md:block md:flex">
      <div class="text-white mx-auto flex-col md:flex-row flex items-center gap-4">
        <a href="#" class="text-teal-200 hover:text-white">Docs</a>
        <a href="#" class="text-teal-200 hover:text-white">Examples</a>
        <a href="#" class="text-teal-200 hover:text-white">Blog</a>
      </div>
      <button class="border block transitionAction mx-auto md:mx-0 border-teal-400 text-teal-200 bg-transparent hover:text-white hover:border-white rounded-md px-3 py-1">Dowload</button>
    </div>
  </nav>

  <section class="container ease-in-out duration-300 md:filter-none hover:blur-0 rounded-lg bg-orange/50 border border-slate-600/10 mx-auto text-center mt-10">
    <button class="ease-in-out bg-red-500 f-small:bg-pink duration-300 hover:bg-blue-700 px-4 py-2 rounded-md font-extrabold text-white">My button</button>
    <p class="text-left capitalize first-line:uppercase first-letter:mr-4 first-letter:float-left first-letter:text-5xl ease-out duration-300 text-lg/5 hover:text-2xl font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sit atque dolores repellat blanditiis amet ipsum, tenetur aut officia enim. Possimus tempore tempora enim cumque eveniet eum debitis aut veniam.blanditiis amet ipsum, tenetur aut officia enim. Possimus tempore tempora enim cumque eveniet eum debitis aut veniam</p>
  </section>
  <div class="container grid grid-cols-3 gap-4 transitionAction mx-auto rounded-xl h-20 mt-10 shadow-xl hover:shadow-lg shadow-slate-900/50">
    <span
      class="bg-slate-300 col-start-3 text-black px-3 py-1 text-sm font-extrabold rounded-full "
    >
      #photographyOne
    </span>
    <span
      class="bg-slate-300 sticky top-0 col-end-3 text-black px-3 py-1 text-sm font-extrabold rounded-full "
    >
      #photographyTwo
    </span>
    <span
      class="bg-slate-300 text-black px-3 py-1 text-sm font-extrabold rounded-full "
    >
      #photographyThree
    </span>
    <span
      class="bg-slate-300 text-black px-3 py-1 text-sm font-extrabold rounded-full "
    >
      #photographyThree
    </span>
  </div>

  <div class="container grid grid-col-1 md:grid-cols-5 grid-rows-1 md:grid-rows-2 grid-flow-row gap-3 mt-28 h-48 mx-auto">
    <div class="border">One</div>
    <div class="border">Two</div>
    <div class="border font-robo font-thin bg-info-900 md:col-span-3 md:row-span-2">Three</div>
    <div class="border">Four</div>  
    <div class="border bg-purple">Five</div>
  </div>
  <div class="group/text w-4/5 mx-auto mt-10">
    <img class="w-32 float-left me-5 rounded-sm" src="https://bestfriends.org/sites/default/files/styles/story_desktop_1920x1230_/public/story_images/FirstKittensFoster1501sak_1124x554.jpg?h=5c78e16c&itok=zZbIP7q6" alt="" />
    <img class="w-44 float-right me-5 rounded-sm" src="https://bestfriends.org/sites/default/files/styles/story_desktop_1920x1230_/public/story_images/FirstKittensFoster1501sak_1124x554.jpg?h=5c78e16c&itok=zZbIP7q6" alt="" />
    <div class="flow-root group-hover/text:clear-left clear-none">
      <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, magnam veniam architecto, debitis, repellendus laboriosam officia iusto esse dolorum beatae exercitationem. Iure, molestias rem placeat omnis quo soluta blanditiis et! Quia molestiae officia reiciendis numquam itaque ipsa, velit excepturi esse provident, reprehenderit repudiandae soluta corrupti incidunt inventore sed asperiores eligendi.</p>
    </div>
    <div class="flow-root">
      <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, magnam veniam architecto, debitis, repellendus laboriosam officia iusto esse dolorum beatae exercitationem. Iure, molestias rem placeat omnis quo soluta blanditiis et! Quia molestiae officia reiciendis numquam itaque ipsa, velit excepturi esse provident, reprehenderit repudiandae soluta corrupti incidunt inventore sed asperiores eligendi.</p>
    </div>
  </div>

  <div class="static overflow-auto w-4/5 h-52 mx-auto border my-10">
    <div class="mb-10">
      <img class="sticky top-0 object-contain object-center h-48 w-full" src="https://bestfriends.org/sites/default/files/styles/story_desktop_1920x1230_/public/story_images/FirstKittensFoster1501sak_1124x554.jpg?h=5c78e16c&itok=zZbIP7q6" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam delectus tempore laboriosam omnis voluptates repellat numquam eaque perferendis eveniet! Repudiandae eum necessitatibus reiciendis natus pariatur dignissimos quasi et autem totam.</p>
    </div>
    <div>
      <img class="object-contain object-center h-48 w-full" src="https://bestfriends.org/sites/default/files/styles/story_desktop_1920x1230_/public/story_images/FirstKittensFoster1501sak_1124x554.jpg?h=5c78e16c&itok=zZbIP7q6" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam delectus tempore laboriosam omnis voluptates repellat numquam eaque perferendis eveniet! Repudiandae eum necessitatibus reiciendis natus pariatur dignissimos quasi et autem totam.</p>
    </div>
  </div>


  <div class="relative w-4/5 mx-auto h-96 border">
    <div class="absolute bottom-0 w-48 h-48 bg-orange" />
  </div>

  <button class="text-white px-5 py-2 rounded-md font-bold block mx-auto mt-10 bg-blue-500">!Click</button>

  <button class="btn btn-color block mx-auto mt-10">!click</button>

  <table class="border w-4/5 my-10 mx-auto">
    <thead>
      <tr class="border">
        <th>Element One</th>
        <th>Element Two</th>
        <th>Element Three</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr class="border">
        <td>Content One</td>
        <td>Content Two</td>
        <td>Content Three</td>
      </tr>
      <tr>
        <td>Content One Second</td>
        <td>Content Two Second</td>
        <td>Content Three Second</td>
      </tr>
    </tbody>
  </table>

  <div class="relative w-4/5 mx-auto border h-40 my-10">
    <div class="absolute bg-red-700 rounded-full h-10 w-10" />
    <div class="absolute left-5 bg-orange z-0 rounded-full h-10 w-10" />
  </div>
  <div class="flex flex-row flex-wrap w-4/5 mx-auto border h-48 my-10">
    <div class="bg-orange px-4 m-2 basis-1/5" >1</div>
    <div class="bg-orange px-4 m-2 self-center basis-1/5" >2</div>
    <div class="bg-orange px-4 m-2 basis-1/5" >3</div>
  </div>

</template>

<script setup>
import { ref } from 'vue';

const refTitles = ref()

function openMenu(value){
  console.log('Este es el boton que habre el menu', value.target);
  console.log('Esta es la etiqueta padre que contiene todo: ', refTitles.value);
  console.log('Lista de las clases dentro de un array', refTitles.value.classList);
  refTitles.value.classList.toggle('hidden')
}

const iconChat = '<svg class="h-12 w-12" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#2397B3" offset="0%"></stop><stop stop-color="#13577E" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#73DFF2" offset="0%"></stop><stop stop-color="#47B1EB" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z" fill="url(#a)" transform="translate(1 1)"></path><path d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z" fill="url(#b)" transform="translate(1 1)"></path><path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FFF"></path></g></svg>'

</script>

<style lang="scss" scoped>
.btn{
  @apply px-5 py-2 rounded-sm font-bold;
}

.btn-color{
  @apply bg-blue-500 text-white;
}
.btn:hover{
  @apply bg-blue-800
}

section{
  background-image: url('https://www.ciudaddemascotas.com/pub/media/wysiwyg/BlogImages/Agosto2016/cuidar-gatitos.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center ;
}

</style>