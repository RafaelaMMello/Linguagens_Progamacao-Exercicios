let vetor = [55,56,19,29,26]
let maior = vetor[0];
let menor = vetor[0];

let avaliadora = (vetor) => {
    for(let i = 1; i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
        }
        if(vetor[i] < menor){
            menor = vetor[i]
        }                    
    }
    return `\nO maior valor: ${maior}\nO menor valor: ${menor}`
}

console.log(avaliadora(vetor))
