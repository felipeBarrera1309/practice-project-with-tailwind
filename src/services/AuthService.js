import { ref } from 'vue'

export default class AuthService {
    // el constructor es para definir las variables.
    constructor(){
        this.getToken = ref('')
		this.error = ref('')
    }
    // aqui abajo van los metodos los cuales cuando se ejecutan van a cambiar el valor de las variables que
    // estan en el constructor.
    // en pinia esta funcion la vemos como los getters.
    getTokenService(){
        return this.getToken;
    }

	getError(){
		return this.error;
	}

    // ahora seguimos con las actions de pinia, para mutar el estado de la variable que esta en el
    // constructor.
    async setLogin(email, password){
        try{
			const getData = await fetch('http://localhost:8000/login', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					nombre: email,
					contrasena: password
				})
			})

			const response = await getData.json()

			if('message' in response){
				this.error = 'Ususario incorrecto';
				return false
			}

			this.getToken = response.token;
			return true;

        }catch(error){
            console.log('Este es el error que atrapa la funcion asincrona: ', error);
        }
    }
}