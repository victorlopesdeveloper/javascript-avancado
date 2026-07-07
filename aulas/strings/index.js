// STRINGS

// '' "" ``

const nome = "Victor Lopes";
const nome2 = " Maria Victoria ";
const texto = "Eu sou um desenvolvedor Web, que uso o JavaScript como linguagem de programação";


console.log(`O nome do usuário é: ${nome}`);

const minusculo = nome.toLowerCase(); // método que converte todas as letras em minúsculas

console.log(minusculo);

const maiuscula = nome.toUpperCase(); // método que converte todas as letras em maiúsculas

console.log(maiuscula);

console.log(nome.slice(5)); // método que remove caracteres da strings sendo que o índice serve para ditar quantos caracteres serão removidos

console.log(nome2);
console.log(nome2.trim()); // método que remove os espaços vazios no início da string e no final da string

const novoNome = nome.replace("Victor", "Jose");
// O método replace() modifica algum conteudo que esteja na string por um novo sem modificar a variável
console.log(novoNome);

console.log(nome2.includes("Maria")); 
// O método includes() verifica se a tem algum caractere ou texto dentro da string, você passa dentro do includes qual texto você quer verificar


console.log(texto.indexOf("JavaScript")); // retorna 39
// O método indexOf() procura pela palavra "JavaScript" e retorna a posição da primeira caractere do texto que você procurou

console.log(texto.indexOf("Python")); // retorna -1 pois não existe essa palavra dentro da string

console.log(nome.startsWith("V")); 
// O método startsWith() verifica se o primeiro caractere da string é a que você passou, se for verdadeiro ele retorna true e so for falso ele retorna false

console.log(nome.endsWith("s"));
// O método endsWith() verifica se o último caractere da string é a que você passou, se for verdadeiro ele retorna true e so for falso ele retorna false

console.log(nome.charAt(0));
// O método charAt() retorna qual caractere está na posição que você passou dentro do método

console.log(nome.split(" "));
console.log(nome.split(""));
// O método split() divide a string em uma lista(array) de sybstrings baseada em um caractere divisor

console.log(nome.length);
// A proprieda length (não é um método, por isso não leva parênteses) que retorna o número total de caracteres

//-------------------------------------------------------------------------------------------------------------------

// o \n serve para quebrar uma linha dentro de um texto, use caso você não esteja usando um Template String
const texto2 = "Victor Lopes \nMoreira";
console.log(texto2);

// O \t serve para da um espaço significa (tab)
const texto3 = "Inês \tMoreira";
console.log(texto3);

// Duas maneira de colocar aspas dentro de uma string

const texto5 = "Meu nome é \"Victor\"";
console.log(texto5);

const texto6 = "Meu nome é 'Inês'";
console.log(texto6);

