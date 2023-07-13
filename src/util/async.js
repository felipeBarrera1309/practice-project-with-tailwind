export default function getMessage(message){
    return new Promise((resolve, reject) => {
        if(typeof message == 'string'){
            setTimeout(() => {
                resolve(message)
            }, 2000)
        }else{
            reject('Rechazado')
        }
    })
}