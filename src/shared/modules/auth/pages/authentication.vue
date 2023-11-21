<template>
    <section class="flex flex-col items- justify-center m-auto w-[800px] h-screen">
        <Form @submit="sendForm" class="flex flex-col items-center gap-y-6">
            <Field
                v-slot="{ field, errorMessage }"
                name="username"
                type="text"
                rules="required"
                class="h-[40px] w-[300px] border-2 rounded-md border-violet-700"
            >
                <el-input type="email" v-model="writeEmail" v-bind="field" placeholder="Username" class="max-w-[300px] h-[40px]" />
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
import { useRouter } from 'vue-router'
import AuthService from '../../../../services/AuthService.js'
import { ElNotification } from 'element-plus'

const writeEmail = ref('')
const writePassword = ref('')
const router = useRouter()


function sendForm(){
	console.log('Este es el que inicia en el login');
	router.push({ name: 'main' })
	// const auth = new AuthService()
	// const success = await auth.setLogin(writeEmail.value, writePassword.value)
	// if(success){
    //     $cookies.set('token', auth.getTokenService())
	// 	ElNotification({
    //         title: 'Exito',
    //         message: 'Datos correctos',
    //         type: 'success'
    //     })
	// }else{
	// 	ElNotification({
    //         title: 'Error',
    //         message: 'Datos incorrectos',
    //         type: 'error'
    //     })
	// }
}

</script>