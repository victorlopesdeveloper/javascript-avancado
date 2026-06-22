// FUNÇÕES (function)

// SINTAXE: function identificador(){}

function saudar(nome){
    console.log("Seja bem vindo(a)", nome);
}

saudar("Victor");

//----------------------------------------------------------------------------------------------------------------

function somar (a,b){
    return a + b;
}

const resultado = somar(5,15);
console.log(resultado);
//----------------------------------------------------------------------------------------------------------------
// ARROW FUNCTIONS

const calcular = (x, y) =>{
    return x * y;
}

console.log(calcular(5,10));
//----------------------------------------------------------------------------------------------------------------

function fatorial(numero){
    let resultado = 1;
    for(let i = 1; i <= numero; i++){
        resultado *= numero;
    }
    return resultado;
}
console.log(fatorial(3));
console.log(fatorial(5));
console.log(fatorial(7));
console.log(fatorial(9));
console.log(fatorial(11));
//---------------------------------------------------------------------------------------------------------------

function saudar2(nome = 'Visitante'){
    console.log(`Seja vem vindo(a) ${nome}!`);
}
saudar2("Victor");
saudar2();