// Operadores Spread e Rest

// Spread (...)

const frutas1 = ["maçã", "banana"];
const frutas2 = ["uva", "laranja"];

const todasFrutas = [...frutas1, ...frutas2];

console.log(todasFrutas);

//-----------------------------------------------------------------------------------------------------
const usuario = {nome: "Victor", idade: 27};

const usuarioAtualizado = {...usuario, cidade: "Triunfo", idade: 28};

console.log(usuarioAtualizado);


// Rest(...)

const cores = ["Vermelho", "Verde", "Amarelo", "Azul"];

const [primeiraCor, ...demaisCores] = cores;

console.log(primeiraCor);
console.log(demaisCores);