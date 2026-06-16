// OPERADORES LÓGICOS

// && E (AND) // a duas condições tem que ser verdadeira para que execute

let tomarBanho = true;
let escovarOsDentes = true;

let irParaFesta = tomarBanho && escovarOsDentes;
console.log(irParaFesta)

// || ou comercial (or) // É necessário que as duas condições ou pelo menos uma condição retorne verdadeiro para ser executado

let lavarPratos = true;
let estudar = false;

let brincar = lavarPratos || estudar;

console.log(brincar);

// ! negação (not) // Ele inverte o valor lógico da variável ou elemento

let estaAberto = true;

console.log(!estaAberto); // retorna false

// USANDO OS OPERADORES LÓGICOS JUNTOS

let brincarEIrParaFesta = (tomarBanho && escovarOsDentes) && (lavarPratos || estudar);
console.log(brincarEIrParaFesta);

// MAIS EXEMPLOS 

let temBolo = true;
let temSuco = true;
let temMusica = false;
let temPalhaço = true;

let festaDeAniversario = (temBolo && temSuco) && (temMusica || temPalhaço);

if(festaDeAniversario == true){
    console.log('Irá ter festa de aniversário!')
}else{
    console.log('Não irá ter festa de aniversário!')
}
