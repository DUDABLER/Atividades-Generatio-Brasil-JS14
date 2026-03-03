const leia = require("readline-sync");

let salario; 
let abono;
let novoSalario;

salario = leia.questionFloat("Digite o valor do salário: ");
abono = leia.questionFloat("Digite o abono: ");


console.log("Salario: " + salario);

console.log("Abono: " + abono);

novoSalario = salario + abono;

console.log("Novo Salário: " + novoSalario);




