const express = require ('express');
const app = express();
const porta = 3000;
app.get('/', (req, res) =>{
    res.send("hello world")
})
app.get("/segunda-rota", (req,res)=> {
    res.send("segunda rota")
})
app.get("/prime-day/:produto", (req,res)=> {
    req.params;
    res.send(`O produto comprado foi: ${req.params.produto}`)
})
app.listen(porta, ()=> {
    console.log(`O servidor iniciou a porta ${porta}`);
})
