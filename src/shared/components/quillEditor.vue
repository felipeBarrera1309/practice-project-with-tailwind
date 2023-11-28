<template>
	<div class="text-editor flex flex-col-reverse mx-auto overflow-auto max-w-[800px] w-full h-[600px] my-5">
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

	function ejecutarEvento(){
		console.log('Esto se ejecuta en cualquier evento emitido por el quillEditor internamente y cuando el usuario interactue con el quill');
	}

	quill.value.on('text-change', ejecutarEvento)
	quill.value.off('text-change', ejecutarEvento)
})

// functions



</script>

<style lang="scss" >
.text-editor{
	border: 1px solid purple;
	border-radius: 8px;
	position: relative;

	.ql-toolbar.ql-snow {
		position: sticky;
		top: 0px;
		border: none;
	}
	.ql-toolbar.ql-snow + .ql-container.ql-snow {
		overflow: auto;
		max-height: 100%;
		border: none;
	}
	.ql-container.ql-snow {
		border: none;
	}
}
</style>