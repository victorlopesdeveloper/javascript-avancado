import rl from "node:readline";

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pergunta = "Qual é o seu nome? ";
const lidar = (resposta) => {
    console.log(`Olá ${resposta}`);
    prompt.close();
};

prompt.question(pergunta, lidar);