<template>
	<div class="flex flex-col mx-auto max-w-[800px] w-full h-[600px]">
		<span v-html="writeText" />
		Esta es la vista de quill editor
		<div ref="refContentQuill" class="min-h-[100px] overflow-auto" />
		<button class="text-white py-1 px-2 bg-red-500" @click="executeAction">Ejecutar acciones sobre el quill</button>
		<p>Este es el parrafo de reemplazar <strong>adquirir negrilla <em>esta es la italic <u>Esta es la underline</u> </em> </strong> </p>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Quill from 'quill'

const refContentQuill = ref()

const quill = ref()
const writeText = ref('')

onMounted(() => {
	console.log('Este es el contenedor el cual voy a colocar el quill editor: ', refContentQuill.value);

	quill.value = new Quill(refContentQuill.value, {
		theme: 'snow',
		debug: 'warn',
		modules: {
			
		},
		placeholder: 'add a comment',
		scrollingContainer: 'overflow'
	})
})

// functions

function executeAction(){
	// Este es el metodo para eliminar todo el contenido que esta escrito dentro del quill editor.
	// quill.value.deleteText(0, quill.value.container.firstChild.textContent.length)

	// Este es el metodo para obtener todo el contenido que esta dentro del input quill.editor.
	// quill.value.getContents()
	console.log('Este obtiene todo el contenido que esta dentro del quillEditor: ', quill.value.getContents());
	//
	console.log('Este es para obtener toda la longitud del contenido que esta dentro del quillEditor: ', quill.value.getLength());
	writeText.value = quill.value.container.firstChild.innerHTML
	
}

</script>