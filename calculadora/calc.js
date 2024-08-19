const soma = (n1,n2) => n1+n2
const subtracao = (n1,n2) => n1-n2
const multiplicacao = (n1,n2) => n1*n2
const divisao = (n1,n2) => {
    if (n2===0) {
        return "A divisão não pode ser 0"
    }
    return n1/n2;
}
module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}