const deadline = require("readline-sync")

let equilatero = (a,b,c) => {
    if(a === b && b === c){
        return "é esquilátero"
    }else{
        return ""
    }
}
let isosceles = (a,b,c) => {
    if(a != b && a == c || a == b && a != c || c != b && c == a || c == b && c != a){
        return "é isósceles"
    }else{
        return ""
    }
}
let escaleno = (a,b,c) => {
    if(a !== b && b !== c && c !== a){
        return "é escaleno"
    }else {
        return ""
    }
} 
let a = deadline.question("\nQual o comprimento do lado A?: ")
let b = deadline.question("\nQual o comprimento do lado B?: ")
let c = deadline.question("\nQual o comprimento do lado C?: ")
console.log(`\nO tipo do triângulo ${isosceles(a, b, c)}${equilatero(a, b, c)}${escaleno(a, b, c)}`)
