const corretora = require("./corretora");
const express= require("express")

const app = express();
const porta = 5000;
app.use(express.json())

app.get("corretora/",(req,res) => {
    const registros = corretora.listar();
    res.json(registros);
})
app.post("/corretora", (req, res) => {
    const { nome } = req.body;
    const novo = corretora.criar(nome);
        res.status(201).json(novo);
})
app.listen(porta, ()=> {
    console.log(`O servidor iniciou a porta ${porta}`);
}) 