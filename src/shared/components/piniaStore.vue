<template>
	<section class="mx-auto my-5 w-[80%]" >
		esta es la vista donde vamos a estar utilizando pinia en la aplicacion.
		<button class="py-2 px-4 rounded-md bg-slate-400 text-white" @click="increment">Agregar valores</button>
		<button class="py-2 px-4 rounded-md bg-slate-400 text-white ms-2" @click="replace">Replace number</button>
		<p class="text-center text-xl font-bold mt-8">{{ dataStore.counter }}</p>
		<p class="text-center text-xl font-bold mt-8">{{ doubleCount(5) }}</p>
		<p>Data a traves de un aciton {{  }}</p>
	</section>
</template>

<script setup>
import { watch } from 'vue'
import useCounter from '../store/counter.js'
import { storeToRefs } from 'pinia';

const dataStore  = storeToRefs(useCounter())
const { doubleCount }  = storeToRefs(useCounter())

function increment() {
	dataStore.counter.value++
}

function replace(){
	useCounter().replaceNumber(509)
}

watch(() => dataStore.counter.value ,
	(newValue) => {
		console.log('Esto se ejecuta al cambiar el valor: ', newValue);
	},
)

</script>