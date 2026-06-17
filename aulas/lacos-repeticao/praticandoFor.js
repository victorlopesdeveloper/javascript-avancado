// Praticando o uso do for

/* 

Use um for para exibir os números de 1 até 20 no console.

for(let i = 1; i < 20; i++){
    console.log(`O contador está em ${i}`);
}

*/

//---------------------------------------------------------------------------------------------------------------------------

/* 

Use um for para exibir os números de 20 até 1 em ordem decrescente.

for(let i = 20; i > 0; i--){
    console.log(`O contador está em ${i}`);
}

*/

//---------------------------------------------------------------------------------------------------------------------------

/* 

Mostre apenas os números pares entre 1 e 50.

for(let i = 1; i <= 50; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

*/

//---------------------------------------------------------------------------------------------------------------------------

/*

Mostre apenas os números ímpares entre 1 e 50.

for(let i = 1; i <= 50; i++){
    if(i % 2 === 1){
    console.log(i)}
}

*/

//---------------------------------------------------------------------------------------------------------------------------

/*

Conte quantos números existem entre 1 e 100.

let contador = 0;

for(let i = 1; i <= 100; i++){
    contador++;
    
}
console.log(contador);

*/

//---------------------------------------------------------------------------------------------------------------------------

/*
Some todos os números de 1 até 100.


let contador = 0;

for(let i = 1; i <= 100; i++){
    contador = i + contador;
}

console.log(contador);

*/

//---------------------------------------------------------------------------------------------------------------------------

/*
Calcule a soma apenas dos números pares entre 1 e 100.

let contador = 0;

for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        contador = i + contador;
    }
}
console.log(contador);

*/

//---------------------------------------------------------------------------------------------------------------------------

/*
Calcule a soma apenas dos números ímpares entre 1 e 100.


let contador = 0;

for(let i = 1; i <= 100; i++){
    if(i % 2 === 1){
        contador = i + contador;
    }
}
console.log(contador);
*/

//---------------------------------------------------------------------------------------------------------------------------

/*
Multiplique todos os números de 1 até 5 e mostre o resultado final.

let contador = 1;

for(let i = 1; i <= 5; i++){
    contador = contador * i;
}
console.log(contador)
*/

//---------------------------------------------------------------------------------------------------------------------------

/*
Crie a tabuada do número 8.

let multiplicador = 8;

for(let i = 1; i <= 10; i++){
    let total = i * multiplicador;
    console.log(`${multiplicador} x ${i} = ${total}`);
}

*/

//---------------------------------------------------------------------------------------------------------------------------

/*
Crie a tabuada de qualquer número digitado pelo usuário.

const r1 =  require("node:readline");
const prompt = r1.createInterface({
    input: process.stdin, output: process.stdout
})

prompt.question("Você quer a tabuada de qual número? ", resposta =>{
    let multiplicador = Number.parseInt(resposta);

    if(Number.isNaN(multiplicador)){
        console.log("O número não é válido!")
    }else{
        for(let i = 1; i <= 10; i++){
            let resultado = multiplicador * i;
            setTimeout(() => console.log(`${multiplicador} x ${i} = ${resultado}`), 200 * i)
        }
    }
    prompt.close()
})

*/

//---------------------------------------------------------------------------------------------------------------------------

/*
Mostre as tabuadas do 1 ao 10.


for(let tabuada = 1; tabuada <= 10; tabuada++){
    for(let multiplicador = 1; multiplicador <= 10; multiplicador++){
        let resultado = tabuada * multiplicador;
        console.log(`${tabuada} x ${multiplicador} = ${resultado}`);
    }
}

*/
/*

Percorra a palavra "JavaScript" e mostre cada letra em uma linha.

let linguagem = "javascript";

for(let i = 0; i < linguagem.length; i++){
    console.log(linguagem[i]);
}
*/

/*
Conte quantas letras existem na palavra "Programador".
*/

let palavra = "programador";
let contador = 0;

for(let i = 0; i < palavra.length; i++){
    contador++;
    
}
console.log(`A palavra programador tem ${contador} letras`);
