import leia from 'readline-sync';

let nome;
let idade;
let primeiraVez;

nome = leia.question("Digite o se nome: ");
idade = leia.questionInt("Digite a sua idade: ");
primeiraVez = leia.keyInYN("Primeira vez em doar sangue?");

if(idade >=18 && idade <= 59){
    console.log("Apto para doar sangue!");

}else if (idade >= 60 && idade <= 69 && primeiraVez === false){
    console.log("Apto para doar sangue!");

}else{
    console.log("Não apto para doar sangue");

}