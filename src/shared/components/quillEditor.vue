<template>
	<div class="mx-auto overflow-auto max-w-[800px] w-full h-[600px] my-5">
		<div ref="refContentQuill" class="overflow-auto min-h-[100px]" />
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Quill from 'quill'
import ImageResize from 'quill-image-resize-vue';
import 'quill-image-uploader/dist/quill.imageUploader.min.css';
import "quill-emoji/dist/quill-emoji.css";
import 'quill/dist/quill.snow.css';
import * as Emoji from "quill-emoji";

Quill.register("modules/emoji", Emoji);
Quill.register('modules/imageResize', ImageResize);

const refContentQuill = ref()

const quill = ref()

onMounted(() => {
	console.log('Este es el contenedor el cual voy a colocar el quill editor: ', refContentQuill.value);
	const fullToolbarOptions = [
		[{ 'header': [1, 2, 3, false] }],
		['bold', 'italic', 'underline'],
		[{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'align': [] }],
		['blockquote', 'code-block', { 'link': true}],
		['image', 'emoji'],
		[{ 'color': [] }, { 'background': [] }],
		['clean'],
	];

	quill.value = new Quill(refContentQuill.value, {
		theme: 'snow',
		modules: {
			toolbar: fullToolbarOptions,
			imageResize: {
				modules: [ 'Resize', 'DisplaySize', 'Toolbar' ],
			},
			"emoji-toolbar": true,
			"emoji-textarea": false,
			"emoji-shortname": true,
		},
		placeholder: 'props.placeholderText',
	})
})

// functions

// function executeAction(){
	// Este es el metodo para eliminar todo el contenido que esta escrito dentro del quill editor.
	// quill.value.deleteText(0, quill.value.container.firstChild.textContent.length)

	// Este es el metodo para obtener todo el contenido que esta dentro del input quill.editor.
	// quill.value.getContents()
	// console.log('Este obtiene todo el contenido que esta dentro del quillEditor: ', quill.value.getContents());
	//
	// console.log('Este es para obtener toda la longitud del contenido que esta dentro del quillEditor: ', quill.value.getLength());
	// writeText.value = quill.value.container.firstChild.innerHTML
	
// }

</script>