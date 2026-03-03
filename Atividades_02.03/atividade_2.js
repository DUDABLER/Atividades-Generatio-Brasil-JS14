const leia = require("readline-sync");

let nota1;
let nota2;
let nota3;
let nota4; 

nota1 = leia.questionFloat("Digite a nota 1: ");
nota2 = leia.questionFloat("Digite a nota 2: ");
nota3 = leia.questionFloat("Digite a nota 3: ");
nota4 = leia.questionFloat("Digite a nota 4: ");


console.log(`\nNota 1: ${nota1} \nNota 2: ${nota2} \nNota 2: ${nota3} \nNota 2: ${nota4}`);

Media = (nota1+nota2+nota3+nota4)/4;

console.log("Média Final: " + Media);