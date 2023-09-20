<template>
	<div>
		<h1>Esta es la vista del componente del cropperjs</h1>
		<div class="h-[600px] w-[600px]">
			<PinturaEditor
				v-bind="editorProps"
				:src="image"
				@click="handleProcess($event)"
				class="h-full"
			>
				<input type="file" />
			</PinturaEditor>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { PinturaEditor } from "@pqina/vue-pintura";
import { getEditorDefaults } from '@pqina/pintura';

const editorProps = getEditorDefaults()
const image = ref('')

function handleProcess(event){
	console.log('Esto es lo que trae al abrir el componente de los archivos: ', );
}

</script>
