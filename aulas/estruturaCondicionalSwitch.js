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
console.log("[1] Data atual");
console.log("[2] Horário atual");
console.log("[3] Ver animais");
console.log("[4] Ver comidas");
console.log("[5] Ver linguagens");
console.log("[0] Sair");

prompt.question("Digite a opção escolhida: ", pergunta => {
    switch(pergunta){
        case "1": {
            const data = new Date();
            const dia = data.getDate();
            const mes = data.getMonth()+1;
            const ano = data.getFullYear();
            console.log(`Hoje é dia ${dia}/${mes}/${ano}`)
            break;
        }
        case "2": {
            const horario = new Date();
            const segundo = horario.getSeconds();
            const minuto = horario.getMinutes();
            const hora = horario.getHours();
            console.log(`Agpra são ${hora}:${minuto}:${segundo} hrs`);
            break;
        }
        case "3": {
            console.log("Tigre");
            console.log("Leão");
            console.log("Cachorro");
            console.log("Gato");
            console.log("Pato");
            break;
        }
        case "4": {
            console.log("Pizza");
            console.log("Hamburguer");
            console.log("Macarronada");
            console.log("Lasanha");
            console.log("Camarão");
            console.log("Churrasco");
            break;
        }
        case "5": {
            console.log("JavaScript");
            console.log("Phyton");
            console.log("C++");
            console.log("Java");
            console.log("Laravel");
            break;
        }
        default:{
            console.log("Fim do programa")
        }
    }
    prompt.close()
})