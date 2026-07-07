// BOOLEANOS
// TRUE E FALSE
/*
EM JAVASCRIPT, UM BOOLEANO É UM TIPO DE DADO PRIMITIVO QUE PODE ASSUMIR APENAS DOIS VALORES: TRUE (VERDADEIRO)
OU FALSE(FALSO). ELES SÃO A BASE DA LÓGICA DE PREOGRAMAÇÃO E SERVEM PARA TOMAR DECISÕES, CONTROLAR O FLUXO DE
UM SISTEMA E FAZER COMPARAÇÕES.
*/

const estaAberto = false;

if(estaAberto === true){
    console.log("A porta está aberta!")
}else{
    console.log("A porta está fechada!")
}

let result = 28;

if(result){
    console.log(`O resultado é: ${result}!`)
}else{
    console.log("Sem resultado!")
}

//Truthy e Falsy

/*
EM JAVASCRIPT, QUALQUER VALOR OU EXPRESSÃO PODE SER AVALIADO COMO TRUE OU FALSE EM UMA CONDIÇÃO, MESMO QUE NÃO SEJA EXPLICITAMENTE
DO TIPO BOOLEANO
*/

// Truthy
//true
// Qualquer número diferente de 0 ou -0
// Qualquer string com texto (incluindo "0" ou "false")
// [] //Array
//{} {name: "Victor"} {idade: 28} // Objetos
//() => {} // Funções


// Falsy
//false
//0 -0 NaN 
//"" '' `` // string vazia
//null undefined


let estaLigado = true;
let number = 1;
let texto = "Victor";
let informacoes = {idade: 28};
let lista = ["pai", "mãe", "irmã"];
let funcaoSoma = (a,b) => {
    return a + b;
}
let number2 = 0;
let textoVazio = "";
let varVazia;

// VOCÊ PODE TESTAR O VALOR DE QUALQUER COISA USANDO O OPERADOR !!(DUPLA NEGAÇÃO) OU CHAMANDO A FUNÇÃO Boolean()

console.log(!!estaLigado);
console.log(!!number);
console.log(!!texto);
console.log(!!informacoes);
console.log(!!lista);
console.log(!!funcaoSoma);
console.log(Boolean(number2));
console.log(Boolean(textoVazio));
console.log(Boolean(varVazia));

