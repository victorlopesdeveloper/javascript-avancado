// PROMISES ASYNC/AWAIT

function pedirCarro (motoristas){
    return new Promise((resolvido, rejeitado) => {
        if( motoristas > 0){
            return resolvido("Seu motorista está a caminho!");
        }
        return rejeitado("Não tem motoristas disponíveis no momento.");
    })
}

async function main(){
    let motoristas = 0;

    const pedir = await pedirCarro(motoristas).catch(() => null);

    if(!pedir){
        console.log("Error");
        return
    }

    console.log(pedir);
}
main();