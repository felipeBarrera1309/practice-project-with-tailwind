<template>
	<div class="mx-auto max-w-[600px] w-full">
		Esta es la vista de quill editor
		<QuillEditor theme="snow" />
	</div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

</script>

<style lang="scss" scoped>

</style>