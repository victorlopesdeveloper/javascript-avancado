// Métodos estáticos (static)


class Calculadora{
    // Método estático
    static somar(n1, n2){
        return n1 + n2;
    }
    // Outro método estático
    static filtrarNumerosPares(array){
        return array.filter(num => num % 2 === 0);
    }
}

// JEITO ERRADO: Tentar a partir de um objeto criado com "new"
// const minhaCalculara = new Calculadora()
// console.log(minhaCalculadora.somar(5,10)); // isso vai da um erro (is not a function)

//Jeito Certo: chamar direto  pelo nome da classe
const resultado = Calculadora.somar(5,10);
console.log(resultado); // Saída: 15

const pares = Calculadora.filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(pares); // Saída: 2, 4, 6, 8

