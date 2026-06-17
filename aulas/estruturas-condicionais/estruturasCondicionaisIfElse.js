// ESTRUTURAS CONDICIONAIS 

// if (se)
// else (senão)
// else if (senão se)

// if
// sintaxe: (expressão){}

/* crie um codigo que analise a temperatura, se for maior do 30 printe 'está muito quente lá fora',
senão printe ' está um temperatura agradável'
*/

let temperatura = 35;

if(temperatura >= 30){
    console.log('Está muito quente lá fora')
}

//----------------------------------------------------------------------------------------------------------------

//else
//if(expressão){} else{}

/*Crie um código que analise o saldo do banco do cliente e o valor da transferência que ele quer fazer,
se o valor da transfer~encia for menor ou igual ao saldo do banco printe"Tranferência realizda com sucesso", 
se o valor da transferência for maior que o saldo do banco printe "Saldo insuficiente"
*/

let saldoDoBanco = 1000;
let transferencia = 1100;

if(transferencia <= saldoDoBanco){
    console.log("Tranferência realizda com sucesso!")
} else{
    console.log("Saldo insuficiente.")
}

//----------------------------------------------------------------------------------------------------------------

//else if 
//sintaxe if(){} else if(){} else{}

/*crie um código que analise uma nota de uma prova, se for maior ou igual a 9 printe "Você foi aprovado(a)!",
senão se for maior ou igual a 7 printe "Você foi aprovado(a) na média!", 
senão printe "Reprovado(a) estude mais da próxima vez."
*/

let notaDaProva = 8.5;

if(notaDaProva >= 9){
    console.log("Você foi aprovado(a)!")
} else if(notaDaProva >= 7){
    console.log("Você foi aprovado(a) na média!")
} else{
    console.log("Reprovado(a), estude mais da próxima vez.")
}


//----------------------------------------------------------------------------------------------------------------

//MAIS EXEMPLOS

/* crie um algorítimo que analise tres lados de um triângulo, se o triâmngulo tiver os tres lados iguais,
ele é um triangulo equilátero, se ele tiver dois lados iguais ele é um triângulo isóceles
e se ele não tiver nenhum lado igual, ele é um triângulo escaleno
*/

let lado1 = 5;
let lado2 = 4;
let lado3 = 3;

if(lado1 === lado2 && lado2 === lado3){
    console.log("É um triângulo equilátero")
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
    console.log('É um triângulo isóceles')
} else{
    console.log("É um triângulo escaleno.")
}

//----------------------------------------------------------------------------------------------------------------
/*
Sistema que confere sua idade, se for um numero válido ele mostra sua idade e quantos anos você terá daqui á 4,
10, 20 e 30 anos, se não for um numero válido ele mostra uma mensagem de erro.
*/

const r1 =  require("node:readline");
const prompt = r1.createInterface({
    input: process.stdin, output: process.stdout
})

prompt.question("Digite sua idade ", answer => {
    let idade = Number.parseInt(answer);
    if(Number.isNaN(idade)){
        console.log('O que você digitou não é um numero válido!');
    }else{
        console.log(`Sua idade é ${idade} anos.`)
        console.log(`Daqui á 4 anos você terá ${idade + 4} anos.`);
        console.log(`Daqui á 10 anos você terá ${idade + 10} anos.`)
        console.log(`Daqui á 20 anos você terá ${idade + 20} anos.`)
        console.log(`Daqui á 30 anos você terá ${idade + 30} anos.`)
    }
    prompt.close()
})


//----------------------------------------------------------------------------------------------------------------

/*Crie um código que analise o número de horas que um funcionário trabalhou, se ele trabalhou mais de 40 horas,
ele tem direito a horas extras, se ele trabalhou 40 horas ou menos, ele não tem direito a horas extras.
*/

const r1 =  require("node:readline");
const prompt = r1.createInterface({
    input: process.stdin, output: process.stdout
})

prompt.question('Quantas horas de trabalho você teve essa semana ', resposta => {
    let tempoTrabalhado = Number.parseInt(resposta)
    if(Number.isNaN(tempoTrabalhado)){
        console.log("Digite um número válido")
    }else if(tempoTrabalhado >= 40){
        console.log("Você tem direito as horas extras!")
    }else{
        console.log("Você não tem direito as horas extras!")
    }
    prompt.close();
})

//----------------------------------------------------------------------------------------------------------------

/* Temos um aplicativo de banco que tem um saldo,
quero que você confira se o saldo e coerente com o valor da transferência,
se sim diminua o valor da transferência do saldo da conta,
se não printe uma mensagem que o saldo é insuficiente 
*/

const r1 =  require("node:readline");
const prompt = r1.createInterface({
    input: process.stdin, output: process.stdout
})

let saldo = 10000;
console.log(`Seu saldo no banco é de R$${saldo} reais`);
prompt.question("Digite o valor que você quer transferir: ", transferenciaBancaria => {
    let transferencia = Number.parseInt(transferenciaBancaria);
    if(Number.isNaN(transferencia)){
        console.log("Digite um número válido");
    } else if(transferencia > saldo){
        console.log("Saldo insuficiente.");
    } else{
        saldo -= transferencia;
        console.log("Transferência efetuada com sucesso!")
        console.log(`Seu saldo agora é de ${saldo} reais.`);
    }
    prompt.close()
})

//----------------------------------------------------------------------------------------------------------------

/* Sistema que calcula o valor do bônus que você recebe de acordo com o seu desempenho no trabalho,
esse bonus é calculado em cima do valor do seu salário.
*/

let performance = 'razoavel';
let salarioBase = 10000;
let bonus = 0;

if(performance === 'otimo'){
    bonus = salarioBase * 0.2;
    console.log(`Seu bônus será de ${bonus} reais`);
    console.log(`O seu salário total será de ${salarioBase + bonus} reais`);
} else if (performance === 'bom'){
    bonus = salarioBase * 0.1;
    console.log(`Seu bônus será de ${bonus} reais`);
    console.log(`O seu salário total será de ${salarioBase + bonus} reais`);
} else if (performance === 'razoavel'){
    bonus = salarioBase * 0.5;
    console.log(`Seu bônus será de ${bonus} reais`);
    console.log(`O seu salário total será de ${salarioBase + bonus} reais`);
} else{
    console.log("Você não tem bônus para receber.")
    console.log(`O seu salário será de ${salarioBase} reais`)
} 

