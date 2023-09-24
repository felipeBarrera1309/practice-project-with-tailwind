<template>
	<section class="flex flex-col">
		<div class="flex justify-center mt-10 gap-x-8">
			<button class="text-white rounded-md bg-slate-500 px-6 py-1" @click="router.push({ name: 'content.main' })">MAIN</button>
			<button class="text-white rounded-md bg-slate-500 px-6 py-1" @click="router.push({ name: 'full.calendar' })">FullCalendar</button>
			<button class="text-white rounded-md bg-slate-500 px-6 py-1" @click="router.push({ name: 'content.cropper' })">CROPPER</button>
			<button class="text-white rounded-md bg-slate-500 px-6 py-1" @click="router.push({ name: 'file.pond' })">FILE-POND</button>
		</div>
		<router-view />
	</section>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

</script>