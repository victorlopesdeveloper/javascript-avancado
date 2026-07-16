// Maps

const info = new Map();


// Métodos e Propriedade

// set(chave, valor): Adiciona ou atualiza um par chave-valor no Map. Retorna o próprio objeto Map
info.set("nome", "Victor");
info.set("idade", 28);
info.set("Cidadania", "Triunfense");
info.set("Pais Vivos", true)
info.set("Formado", false);

console.log(info);

// get(chave): Retorna o valor associado a chave se não existir, retorna undefined

console.log(info.get("nome"));

// has(chave): Retorna true se a chave existir no Map, ou false caso contrário

console.log(info.has("idade"));

// delete(chave): Remove o elemento especificado pela chave e retorna true. Retorna false se a chave não for encontrada

info.delete("Pais Vivos");
console.log(info);

// size: Propriedade(não é um método) que  retorna o numero de elementos presentes no Map

console.log(info.size);

// clear(): remove todos os pares chave-valor do Map

info.clear();
console.log(info);