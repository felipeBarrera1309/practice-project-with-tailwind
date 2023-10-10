<template>
	<section class="mx-auto my-5 w-[80%]" >
		esta es la vista donde vamos a estar utilizando pinia en la aplicacion.
		<button class="py-2 px-4 rounded-md bg-slate-400 text-white" @click="increment">Agregar valores</button>
		<button class="py-2 px-4 rounded-md bg-slate-400 text-white ms-2" @click="restablecer">Restablecer</button>
		<p class="text-center text-xl font-bold mt-8">{{ counter }}</p>
		<p class="text-center text-xl font-bold mt-8">{{ doubleCount(5) }}</p>
	</section>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import useCounter from '../store/counter.js'
import { storeToRefs } from 'pinia';

const { counter }  = storeToRefs(useCounter())
const { doubleCount }  = storeToRefs(useCounter())

function increment() {
	counter.value++
	console.log('Estos son los valores: ', doubleCount.value(5));
}

function restablecer(){

}

watch(() => counter.value ,
	(newValue) => {
		console.log('Esto se ejecuta al cambiar el valor: ', newValue);
	},
)

</script>