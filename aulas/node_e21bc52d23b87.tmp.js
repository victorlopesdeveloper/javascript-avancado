// LAÇO DE REPETIÇÃO FOR

/* SINTAXE:
    for(inicialização; condição; execução){}
*/

//------------------------------------------------------------------------------------------------------

// INCREMENTANDO VALOR NO INDICE
/*
for(let i = 0; i <= 10; i++){
    setTimeout(() => console.log(i), 200 * i); 
}   // o setTimeout está sendo usado para fazer com que retarde a impressão dos numeros
*/

//------------------------------------------------------------------------------------------------------

// DECREMENTANDO O VALOR DO INDICE
/*
const numeros = [];

for(let i = 10; i >= 0; i--){
    numeros.push(i);
}

console.log(numeros);
*/

//------------------------------------------------------------------------------------------------------

/* 
 O LAÇO FOR ESTA PERCORRENDO CADA INDICE DO ARRAY, ENQUANTO FOR MENOR QUE O TAMANHO DA ARRAY
 E PRINTANDO TODA VEZ QUE PASSAR PELO INDICE.

let frutas = ["maçã", "banana", "pera", "uva", "melancia", "melão"];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
*/

//------------------------------------------------------------------------------------------------------
// PROGRAMA QUE CONTA QUANTAS VEZES A LETRA APARECE NO TEXTO
/*
let texto = "Victor lopes Moreira";
let letra = "o";
let vezes = 0;

for(const caracteres of texto.toLowerCase()){// o método toLowerCase()
    if(caracteres === letra){
        vezes++
    }
}
console.log(`A letra ${letra} apareceu ${vezes} vezes no seu nome.`);
*/

//------------------------------------------------------------------------------------------------------

const r1 =  require("node:readline");
const prompt = r1.createInterface({
    input: process.stdin, output: process.stdout
})

prompt.question("Qual número você deseja ver a tabuada", resposta =>{
    const numero = Number.parseInt(resposta);

    if(Number.isNaN(numero)){
        console.log("Número digitado é inválido!")
    }else{
        console.log(`O número digitado é ${number}`);

        for(let i = 1; i <= 10; i++){
            console.log(`O número ${numero} x ${i} é igual á ${numero * i}`);
        }
    }

})