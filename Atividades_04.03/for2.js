import leia from 'readline-sync';

let pares = 0;
let impares = 0;

for(let contador = 1; contador <=10; contador++) {
    let numero = leia.questionInt("Digite um número: ");

    if (numero % 2 == 0){
        pares++; 

    }else{
        impares++;        
    } 
}

console.log(`Na lista existem ${pares} números pares e ${impares} ímpares`);
