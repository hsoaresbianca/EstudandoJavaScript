function calcularValorFinal(valorOriginal, formaDePagamento){
    if (formaDePagamento === 1){
        return (valorOriginal-(valorOriginal*0.1));
    }else if (formaDePagamento === 2){
        return (valorOriginal-(valorOriginal*0.15));
    }else if (formaDePagamento === 3){
        return (valorOriginal);
    }else {
        return (valorOriginal+(valorOriginal*0.1));
    }
}

(function (){
    console.log(calcularValorFinal(100, 1));
})();