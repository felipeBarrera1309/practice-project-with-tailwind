import { ref } from 'vue'

class AuthService {
    // el constructor es para definir las variables.
    constructor(){
        this.getToken = ref('')
    }
    // aqui abajo van los metodos los cuales cuando se ejecutan van a cambiar el valor de las variables que
    // estan en el constructor.
    // en pinia esta funcion la vemos como los getters.
    getTokenService(){
        return this.getToken;
    }

    // ahora seguimos con las actions de pinia, para mutar el estado de la variable que esta en el
    // constructor.
    async setLogin(email, password){
        try{

        }catch(error){
            console.log('Este es el error que atrapa la funcion asincrona: ', error);
        }
    }
}