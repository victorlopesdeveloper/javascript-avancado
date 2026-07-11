// CLASSES (CONSTRUCTOR, GET, SET)

class Pessoa {
    #nome;
    #idade;
    #dinheiro = 0;
    constructor(nome, idade){
        this.#nome = nome;
        this.#idade = idade;
    }
    intro(){
        return `Meu nome é ${this.#nome} e tenho ${this.#idade} anos`
    }
    getName(){
        return this.#nome;
    }
    getIdade(){
        return this.#idade;
    }
    getDinheiro(){
        return this.#dinheiro;
    }
    setDinheiro(value){
        this.#dinheiro = value;
    }
    incrementeDinheiro(value){
        this.setDinheiro(this.#dinheiro + value);
    }
}
const pessoa = new Pessoa("Victor", 28);
const pessoa2 = new Pessoa("Victoria", 20);
pessoa.incrementeDinheiro(100);
pessoa.incrementeDinheiro(200);
pessoa.incrementeDinheiro(300);


console.log(pessoa.intro());
console.log(pessoa2.intro());
console.log(pessoa.getDinheiro());

/*
prepare um pequeno quiz com 3 perguntas para você testar o que aprendeu ou prefere um projeto guiado (como um sistema de carrinho de compras) para juntar tudo?
*/