const express = require("express");
const app = express();
const porta = 5000;
app.get('/calculadora/:n1/:n2', (req,res) =>{
    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
})

app.listen(porta, ()=> {
    console.log(`O servidor iniciou a porta ${porta}`);
})