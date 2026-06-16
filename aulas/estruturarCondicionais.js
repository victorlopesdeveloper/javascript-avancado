// ESTRUTURAS CONDICIONAIS 

// if (se)
// else (senão)
// else if (senão se)

// if
// sintaxe: (expressão){}

/* crie um codigo que analise a temperatura, se for maior do 30 printe 'está muito quente lá fora',
senão printe ' está um temperatura agradável'*/

let temperatura = 35;

if(temperatura >= 30){
    console.log('Está muito quente lá fora')
}
//----------------------------------------------------------------------------------------------------------------

//else
//if(expressão){} else{}

/*Crie um código que analise o saldo do banco do cliente e o valor da transferência que ele quer fazer,
se o valor da transfer~encia for menor ou igual ao saldo do banco printe"Tranferência realizda com sucesso", 
se o valor da transferência for maior que o saldo do banco printe "Saldo insuficiente"*/

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
senão printe "Reprovado(a) estude mais da próxima vez."*/

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
e se ele não tiver nenhum lado igual, ele é um triângulo escaleno*/

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
