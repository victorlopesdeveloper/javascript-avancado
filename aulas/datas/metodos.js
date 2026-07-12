// Principais Métodos

const data = new Date();

// Métodos de leitura (Getters)

console.log(data.getFullYear()); // Retorna o ano com 4 Dígitos
console.log(data.getMonth()); // Retorna o mês ( 0 a 11)
console.log(data.getDate()); // Retorna o dia do mês (1 a 31)
console.log(data.getDay()); // Retorna o dia da semana (0 para Domingo, 6 para Sábado)
console.log(data.getHours()); // Retorna a Hora
console.log(data.getMinutes()); // Retorna o Minuto
console.log(data.getSeconds()); // Retorna o Segundo

// Métodos de modificação

const ano = data.setFullYear(2020);

data.setFullYear(2020); // Define o ano
data.setMonth(11); // Define o mês (11 para dezembro)
data.setDate(5); // Define o dia do Mês

console.log(data);

// Métodos de formatação e exibição

console.log(data.toLocaleDateString("pt-BR")); 
// Retorna a daata em formato legíovel e adapta ao idioma local

console.log(data.toISOString());
// Retorna a data padrão internacional ISO 8601(ex: 2026-12-31t12:00:00:000Z)