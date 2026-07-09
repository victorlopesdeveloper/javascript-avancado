import { match } from "node:assert";
import {setTimeout} from "node:timers/promises";

async function getNumber(){
    return 5;
}

async function main (){
    console.log("Início do programa");
    const value = await getNumber();
    console.log(value + 1);
    console.log("Fim do programa");
}
main();


async function main2 (){
    
    const value = await setTimeout(2000, Math.random());
    console.log("Número aleatório: ", value);
    
}

main2();