const naipeController = require("./modulo/naipe.js")
const express = require("express");
const app = express()
const porta = 3000
app.get("/naipe", (req, res) => { //ler
    const content = naipeController.index()
    res.json(content)
})
app.get("/naipe/:id",(req,res)=>{
    const content = naipeController.show(req.params.id)
    res.json(content)
})
app.post("/naipe",(req,res)=>{
    const code = naipeController.store(req.body)
    res.status(code).json()
})
app.put("/naipe/:id",(req,res)=>{
    const code = naipeController.update(res.params.id, req.body)
    res.status(code).json()
})
app.delete("/naipe/:id",(req,res)=>{
})

app.listen(porta, () => {
    console.log("Executa quando o servidor inicia porta: ",porta);
}) 