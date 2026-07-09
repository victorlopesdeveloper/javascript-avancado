// TRATAMENTOS DE ERROS (try/catch)

import {readFile} from "node:fs/promises";

async function main(){

    try{
        const file = await readFile("./index.js");
        console.log(file.toString());
    }catch(error){
        console.log("Não foi possível ler o arquivo");
    }finally{
        console.log("Fim do tratamento do programa!");
    }
    console.log("Fim do programa!");
}
main();