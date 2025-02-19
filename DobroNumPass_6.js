
const readline = require("readline-sync")
let numPassado = readline.question("\nDigite um numero: ")

function numDobro(numPassado){
    
    console.log(`O dobro do número é ${numPassado * 2}`)
}
console.log(numDobro(numPassado))

