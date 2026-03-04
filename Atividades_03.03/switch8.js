import leia from 'readline-sync';

let saldo = 1000.00;
let operacao;
let valor;

console.log("1: Saldo | 2: Saque | 3: Depósito");

operacao = leia.questionInt("Selecione uma opção entre 1 e 3: ");


switch (operacao) {
    case 1:
        console.log("Saldo: R$ " + saldo);
        break;

    case 2:
        valor = leia.questionFloat("Valor: ");
        console.log("R$" + valor);
        
        if (valor <= saldo) {
            saldo = saldo - valor;
            console.log("Novo Saldo: R$ " + saldo);
        } else {
            console.log("Saldo Insuficiente!");
        }
        break;

    case 3: 
        valor = leia.questionFloat("Valor: ");
        console.log("Operação selecionada: Depósito");
        saldo = saldo + valor;
        console.log("Novo Saldo: R$ " + saldo);
        break;

    default:
        console.log("Operação Inválida!");
}