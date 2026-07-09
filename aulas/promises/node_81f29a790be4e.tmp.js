import {text} from "@clack/prompts";

async function main (){
    const nome = await text({message: "Qual o seu nome? " });
    console.log(`Bem vindo ao curso de JavaScript ${nome}!`);
}
main();