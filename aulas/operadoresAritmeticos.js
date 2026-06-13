// OPERADORES ARITMÉTICOS
/*
ADIÇÃO:             +
SUBTRAÇÃO:          -
MULTIPLICAÇÃO:      *
DIVISÃO:            /
MÓDULO(OU RESTO):   %
EXPONENCIAÇÃO:      **

*/

/*
const adicao = 10 + 8; //OPERADOR DE ADIÇÃO
const subtracao = 50 - 20; //OPERADOR DE SUBTRAÇÃO
const multiplicacao = 1000 * 2; //OPERADOR DE MULTIPLICAÇÃO
const divisao = 1000 / 5; //OPERADOR DE DIVISÃO
const resto = 10 % 3; //O RESULTADO É O RESTO DA DIVISÃO 
const exponenciacao = 10 ** 2 //OPERADORE DE EXPONENCIAÇÃO ( DEZ ELEVADO A 2 (10 * 10 = 100))
*/

// APLICANDO DESCONTO NO PRODUTO
const preco = 350;
const porcentagem = 20;

const desconto = (preco * porcentagem)/100;
const precoFinal = preco - desconto;

console.log(`Preço do produto: ${preco}`);
console.log(`Valor do desconto: ${desconto}`);
console.log(`Valor final do produto: ${precoFinal}`);

// VALORES DO SALÁRIO

const salario = 1520

console.log(`Você recebe por mês: ${salario}`);
console.log(`Você recebe por ano: ${salario * 12}`);
console.log(`Você recebe por semana: ${salario / 4}`);
console.log(`Você recebe por dia (4 semanas): ${salario / ( 7 * 4)}`);

// Horas
/*
console.log(`Um minuto têm ${60} segundos`);
console.log(`Uma hora tem ${60 * 60} segundos`);
console.log(`Um dia tem ${60 * 60 * 24} segundos`);
console.log(`Uma semana tem ${60 * 60 * 24 * 7} segundos`);
console.log(`Um mês tem ${60 * 60 * 24 * 30} segundos`);
console.log(`Um ano tem ${60 * 60 * 24 * 365} segundos`);
*/

// PODEMOS FAZER A MESMA COISA USANDO VARIÁVEIS
const minuto = 60;
const hora = minuto * 60;
const dia = hora * 24;
const semana = dia * 7;
const mes = dia * 30;
const ano = dia * 365;

console.log(`Um minuto tem ${minuto} segundos`);
console.log(`Uma hora tem ${hora} segundos`);
console.log(`Uma dia tem ${dia} segundos`);
console.log(`Uma semana tem ${semana} segundos`);
console.log(`Um mês tem ${mes} segundos`);
console.log(`Um ano tem ${ano} segundos`);