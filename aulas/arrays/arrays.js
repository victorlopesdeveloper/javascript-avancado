// ARRAYS
// a contagem dos elementos de um array começa em 0

const numeros = [10, 30, 50, 70, 100];

console.log(numeros);
console.log(numeros[0]);

//-------------------------------------------------------------------------------------------------------------------

const nomes = ["victor", "sybelle", "davi", "sara"];

console.log(nomes);
console.log(nomes[3]);

//------------------------------------------------------------------------------------------------------------------

console.log(nomes.length); // O .length SERVE PARA VER QUAL O TAMANHO DO ARRAY

//------------------------------------------------------------------------------------------------------------------

// MÉTODOS ARRAY
// push() -> ADICIONA UM ELEMENTO NO FINAL DO ARRAY // MAIS COMUM DE SER USADO
// pop() -> REMOVE UM ELEMENTO NO FINAL DO ARRAY // MAIS COMUM DE SER USADO
// unshift() -> ADICIONA UM ITEM NO INÍCIO DO ARRAY
// shift() -> REMOVE UM ITEM NO INÍCIO DO ARRAY

numeros.push(101);// ADICIONANDO UM ELEMENTO NO FINAL DO ARRAY
console.log(numeros);


nomes.unshift("ines"); // ADICIONANDO UM ELEMENTO NO INÍCIO DA ARRAY
console.log(nomes);


nomes.pop(); // RETIRANDO O ULTIMO ELEMENTO DA ARRAY
console.log(nomes);

numeros.shift(); // RETIRANDO O PRIMEIRO ELEMENTO DO ARRAY
console.log(numeros);

//----------------------------------------------------------------------------------------------------------------

nomes[1] = 'Não é mais victor'; // ALTEREI O VALOR DO ELEMENTO NO INDICE 1 DENTRO DA ARRAY
console.log(nomes);

nomes[4] = "Victor"; //ADICIONANDO MAIS UM ELEMENTO NO INDICE 4 NO ARRAY // NÃO É RECOMENDADO, USE OS MÉTODOS
console.log(nomes);

// UM ARRAY É HETEROGÊNEO PODE RECEBER DIVERSOS TIPOS DE VALORES

let meuArray = [28, "Victor", true];