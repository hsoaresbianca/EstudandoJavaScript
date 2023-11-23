function escrevaMeuNome(nome){
    return nome;
}

function verificarIdade(idade){
    if (idade>=18){
        return 'Maior de idade';
    }else{
        return 'Menor de idade';
    }
}

(function (){
    console.log(escrevaMeuNome('Bianca'));
    console.log(verificarIdade(25));
})();