import leia from 'readline-sync';

let numeroA;
let numeroB;
let numeroC;
let soma;

numeroA = leia.questionInt("Digite o número A: ");
numeroB = leia.questionInt("Digite o número B: ");
numeroC = leia.questionInt("Digite o número C: ");

soma = numeroA + numeroB;
console.log(soma);

if (soma > numeroC){
    console.log("A soma de A+B é maior que: " + numeroC);

}else if (soma < numeroC){
    console.log("A soma de A+B é menor que: " + numeroC);

}else  { 
    console.log("A soma de A+B é igual que: " + numeroC);
}

