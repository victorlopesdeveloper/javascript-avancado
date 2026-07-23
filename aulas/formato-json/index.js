// Formato JSON

import json from "./pessoa.json" with {type: "json"};
console.log(json);








const textoJSON = '{"nome": "Victor", "idade": 28}';
const textoJS = JSON.parse(textoJSON);
console.log(textoJS.nome);

const funcionarios = {func1: "Victor", func2: "sybelle"};
const convertendo = JSON.stringify(funcionarios);
console.log(convertendo);