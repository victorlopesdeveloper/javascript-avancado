// SINTAXE DE UMA CRIAÇÃO DE UMA CLASS

class Carro{
    // 1. constructor: define as propriedades iniciais
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    // 2. Método: uma ação que o carro pode fazer
    ligar(){
        console.log(`O ${this.modelo} da marca ${this.marca} foi ligado!`);
    }
    // 3. Outro Método
    obterIdade(anoAtual){
        return anoAtual - this.ano;
    }
}
// Criando um objeto a partir da  classe Carro
const meuCarro = new Carro("Toyota", "Corolla", 2022);
// Acecssando as propriedades
console.log(meuCarro.modelo);
// Chamando os métodos criados
meuCarro.ligar();
// Usando um método que retorna um valor
let idadeCarro = meuCarro.obterIdade(2026);
console.log(idadeCarro);