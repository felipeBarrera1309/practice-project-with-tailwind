<template>
	<component :is="components" />
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import base from './shared/layouts/base.vue';

const route = useRoute()

const seeComponents = {
	'base':  base
}

const components = computed(() => {
	if(route?.name && route?.meta?.layout) return seeComponents[route.meta.layout];
	return seeComponents.base
})


watch( route,
	() => {
		if(route.meta){
			document.title = `Cropper - ${ route.meta.title ?? 'campus' }`
		}else{
			document.title = 'Cropper'
		}
	},
	{ immediate: true, deep: true }
)

</script>

<style lang="scss">
@import '../src/assets/sass/styles.scss';

</style>