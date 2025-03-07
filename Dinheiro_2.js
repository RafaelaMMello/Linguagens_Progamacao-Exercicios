const soma = (a, b) => {
    const resp = a + b
    return `R$${resp.toFixed(2).replace(".",",")}`
}
console.log(soma(0.1, 0.2))