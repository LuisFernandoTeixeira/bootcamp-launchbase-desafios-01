// programa para calcular IMC
const nome = 'luis'
const peso = '60'
const altura = '1.75'
const sexo = 'masculino'

const imc = peso / (altura*altura)

if (imc >= 30){
    console.log('luis esta acima do peso')
}else{
   console.log('luis não esta acima do peso') 
}