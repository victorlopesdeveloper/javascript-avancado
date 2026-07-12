// Datas

// 1. Datas e Horas atuais
const agora = new Date(); 
console.log(agora);

// 2. Passando milissegundos a partir de 01/01/1970
const milissegundos = new Date(1672531200000);
console.log(milissegundos);

// 3. String de data (Ano, Mês, Dia)
const dataString = new Date("2026-07-12");
console.log(dataString);

// 4. Parâmetros numéricos (Ano, Mês, Dia, Hora, Minuto, Segundo)
// Nota: No JS, os meses começam em 0 (0 para Janeiro, 11 para Dezembro)
const dataEspecifica = new Date(2026, 6, 12, 9, 40, 0);
console.log(dataEspecifica);

