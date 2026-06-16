// ESTRUTURA CONDICIONAL SWITCH

/*
SINTAXE:

    switch(valor){
        case "esperado":{
                ...
                break;    
        }    
    }
*/
/*
const animal = 'cachorro';

switch(animal){
    case "gato":{ 
        console.log("miau");
        break;
    }
    case "cachorro":{
        console.log('au au');
        break;
    }
    case "galinha":{ 
        console.log("cocoricó");
        break;
    }
    case "pato":{ 
        console.log("qua qua qua");
        break;
    }
    case "pássaro":{ 
        console.log("bem-te-vi");
        break;
    }
    default:{
        console.log("Som desconhecido")
    }
}
console.log(animal , "emitiu um som")

//------------------------------------------------------------------------------------------------------------

let usuario = "gerente";

switch(usuario){
    case "vendedor":{
        console.log("Acesso de vendendor");
        break;
    }
    case "gerente":{
        console.log("Acesso Gerencial");
        break;
    }
    case "diretor": {
        console.log("Acesso geral");
        break;
    }
    default:{
        console.log("Acesso de usuário comum")
    }
    
}   
//------------------------------------------------------------------------------------------------------------
*/
/*
let coisa = "pizza"

switch(coisa){
    case "gato":
    case 'cachorro':
    case "tatu":
    case 'papagaio':{
        console.log("Animal");
        break;
    }
    case "hamburguer":
    case "pastel":
    case "macarronada":
    case 'pizza':{
        console.log("Comida");
        break;
    }
    case "pá":
    case "martelo":
    case "enchada":
    case "chave de fenda":{
        console.log("Ferramenta");
        break;
    }
    default:{
        console.log("Não ")
    }
}
*/

const r1 =  require("node:readline");
const prompt = r1.createInterface({
    input: process.stdin, output: process.stdout
})

console.log("Bem vindo ao programa");
console.log();
console.log();
console.log();
console.log();
console.log();