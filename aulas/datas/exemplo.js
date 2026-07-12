// EXEMPLOS PRÁTICOS

//1. Formatando a data atual para o padrão brasileiro
const hoje = new Date();
console.log(hoje.toLocaleDateString("pt-BR"));

//2. Calculando a diferença entre duas datas: Como as datas são armazenadas em milissegundos, você pode subtraí=las diretamente para descobrir a diferença temporal.
const data1 = new Date("2020-01-01");
const data2 = new Date("2026-02-01")
const diferencaMs = data1 - data2;
const diasDiferenca = diferencaMs / (1000 * 60 *60 *24);
    console.log(`Faltam ${diferencaMs} milissegundos (${diasDiferenca} dias).`);