
const readline = require("readline-sync")

let nome = readline.question("Digite o nome: ").trim()
 nome = nome.toLowerCase()
let vetorNome = nome.split(/\s+/)


if(vetorNome.length >= 2){
    let ultimoNome = vetorNome[vetorNome.length - 1]
    console.log(`\n ${vetorNome[0]}.${ultimoNome}@facens.br\n`)
}else{
    console.log("Nome inválido, digite novamente.")
}
