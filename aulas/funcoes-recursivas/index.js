// FUNÇÕES RECURSIVAS

/*function contador (numero){
    if(numero < 1) return;
    
    setTimeout(() => {
        console.log(numero);
        contador(numero - 1);
    }, 1000);
}

contador(5);*/

function contagemRegressiva (numero){
    if(numero <= 0){
        console.log("Fim da contagem!");
        return;
        }
        setTimeout(() => {
            console.log(numero);
            contagemRegressiva(numero - 1);
        }, 1000);
    
}
contagemRegressiva(10);

//-------------------------------------------------------------------------------------------------------

function calcularFatorial (numero){
    if(numero === 0 || numero === 1){
        return 1
    }

    return numero * calcularFatorial(numero - 1);
}

console.log(calcularFatorial(5));