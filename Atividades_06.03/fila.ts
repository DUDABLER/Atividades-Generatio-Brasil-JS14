import * as readlinesync from 'readline-sync';

import { Queue } from './queue'; 

const fila = new Queue<string>();

let opcao: number;


do {
    console.log('\n\n--------------MENU DE OPÇÕEs----------------');
    console.log("1: Adicionar um novo Cliente na fila");
    console.log("2: Listar todos os Clientes na fila");
    console.log("3: Chamar (retirar) uma pessoa da fila");
    console.log("0: O programa deve ser finalizado");
    console.log("____________________________________________");

opcao = readlinesync.questionInt("\nDigite a opção desejada: ");

switch (opcao) {
    case 1:
    let cliente = readlinesync.question("\n\n Digite o nome do Cliente que dejasa adicionar: ");
    fila.enqueue(cliente);
    console.log("\nFila\n");
    fila.printQueue(); 
    console.log(`\nCliente ${cliente} adicionado!`);
    break;

    case 2:
        if (fila.isEmpty() ) {
            console.log("\nA Fila está vazia!");
            
        }else{
            console.log("\nLista de Clientes na fila: \n");
            fila.printQueue();
        }
        break;


    case 3:
        if (fila.isEmpty()) {
            console.log("\nA fila está vazia!");

        }else{
            fila.dequeue();
            console.log("\nFila: \n");
            fila.printQueue();
            console.log("\nPessoa Removida da Fila!");
        }
        break;
}


}while(opcao !== 0);

console.log("\nPrograma Finalizado");