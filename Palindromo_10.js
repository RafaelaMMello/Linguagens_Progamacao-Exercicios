const readline = require("readline-sync")

let texto = readline.question("\nDigite o texto: ")
texto = texto.split('')
let textoInverso = texto.reverse()

function palindromo(texto, textoInverso){
    let caracIguais = 0

    for(let i = 0; i < texto.length; i++){
            if(texto[i] == textoInverso[i]){
                caracIguais++
            }
        
    }
    if(caracIguais == texto.length){
        console.log("O texto é um palíndromo.\n")
    }else{
        console.log("O texto não é um palíndromo.\n")
    }
    
}

console.log(palindromo(texto, textoInverso))
