import leia from 'readline-sync';

let backend = 0;
//let frontend;
//let mobile;
//let fullstack;

let mulherFront = 0;
let hommenMobile40 = 0;
let NBfullStack30 = 0;


let totalPessoas = 0;
let idades = 0;

let continuar = "s";
//let contador = 0;

while(continuar === "s") {
    let idade = leia.questionInt("Por favor digite a sua idade: ");
    console.log("|1.Mulher Cis| 2.Hommen Cis| 3.Não Binario | 4.Mulher Trans | 5.Hommen Trans | 6. Outros |");
    let idGen = leia.questionInt("Selecione um número da lista (1 - 6) com o qual você identifica o seu género: ");
    console.log("1.Back-end  | 2.Front-end  | 3. Mobile | 4.Full Stack|");
    let dev = leia.questionInt("Que tipo de dev você é? \n Selecione um numero da lista (1-4) ");
    
    totalPessoas++;
    idades = idades + idade; 

    if (dev == 1) {
        backend++;

    }

    if ((idGen === 1 || idGen === 4) && dev === 2) {
        mulherFront++;
    }

    if ((idGen === 2 || idGen === 4) && dev === 3 && idade > 40){
        hommenMobile40++;
    }

    if (idGen === 3 && dev === 4 && idade < 30){
        NBfullStack30++;
    }

    continuar = leia.question("Deseja continuar a pesquisa com outro funcionário (s/n)? ")
}

let media = idades / totalPessoas

console.log(`Número de pessoas desenvolvedoras Backend: ${backend}`);
console.log(`Número de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulherFront}`);
console.log(`número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${hommenMobile40}`);
console.log(`número de Não Binários desenvolvedores FullStack menores de 30 anos: ${NBfullStack30}`);
console.log(`número total de pessoas que responderam à pesquisa: ${totalPessoas}`);
console.log(`média de idade das pessoas que responderam à pesquisa: ${media}`);