<template>
    <div>
        <FilePond
            ref="refFilePond"
            server="/api"
            accept-file-types="image/jpeg, image/png"
            allow-multiple="myEditor"
            :imageEditorWriteImage="false"
            styleImageEditorButtonEditItemPosition="bottom left"
            :imageEditor="myEditor"
            :files="myFiles"
            @init="handleFilePondInit"
            @change="ejecutar"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
// Import Vue FilePond
import vueFilePond from "vue-filepond";
import FilePondPluginFilePoster from "filepond-plugin-file-poster";
import FilePondPluginImageEditor from "@pqina/filepond-plugin-image-editor";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.min.css";

// Import Pintura styles
import "@pqina/pintura/pintura.css";

// Import Pintura
import {
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

  // filepond
  openEditor,
  processImage,
  createDefaultImageOrienter,
  legacyDataToImageState,
} from "@pqina/pintura";

setPlugins(plugin_crop, plugin_finetune, plugin_filter, plugin_annotate);

const FilePond = vueFilePond(
    FilePondPluginImageEditor,
    FilePondPluginFilePoster
)

const refFilePond = ref()

const myFiles = ref([])

const myEditor = {
        // map legacy data objects to new imageState objects
        legacyDataToImageState: legacyDataToImageState,

        // used to create the editor, receives editor configuration, should return an editor instance
        createEditor: openEditor,

        // Required, used for reading the image data
        imageReader: [createDefaultImageReader],

        // optionally. can leave out when not generating a preview thumbnail and/or output image
        imageWriter: [createDefaultImageWriter],

        // used to generate poster images, runs an editor in the background
        imageProcessor: processImage,

        // editor options
        editorOptions: {
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
        },
}

// functionss
function handleFilePondInit(value){
    console.log('Esta es la funcion que ejecuta al abrir la imagen: ', refFilePond.value);
}

function ejecutar(){
    refFilePond.value.getFiles()
    console.log('La imagen se ha cargado correctametne', refFilePond.value.getFile());
}

</script>