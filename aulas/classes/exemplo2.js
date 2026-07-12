// Getters e Setters (Controle e Validação)

 class ContaBancaria{
    constructor(saldoInicial){
        this._saldo = saldoInicial;
        // Propriedade "privada" por convenção
    }
    // Getter: permite ler o saldo com segurança
    get saldo (){
        return `R$ ${this._saldo.toFixed(2)}`;
    }
    // Setter: permite alterar o saldo, mas valida o valor antes
    set saldo (novoSaldo){
        if(novoSaldo < 0){
            console.log("Erro: o saldo não pode ser negativo!")
        }else{
            this._saldo = novoSaldo
        }
    }
}

const minhaConta = new ContaBancaria(100);

// Usando o Getter( note que não usamos o parenteses)
console.log(minhaConta.saldo); // Saída: R$ 100.00

// Usando o Setter( atribuimo valor com "=")
minhaConta.saldo = 250;
console.log(minhaConta.saldo); // Saída: R$ 250.00

// Tentando colocar valor inválido no Setter
minhaConta.saldo = -50;
console.log(minhaConta.saldo) // Saída: Erro: o saldo não pode ser negativo!
