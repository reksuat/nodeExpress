const express = require("express");
const { soma, subtracao, multiplicacao, divisao } = require("./calc");

const app = express();
const porta = 5000;
app.use(express.json())

app.get('/calculadora/:operacao/:n1/:n2', (req,res) =>{
    const { operacao, n1, n2 } = req.params;
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);

let resultado
switch (operacao) {
    case "+":
        resultado= soma(num1,num2)
        break;
        case "-":
            resultado= subtracao(num1,num2)
            break;
            case "x":
                resultado= multiplicacao(num1,num2)
                break;
                case "/":
                resultado= divisao(num1,num2)
    default:
        return res.status(400).json({ erro: 'Operação inválida' });
}
res.json({ resultado });
});
app.get('/calculadora', (req, res) => {
    res.json({
        mensagem: 'Bem-vindo à API da calculadora. Utilize a rota /calculadora/:operacao/:n1/:n2 para realizar operações matemáticas.',
        operacao: ['+', '-', 'x', '/']
    });
});
app.listen(porta, ()=> {
    console.log(`O servidor iniciou a porta ${porta}`);
}) 


