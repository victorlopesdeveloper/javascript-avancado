// OPERADORES DE COMPARAÇÃO

// >   Maior que 
console.log(50 > 30); // res: true (pois 50 é um numero maior que 30)
console.log(50 > 80); // res: false (pois 50 não é um numero maior que 30, é menor)
console.log(50 > 50); // res: false (pois 50 não é um numero maior que 50, é igual)

// <   Menor que
console.log(30 < 50); // res: true (pois 30 é um numero menor do que 50)
console.log(30 < 10); // res: false (pois 30 não é um numero menor do que 10)
console.log(30 < 30); // res: fakse (pois 30 é um numero igual a 30)

// >=  Maior ou igual a
console.log(30 >= 25); // res: true (pois 30 é um numero maior que 25)
console.log(30 >= 30); // res: true (pois 30 não é maior que 30, porém é igual)
console.log(30 >= 35); // res: false (pois 30 nem é maior nem é igual a 35)

// <=  Menor ou igual a
console.log(30 <= 35); // res: true (pois 30 é menor que 35)
console.log(30 <= 30); // res: true (pois 30 não é menor que 30 porém é igual)
console.log(30 <= 25); // res: false (pois 30 não é nem menor, nem igual a 25)

// ==  Igual a
console.log(10 == 10);   // res: true
console.log(10 == '10'); // res: true (pois dois iguais apenas compara os valores e não os tipos)
console.log(10 == 9);    // res: false (pois os valores são diferentes)
console.log('Victor' == 'Victor'); // res: true (pois as duas strings são iguais)
console.log('Victor' == 'victor'); // res: false (pois as strings são diferentes)

let nome1 = 100;
let nome2 = '100';
console.log(nome1 == nome2); // res: true (pois as duas variáveis por mais que sejam de tipos diferentes, seus valores são iguais)

// === Estritamente igual a
console.log(10 === 10); // res: true (pois os dois têm os mesmos valores e são do mesmo tipo(number))
console.log(10 === '10'); //res: false (pois os dois valores são iguais porém são tipos diferentes, o primeiro é number e o segundo e uma string)
console.log('Victor' === 'Victor'); //res: true (pois são duas strings com os valores idênticos) 

// !=  Diferente de
console.log(10 != 9); // res: true (pois o número 10 é diferente de 9)
console.log(10 != '10'); // res: false (pois os dois valores são 10 (mesmo sendo de tipos diferentes), então não são diferentes)

// !== Estritamente diferente de
console.log(10 !== 10); // res: false (pois 10 não é diferente de 10)
console.log(10 !== '10'); // res: true (pois os valores são iguais, porém os tipos são diferentes)

let acao1 = 'ative';
let acao2 = 'desative';

console.log(acao1 !== acao2); // res: true (pois são duas strings com valores diferentes)