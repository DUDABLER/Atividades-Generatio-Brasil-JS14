import leia from 'readline-sync';

let numero;
let positivos = 0;

do {
    numero = leia.questionInt("Digite um numero inteiro: ");
    
    if (numero > 0){
        positivos = positivos + numero;
    }

} while (numero !== 0)

console.log("A soma dos números positivos é: " + positivos);

