// FUNÇÕES CALLBACKS

/*function desempenhe(nome,exec){
    const title = "Curso de JavaScript"
    console.log(`${nome} executou uma função`)
    exec(title)
}

desempenhe("Victor", (title) => {
    console.log(`O título é ${title}`)
})
*/

//--------------------------------------------------------------------------------------------------------------

function exibirMensagem (nome){
    console.log(`Olá ${nome}! Seja bem vindo.`);
}

function processarUsuario(nome, funcaoCallback){
    console.log("Processando usuário...");
    funcaoCallback(nome);
}
processarUsuario("Victor", exibirMensagem);

//---------------------------------------------------------------------------------------------------------
function exec (){
    console.log("1+1 = ", 1+1);
}
console.log("Início do programa");

setTimeout(exec, 2000);

console.log("Fim do programa");

