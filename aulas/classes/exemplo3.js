// Herança

// Classe mãe genérica
class Animal{
    constructor(nome){
        this.nome = nome;
    }
    emitirSom(){
        console.log(`${this.nome} fez um som`)
    }

}
// Classe filha específica
class Cachorro extends Animal{
    constructor(nome, raca){
        super(nome); // Envia o nome para o constructor da classe Animal
        this.raca = raca;
    }
    // Sobrescrevendo o método da classe mãe para torná-lo específico
    emitirSom(){
        console.log(`${this.nome} latiu: Au au!`)
    }
}
const meuPet = new Cachorro("Pandora", "Rotwailler");

meuPet.emitirSom(); // Saída: Pandora latiu: Au au!
console.log(meuPet.raca); // Saída: Rotwailler