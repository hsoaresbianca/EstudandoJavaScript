let notaUm = 4.0;
let notaDois = 4.0;
let notaTres = 4.0;

let mediaNotas = (notaUm+notaDois+notaTres)/3;

if(mediaNotas<5){
    console.log("aluno reprovado")
}
else if(mediaNotas>=5 && mediaNotas<=7){
    console.log("aluno em recuperação")
}
else{
    console.log("aluno aprovado")
}