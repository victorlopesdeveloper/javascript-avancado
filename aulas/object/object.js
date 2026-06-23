// OBJECT (OBJETO)
// SINTAXE -> const objeto = {nome: "Victor", idade: 28, nacionalidade: 'Brasil};

const usuario = {
    nome: 'Victor',
    idade: 28,
    nacionalidade: 'Brasileiro',
    cidade: 'Triunfo',
    pai: 'José',
    mae: 'Inês',
    saudar(){
        console.log(`Seja bem vindo a ${this.cidade}, ${this.nome}!`)
    }
}

usuario.endereco = "José Claudino de Paula"; // adicionando uma propriedade dentro do objeto
console.log(usuario.endereco); // consultando um propriedade dentro do objeto usando o .
console.log(usuario["cidade"]); // consultando um propriedade dentro do objeto usando o colchetes e o nome da propriedade

console.log(usuario.saudar());

// PERCORRENDO TODAS AS PROPRIEDADES DO OBJETO
for(const propriedade in usuario){
    console.log(propriedade);
}

//------------------------------------------------------------------------------------------------------------
