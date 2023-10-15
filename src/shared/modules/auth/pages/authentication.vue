<template>
    <section class="flex flex-col items- justify-center m-auto w-[800px] h-screen">
        <Form @submit="sendForm" class="flex flex-col items-center gap-y-6">
            <el-input v-model="writeEmail" placeholder="Correo electrónico" class="max-w-[300px] h-[40px]" />
            <Field name="email" type="email" class="border-2 rounded-md border-violet-700" />
            <el-input type="password" v-model="writePassword" placeholder="Contraseña" show-password class="max-w-[300px] h-[40px]" />
            <Field name="password" type="password" class="border-2 rounded-md border-violet-700" />
            <button type="submit" class="bg-blue-600 text-white px-4 py-1 rounded-md">Ingresar</button>
        </Form>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { Form, Field } from 'vee-validate'

const writeEmail = ref('')
const writePassword = ref('')

function sendForm(value){
    console.log('Este es el valor del parametro que me envia vee-validate: ', value);
}

</script>