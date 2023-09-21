<template>
	<div class="flex flex-col gap-y-16">
		<h1>Esta es la vista del componente del cropperjs</h1>
		<div class="h-[600px] w-[600px]">
			<PinturaEditor
                v-bind="editorDefaults"
                :src="image"
                :imageCropAspectRatio="imageCropAspectRatio"
				@pintura:load="handleLoad($event)"
				@pintura:process="handleProcess($event)"
				class="h-full w-full m-10"
            ></PinturaEditor>
		</div>
		<p v-if="imageCropper">
			<img :src="imageCropper" alt="" />
		</p>
	</div>
</template>

<script setup>
import { ref } from "vue";
import {
        // Import the default image reader and writer
        createDefaultImageReader,
        createDefaultImageWriter,

        // The method used to register the plugins
        setPlugins,

        // The plugins we want to use
        plugin_crop,
        plugin_finetune,
        plugin_annotate,

        // The user interface and plugin locale objects
        locale_en_gb,
        plugin_crop_locale_en_gb,
        plugin_finetune_locale_en_gb,
        plugin_annotate_locale_en_gb,

        // Because we use the annotate plugin we also need
        // to import the markup editor locale and the shape preprocessor
        markup_editor_locale_en_gb,
        createDefaultShapePreprocessor,

        // Import the default configuration for the markup editor and finetune plugins
        markup_editor_defaults,
        plugin_finetune_defaults,
    } from '@pqina/pintura';
import { PinturaEditor } from "@pqina/vue-pintura";
import { getEditorDefaults } from '@pqina/pintura';
import "@pqina/pintura/pintura.css";

const editorProps = getEditorDefaults()
const image = ref('https://okdiario.com/img/2023/04/10/-es-malo-que-los-gatos-coman-moscas-y-mosquitos-635x358.jpg')
// setPlugins(plugin_crop, plugin_finetune, plugin_annotate);

const imageCropper = ref('')

function handleLoad(event){
	console.log('Esto se ejecuta al manejar el cargar', event);
}

function handleProcess(event){
	imageCropper.value = URL.createObjectURL(event?.detail?.dest)
}

const  editorDefaults = {
	imageReader: createDefaultImageReader(),

	imageWriter: createDefaultImageWriter(),
	...markup_editor_defaults,

	...plugin_finetune_defaults,

	shapePreprocessor: createDefaultShapePreprocessor(),

	imageCropAspectRatio: 1,

	locale: {
		...locale_en_gb,
		...plugin_crop_locale_en_gb,
		...plugin_finetune_locale_en_gb,
		...plugin_annotate_locale_en_gb,
		...markup_editor_locale_en_gb,
	},
}
const src = 'image.jpeg'
const imageCropAspectRatio = 1

</script>
