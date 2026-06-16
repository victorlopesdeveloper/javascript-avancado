// OPERADOR TERNÁRIO

// (expressão) ? 'valor se verdadeiro' : 'valor se falso'

let idade = 19

console.log(
    idade < 18 ? "Você é menor de idade!" : 'Você é maior de idade!'
)
//--------------------------------------------------------------------------

let notaDaProva = 69;

console.log(notaDaProva >= 70 ? 'Você foi aprovado' : 'Você foi reprovado!')

//--------------------------------------------------------------------------

let saldoDoBanco = 500;
let transferenciaBancaria = 550;

console.log(transferenciaBancaria <= saldoDoBanco ? "Transferência concluída!" : "Saldo insuficiente")


//--------------------------------------------------------------------------

let obrigacoes = true;
let treinar = true;
let alimentacao = false;



console.log(
    obrigacoes == true && treinar == true && alimentacao == true
    ? 'Posso ficar de bobeira'
    : 'Tenho coisas para fazer'
)

//----------------------------------------------------------------------------

let horas = 13;

console.log(
    horas >= 0 && horas < 6 
    ? "Está de madrugada"
    : horas >= 6 && horas < 12
    ? "Está de dia"
    : horas >= 12 && horas < 18
    ? "Está de tarde"
    : horas >= 18 && horas < 24
    ? "Está de noite"
    : "Hora inválida."
)
//-----------------------------------------------------------------------------
