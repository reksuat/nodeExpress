const prompt = require("prompt-sync")();
const express = require ('express');
const app = express();
const porta = 4000;
// let nome = prompt("Nome: ");
// let idade = prompt("Idade: ");
// let curso = prompt("curso: ");
app.get("/aluno/:nome/:idade/:curso", (req, res)=>{
    req.params;
    res.send(`O aluno ${req.params.nome} tem ${req.params.idade} anos e está fazendo o curso de ${req.params.curso}`)
})
app.listen(porta, ()=> {
    console.log(`O servidor iniciou a porta ${porta}`);
})