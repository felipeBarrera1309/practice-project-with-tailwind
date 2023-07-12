<template>
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

</template>

<script setup>

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