<template>
    <div>
        <FilePond
            ref="refFilePond"
            accept-file-types="image/jpeg, image/png, image/jpg"
            :allow-multiple="false"
            styleImageEditorButtonEditItemPosition="bottom left"
            :imageEditor="myEditor"
            @init="handleFilePondInit"
            @change="ejecucion"
			class="w-[400px]"
        >
			<p>Selecciona tu archivo</p>
		</FilePond>
    </div>
</template>

<script setup>
import { ref } from "vue";
// Import Vue FilePond
import vueFilePond from "vue-filepond";
import FilePondPluginFilePoster from "filepond-plugin-file-poster";
import FilePondPluginFileValidateType from 'filepond-plugin-file-poster'
import FilePondPluginImageEditor from "@pqina/filepond-plugin-image-editor";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.min.css";

// Import Pintura styles
import "@pqina/pintura/pintura.css";

// Import Pintura
import {
	// filepond
	legacyDataToImageState,
	openEditor,
	processImage,
	createDefaultImageOrienter,

	// editor
	createDefaultImageReader,
	createDefaultImageWriter,
	locale_en_gb,

	// plugins
	setPlugins,
	plugin_crop,
	plugin_crop_locale_en_gb,
	plugin_filter,
	plugin_filter_defaults,
	plugin_filter_locale_en_gb,
	plugin_finetune,
	plugin_finetune_defaults,
	plugin_finetune_locale_en_gb,
	plugin_annotate,
	plugin_annotate_locale_en_gb,
	markup_editor_defaults,
	markup_editor_locale_en_gb,
	createDefaultShapePreprocessor

} from "@pqina/pintura";

setPlugins(plugin_crop, plugin_finetune, plugin_filter, plugin_annotate);

const FilePond = vueFilePond(
    FilePondPluginImageEditor,
    FilePondPluginFileValidateType
)

const refFilePond = ref()

const myEditor = {
        // map legacy data objects to new imageState objects
        legacyDataToImageState: legacyDataToImageState,

        // used to create the editor, receives editor configuration, should return an editor instance
        createEditor: openEditor,

        // Required, used for reading the image data
        imageReader: [
			createDefaultImageReader,
			{
				targetSize: {
					width: 300,
					height: 300
				}
			}
		],

        // optionally. can leave out when not generating a preview thumbnail and/or output image
        imageWriter: [
			createDefaultImageWriter,
			{
				targetSize: {
					width: 300,
					height: 300
				}
			}
		],

        // used to generate poster images, runs an editor in the background
        imageProcessor: processImage,

        // editor options
        editorOptions: {
			shapePreprocessor: createDefaultShapePreprocessor(),
			utils: ["crop", "finetune", "filter", "annotate"],
			imageOrienter: createDefaultImageOrienter(),
			...plugin_finetune_defaults,
			...plugin_filter_defaults,
			...markup_editor_defaults,
			locale: {
				...locale_en_gb,
				...plugin_crop_locale_en_gb,
				...plugin_finetune_locale_en_gb,
				...plugin_filter_locale_en_gb,
				...plugin_annotate_locale_en_gb,
				...markup_editor_locale_en_gb,
			},
			imageCropAspectRatio: 1,        },
}

// functionss
function handleFilePondInit(value){
    console.log('Esta es la funcion que ejecuta al abrir la imagen: ', refFilePond.value);
}

function ejecucion(value){
    console.log('ESTO SE EJECUTA CUANDO COMIENZA A CAMBIAR LA IMAGEN', value.target.files[0]);
}

</script>