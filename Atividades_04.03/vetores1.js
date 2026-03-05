import leia from 'readline-sync';

let vetor = [2, 5, 1,  3, 4, 9, 7, 8, 10, 6];

let numero = leia.questionInt("Digite o número que deseja buscar: ");

let posicao = -1;

for (let contador = 0; contador < 10; contador++) {
    
    if(vetor [contador] === numero){
        posicao = contador;
        break;
    }

}

if(posicao !== -1){
    console.log(`O número ${numero} está na posição: ${posicao}`);
}else{
    console.log(`O número ${numero} não foi encontrado!`)
}
