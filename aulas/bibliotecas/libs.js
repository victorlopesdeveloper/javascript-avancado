// BIBLIOTECAS

// MELHOR SITE: npmjs.com

import chalk from "chalk";
import {intro, text, outro} from "@clack/prompts"

async function pergunta(){
    intro(chalk.red.underline.bold.bgBlack("Bem vindo ao programa"));

    const nome = await text({message: "Qual é o seu nome?"});

    outro(`Olá, ${nome}`);
}

pergunta();



/*console.log(chalk.blue.underline.bold("Olá Victor, estou usando a lib que você instalou!")) */