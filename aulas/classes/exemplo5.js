// Propriedades privadas reais (#)

class Usuario{
    // É obrigado a declarar as variáveis privadas no topo
    #senha;

    constructor(nome, senhaInicial){
        this.nome = nome;
        this.#senha = senhaInicial;
        // Atribuindo valor internamente
    }
    // Método público que acessa a propriedade privada
    verificarSenha(senhaDigitada){
        if(this.#senha === senhaDigitada){
            return "Acesso liberado!"
        }else{
            return "Senha incorreta! Acesso negado."
        }
    }
    // Método privado(sim métodos também podem ser privados)
    #criptografar(){
        return "Texto Criptografado"
    }
}

const cliente = new Usuario("Victor", "2006");
console.log(cliente.nome);
console.log(cliente.verificarSenha("2006"));

