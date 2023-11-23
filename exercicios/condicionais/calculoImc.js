const comecoTexto = "O seu imc é: "
let peso = 70;
let altura = 1.70;
const imc = ((peso)/Math.pow(altura, 2)).toFixed(2);

if(imc < 18.5){
    console.log(comecoTexto + imc + ' e você está abaixo do peso');
}else if(imc>=18.5 && imc<25){
    console.log(comecoTexto + imc + ' e o seu peso está normal');
}else if(imc>=25 && imc<30){
    console.log(comecoTexto + imc + ' e você está acima do peso');
}else if(imc>=30 && imc<40){
    console.log(comecoTexto + imc + ' e você está obeso');
}else{
    console.log(comecoTexto + imc +' e voceê está com obesidade grave');
}