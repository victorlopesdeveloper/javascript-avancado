// LAÇOS DE REPETIÇÃO WHILE E DO...WHILE
let i = 0;

while(i <= 10){
    console.log(i)
    i++
}
//--------------------------------------------------------------------------------------------------------

const senhaCorreta = "javascript123"
let tentativa;
let contador = 1;

const r1 =  require("node:readline");
const prompt = r1.createInterface({
    input: process.stdin, output: process.stdout
})

prompt.question("Digite a senha: ", senha =>{
    
    res = Number.parseInt(senha);
    if(senha !== senhaCorreta && contador <= 3){
        console.log(`Tentativa ${contador} senha incorreta. tenta novamente.`)
    }else{
        console.log("Senha correta! Bem vindo ao sistema");
    }

    prompt.close();

})
