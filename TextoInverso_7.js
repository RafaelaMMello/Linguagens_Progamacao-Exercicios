
const readline = require("readline-sync")

let texto = readline.question("Digite o texto que gostaria de inverter: ")
texto = texto.split('') 

function inverterTexto(texto){ 
    console.log(`Texto invertido: ${texto.reverse().join('')}`)
}
console.log(inverterTexto(texto)) 

