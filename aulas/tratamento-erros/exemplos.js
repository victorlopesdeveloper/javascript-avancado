function conferirIdade (idade){
    if(idade < 18){
        throw new Error("acesso negado: você é menor de idade");
    }else{
        console.log("Acesso permitido!")
    }
}

try{
    conferirIdade(17);
}catch(erro){
    console.log("Erro capturado! " + erro.message)
} finally{
    console.log("Fim da verificação de idade!")
}
