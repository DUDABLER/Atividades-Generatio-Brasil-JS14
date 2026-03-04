import leia from 'readline-sync';

let nome;
let codigoCargo;
let salario;
let novoSalario;
let cargo = " ";
let reajuste; 

nome = leia.question("Digite seu nome: ");
codigoCargo = leia.questionInt("Digite o código do seu cargo (de 1 a 6); ");
salario = leia.questionFloat("Digite o seu salário: ");

//aquí o percentual do reajuste vai em formato pronto para multiplicar ex. 10% = 0.10
switch (codigoCargo) {
    case 1: 
        cargo = "Gerente";
        reajuste = 0.10;
        break;

    case 2:
        cargo = "Vendedor";
        reajuste = 0.07;
        break;

    case 3:
        cargo = "Supervisor";
        reajuste = 0.09;
        break;

    case 4:
        cargo = "Motorista";
        reajuste = 0.06;
        break;

    case 5:
        cargo = "Estoquista";
        reajuste = 0.05;
        break;

    case 6:
        cargo = "Técnico em TI";
        reajuste = 0.08;
        break;
    
    default:
        console.log("Código do Cargo inválido!");

}

novoSalario = salario + (reajuste * salario);

console.log(`\n Nome do Colaborador: ${nome} \n Cargo: ${cargo}\n Novo Slário Reajustado: ${novoSalario}`);