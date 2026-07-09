import {text} from "@clack/prompts";

async function main (){
    const nome = await text({message: "Qual o seu nome? " });
    const idade = await text({message: `Qual a sua idade ${nome}?`});
    
    console.log(`Bem vindo ao curso de JavaScript ${nome}!`);
    console.log(`${nome}, ${idade} anos é uma ótima idade para aprender a programar!`);
}
main();