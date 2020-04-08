// programa para calcular aposentadoria
const nome = 'monica'
const idade = 47
const sexo = 'F'
const contribuicao = 21

const aposentadoria = idade + contribuicao

if (sexo === 'F'){
    if (aposentadoria >= 85){
        console.log('Voce pode se aposentar')
    }else{
        console.log('voce ainda nao pode se aposentar')
    }
}else {
    if (aposentadoria >=95){
        console.log('Voce pode se aposentar')    
    }else{
        console.log('Voce ainda nao pode se aposentar')
    }
}

