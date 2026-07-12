// SET

// Criando um Set vazio
const meuSet = new Set();

// Criando um Set com valores (os números repetidos serão ignorados)
const numerosUnicos = new Set([1,2,2,3,4,4,5]);
console.log(numerosUnicos); // Saída: set(5) {1,2,3,4,5}

// Métodos e Propriedades Principais

// .add(valor): Adiciona um novo valor ao Set. Se o valor já existir, ele é ignorado
numerosUnicos.add(6);

console.log(numerosUnicos);

// .delete(valor): Remove um valor específico. Retorna true se o valor estava presente e foi removido, ou false se não for encontrado
numerosUnicos.delete(5);

console.log(numerosUnicos);

// .has(valor): Verifica se um valor existe no Set. Retorna true ou false.
console.log(numerosUnicos.has(1)); // Saída: true

// .size: Propriedade (não é um método) que retorna todos os elementos do set
console.log(numerosUnicos.size);

// .clear(): Remove todos os elementos do Set.
numerosUnicos.clear();
console.log(numerosUnicos); // Saída: Set(0) {}



