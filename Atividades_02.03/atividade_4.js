const leia = require("readline-sync");

let n1;
let n2;
let n3;
let n4;

n1 = leia.questionFloat("Digite o número 1: ");
n2 = leia.questionFloat("Digite o número 2: ");
n3 = leia.questionFloat("Digite o número 3: ");
n4 = leia.questionFloat("Digite o número 4: ");

let total;

total = (n1*n2)-(n3*n4);

console.log("Total da Diferença: " + total);