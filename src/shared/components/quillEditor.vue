<template>
	<div class="flex flex-col mx-auto max-w-[800px] w-full h-[200px]">
		Esta es la vista de quill editor
		<div id="refContentQuill" class="min-h-[100px] overflow-auto" />

		<button class="text-white py-1 px-2 bg-red-500" @click="deleteChanges">Deshacer los cambios</button>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Quill from 'quill'
Gg
// const refContentQuill = ref()

const quill = ref()

onMounted(() => {
	console.log('Este es el contenedor el cual voy a colocar el quill editor: ', refContentQuill.value);

	quill.value = new Quill(refContentQuill.value, {
		debug: 'info',
		modules: {
			toolbar: 'full'
		},
		placeholder: 'Compose an epic...',
		readOnly: false,
		theme: 'snow'
	})
})

</script>