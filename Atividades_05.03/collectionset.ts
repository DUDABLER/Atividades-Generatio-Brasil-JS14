import readlinesync = require('readline-sync');

const numeros = new Set<number>();

for (let i = 0; i < 10; i++){
    let numero = readlinesync.questionInt("Digite um número de 1 a 10 sem \nrepetir qualquer um dos outros já digitados: "); //é bom deixar tudo claro assim o usuario não tenta fazer algo errado mesmo sendo o Set para não repetir
    numeros.add(numero);
}

console.log("\n\nLista de dados da Collectio Set: ");

for (let num of numeros) {
    console.log(num);
}
