<template>
	<Suspense timeout="0">
		<template #default>
			<component :is="components" />
		</template>
		<template #fallback>
			<loading />
		</template>
	</Suspense>
</template>

<script setup>
import { computed, watch, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import loading from './shared/components/loading.vue';
const base = defineAsyncComponent(() => import('./shared/layouts/base.vue'))
const auth = defineAsyncComponent(() => import('./shared/layouts/auth.vue'))

const route = useRoute()

const seeComponents = {
	'base':  base,
	'auth': auth
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