let valorOriginal = 100;
let formaDePagamento = 4;

if (formaDePagamento === 1){
    console.log(valorOriginal-(valorOriginal*0.1));
}else if (formaDePagamento === 2){
    console.log(valorOriginal-(valorOriginal*0.15));
}else if (formaDePagamento === 3){
    console.log(valorOriginal);
}else {
    console.log(valorOriginal+(valorOriginal*0.1));
}