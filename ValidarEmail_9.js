const readline = require("readline-sync")

let email = readline.question("\nValidador de email\nDigite o email: ")
email = email.split('')

const arroba = '@'
const ponto = '.'
let arrobaAparece = 0
let pontoAparece = 0
let emailInvalido = 'Indeterminado' //boolean

function validadorDeEmail(email){

    for(let i = 0; i < email.length; i++){
        if(email[i] == arroba){
           arrobaAparece++

           if(arrobaAparece > 1){
                emailInvalido = true
                i = email.length - 1
                break
           }
        }
    
        if(email[i] == ponto){
            pontoAparece++
            if(arrobaAparece == 1 && pontoAparece == 1){
                emailInvalido = false
            }else{
                emailInvalido = true
                i = email.length - 1 
                break
            }
         }
    }
    if(!emailInvalido){
        console.log("O email fornecido é VÁLIDO\n" )
    }else{
        console.log("O email fornecido é INVÁLIDO\n" )
    }
    
}
    console.log(validadorDeEmail(email))