const readline = require("readline-sync")

let texto = readline.question("\nEscreva um texto: ")
 texto = texto.split('')

function contarVogais(texto){
    let vogais = ['a', 'e', 'i', 'o', 'u']
    let numVogais = 0

        for(let i = 0; i < texto.length; i++){
            for(let j = 0; j < vogais.length; j++){
                 if(texto[i] == vogais[j]){
                    numVogais++;
                 }
             }
        }
return numVogais;
}

console.log(`\nO número de vogais é: ${contarVogais(texto)}` )
console.log("Apenas vogais minúsculas e sem acento são contadas." )
console.log("\n")
