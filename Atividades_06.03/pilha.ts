import readlinesync = require('readline-sync');

import { Stack } from './stack'; 

const pilha = new Stack<string>();

let opcao: number;


do {
    console.log('\n\n--------------MENU DE OPÇÕEs----------------');
    console.log("1: Adicionar um Livro na pilha");
    console.log("2: Listar todos os livros da pilha");
    console.log("3: Remover um livro da pilha");
    console.log("0: Sair do programa");
    console.log("____________________________________________");

opcao = readlinesync.questionInt("\nDigite a opção desejada: ");

switch (opcao) {
    case 1:
    let livro = readlinesync.question("\n\n Digite o nome do livro que dejasa adicionar: ");
    pilha.push(livro);
    console.log("\nPilha\n");
    pilha.printStack(); 
    console.log(`\nLivro ${livro} adicionado!`);
    break;

    case 2:
        if (pilha.isEmpty() ) {
            console.log("\nA pilha está vazia!");
            
        }else{
            console.log("\nLista de livros na pilha: \n");
            pilha.printStack();
        }
        break;


    case 3:
        if (pilha.isEmpty()) {
            console.log("\nA pilha está vazia!");

        }else{
            pilha.pop();
            console.log("\nPilha: \n");
            pilha.printStack();
            console.log("\nLivro Removido da Pilha!");
        }
        break;
}


}while(opcao !== 0);

console.log("\nPrograma Finalizado");