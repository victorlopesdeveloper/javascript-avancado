// MAIS EXEMPLOS

function getRandom (){
    return new Promise((resolve) =>
        setTimeout(() => resolve(Math.random() * 30), 2000)
    )
}

async function main(){
    console.log("Início do programa!")
    const value = await getRandom()
    console.log(`${value}
Fim do promgrama!
        `)
}

main();