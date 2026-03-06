import readlinesync = require('readline-sync');

// azul, verde, amarelo, branco, laranja

const cores : Array<string> = [];

for(let i = 0; i < 5; i++){
    const corDesejada = readlinesync.question("Por favor digite a cor desejada: ");
    cores.push(corDesejada);

}

console.log("\n Listar todas as cores: ");
for (let cor of cores) {
    console.log(cor);
}

cores.sort();

console.log("\nCores ordenadas: ");
for(let cor of cores) {
    console.log(cor);
}