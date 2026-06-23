// UM OBJETO DENTRO DE OUTRO OBJETO

const computador = {
    placaMae: "B550M PLUS",
    processador: "Core i7",
    placaDeVideo: "RTX 3060",
    ram: 16,
    fonte: {
        nome: "Coller Master",
        whatts: 800,
        material: 'Ouro'
    },
    gabinete: {
        nome: "Redragon Wideload",
        cor: "Preto"
    },
    ram: [ // CRIEI UM ARRAY DENTRO DE UM OBJETO, COM DOIS OBJETOS DENTRO DESSE ARRAY
        {   
            marca: "Kingston",
            capacidade: 16
        },
        
        {   
            marca: "Kingston",
            capacidade: 16
        }
    ]
    
}
console.log("Meu computador tem as seguintes configurações:")
console.log(`Placa mãe: ${computador.placaMae}`);
console.log(`Processador: ${computador.processador}`);
console.log(`Placa de vídeo: ${computador.placaDeVideo}`);
console.log(`Fonte: ${computador.fonte.nome} de ${computador.fonte.whatts} whatts e material de ${computador.fonte.material}`)
console.log(`Gabinete: ${computador.gabinete.nome} na cor ${computador.gabinete.cor}`);
console.log(`Ram: `);
for(const ram of computador.ram){
    console.log(ram.marca, ram.capacidade, "Gigas")
}