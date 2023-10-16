<template>
    <section class="flex flex-col items- justify-center m-auto w-[800px] h-screen">
        <Form @submit="sendForm" class="flex flex-col items-center gap-y-6">
            <Field
                v-slot="{ field, errorMessage }"
                name="email"
                type="email"
                rules="required|email"
                class="h-[40px] w-[300px] border-2 rounded-md border-violet-700"
            >
                <el-input type="email" v-model="writeEmail" v-bind="field" placeholder="Correo electrónico" class="max-w-[300px] h-[40px]" />
                <span class="text-red-500">{{ errorMessage }}</span>
            </Field>

            <Field
                v-slot="{ field, errorMessage }"
                rules="required"
                name="password"
                type="password"
                class="h-[40px] w-[300px] border-2 rounded-md border-violet-700"
            >
                <el-input type="password" v-model="writePassword" v-bind="field" placeholder="Contraseña" show-password class="max-w-[300px] h-[40px]" />
                <span class="text-red-500">{{ errorMessage }}</span>
            </Field>
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