// ESCOPOS
// GLOBAL, FUNÇÕES(LOCAL) E BLOCO

// GLOBAL

let meuNome = 'Victor' // ESCOPO GLOBAL

function saudar(){
    console.log(`Seja bem vindo ${meuNome}!`); // ACESSA A VARIÁVEL GLOBAL
}

saudar();

//------------------------------------------------------------------------------------------

// FUNÇÕES(LOCAL)

function calcularArea(){
    let pi = 3.14 // ESCOPO FUNÇÃO(LOCAL)
    console.log(pi);
}
// console.log(pi); // ERRO: pi não existe fora da função

//-------------------------------------------------------------------------------------------

// BLOCO

if(true){
    let mensagem = 'Tudo certo!'; // escopo de bloco
    console.log(mensagem); // funciona aqui
}
// console.log(mensagem); //ERRO: mensagem não é acessível fora do if