function calcularImc(peso, altura){
    return peso/(altura*altura);
}

function classificarImc(imc){
    if (imc < 18.5){
        return 'Abaixo do peso';
    }else if (imc >= 18.5 && imc <25){
        return 'Peso normal';
    }else if (imc >=25 && imc <30){
        return 'Acima do peso';
    }else if (imc >=30 && imc < 40){
        return 'Obeso';
    }else{
        return 'Obesidade grave';
    }
}

//FUNÇÃO PRINCIPAL DO CÓDIGO.
//Pode se chamar 'main' e logo após a função ela deve ser chamada "main();"
//ou ela não tem nome e é chamada imediatamente ao terminar a função "();"
(function (){
    const peso = 70;
    const altura = 1.70;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();