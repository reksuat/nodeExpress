const db = [];
const nextId = 1
function model(body, id = nextId++) {
    if (body.cor != "" && body.nome != "" && body.cor != undefined && body.nome != undefined) {
        body.id = id;
        return {
            id, 
            nome: body.nome,
            cor: body.cor
        }
    }
}
function store(body) {
    const novo = model(body)

    if (novo) {
        db.push(novo);
        return 201;
    }
    return 400;
}

const index = () => db;

function show(id) { //retorna inteiro
    const naipe = db.find(el => el.id == id) //retorna um
}
function update(id, body) {
    const index = db.findIndex((el)=> el.id == id)
    const novo = model(body, parseInt(id))
    if (index!= -1 && novo) {
        db[index]= novo;
        return 200;
    }
    return 400
}
function destroy(id) {
    const index = db.findIndex((el)=> el.id==id);
    if (index!=-1) {
        db.splice(index,1)
            return 200
    }return 400
}
module.exports ={
    store,
    index,
    show,
    update,
    destroy
}