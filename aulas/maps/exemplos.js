// Percorrendo um Map


const precos = new Map ([
    ["Maçã", 5.0],
    ["Banana", 3.0]
]);

// Usando o for...of (retorna um array [chave, valor])
for (const [item, valor] of precos){
    console.log(`${item}: R$ ${valor}`);
}

// Usando o forEach

precos.forEach((valor, chave) => {
    console.log(`${chave} custa ${valor}`);
});