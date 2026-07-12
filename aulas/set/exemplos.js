// Adicionando e verificando elementos

const frutas = new Set();

frutas.add("Maçã");
frutas.add("Banana");
frutas.add("Laranja")
frutas.add("Maçã") // Ignorando, pois "Maçã ja existe"

console.log(frutas.has("Banana"));
console.log(frutas.size);

// Limpando um Set

frutas.clear();
console.log(frutas.size);

// Iterando (Percorrendo) um Set

const cores = new Set(["Verde", "Vermelho", "Azul", "Preto"]);

// Usando o for ...of
for(const cor of cores){
    console.log(cor);
}

//Usando o forEach
cores.forEach(cor => console.log(cor));