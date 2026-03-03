const leia = require("readline-sync");

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;

salarioBruto = leia.questionInt("Digite o valor do Salário Bruto: ");
adicionalNoturno = leia.questionInt("Digite o valor do Adicional Noturno: ");
horasExtras = leia.questionInt("Digite o valor das horas extras: ");
descontos = leia.questionInt("Digite o valor dos Descontos: ");

console.log(`\nSalario Bruto: ${salarioBruto} \nAdicional Noturno: ${adicionalNoturno} \nHoras Extras: ${horasExtras} \nDescontos: ${descontos}`);

salarioLiquido = (salarioBruto+adicionalNoturno+(horasExtras*5)-descontos);

console.log("Salário Líquido: " + salarioLiquido);