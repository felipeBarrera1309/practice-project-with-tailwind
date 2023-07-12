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
      class="bg-slate-300 col-end-3 text-black px-3 py-1 text-sm font-extrabold rounded-full "
    >
      #photographyTwo
    </span>
    <span
      class="bg-slate-300 text-black px-3 py-1 text-sm font-extrabold rounded-full "
    >
      #photographyThree
    </span>
    <span
      class="bg-slate-300  text-black px-3 py-1 text-sm font-extrabold rounded-full "
    >
      #photographyThree
    </span>
  </div>

  <div class="grid grid-cols-1 grid-rows-5 sm:grid-cols-5 sm:grid-rows-2 gap-3 mt-28 mx-5 h-48">
    <div class="border">box-one</div>
    <div class="border">box-two</div>
    <div class="border sm:col-span-3 sm:row-span-2">box-three</div>
    <div class="border">box-four</div>
    <div class="border">box-five</div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
section{
  background-image: url('https://www.ciudaddemascotas.com/pub/media/wysiwyg/BlogImages/Agosto2016/cuidar-gatitos.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center ;
}


</style>