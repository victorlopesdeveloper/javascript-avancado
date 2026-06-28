// DESESTRUTURAÇÃO

// OBJECT 

const usuario = {nome: "Victor", segundoNome: 'Lopes', terceiroNome: "Moreira", idade: 28, nacionalidade: "Brasileiro", estado: "Paraiba", cidade:"Triunfo", pais: {
    pai: "Jose", mae: "ines"
}}

const {nome: nomeUsuario} = usuario; // RENOMEANDO A PROPRIEDADE DIRETO NA DESESTRUTURAÇÃO
console.log(nomeUsuario);

const {pais: {pai, mae}} = usuario; // DESESTRUTURANDO UM OBJETO QUE ESTÁ DENTRO DE OUTRO OBJETO
console.log(pai);
console.log(mae);

//ARRAY

const informacoes = ['Desenvolvedor', 'Triunfense', 'Auxiliar de Contabilidade', 'Nordestino' ];

const [profissao, cidadania, ,regionalidade] = informacoes;
console.log(profissao);
console.log(cidadania);
console.log(regionalidade);