// Maps // Exemplos da aula do Rincko Dev 

const usuarios = new Map();

usuarios.set("Victor", {idade: 28, moedas: 325});
usuarios.set("Inês", {idade: 59, moedas: 100000});
usuarios.set("Victoria", {idade: 20, moedas: 100});

console.log(usuarios);

console.log(usuarios.get("Victor"));

for(const [chave, {idade, moedas}] of usuarios){
    console.log(`${chave} tem essas informações: ${idade} anos e ${moedas} Reais no banco`);
}

