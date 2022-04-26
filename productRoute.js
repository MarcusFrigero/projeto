const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

//Mostra todos os PRODUTOS
router.get("/", (req, res, next) => {  //Status de ok é 200
    res.status(200).send({
        message:"GET rota Products"
    })
})

//Cria os PRODUTO
router.post("/", (req, res, next) => {
    res.status(201).send({
        message:"POST rota Products"
    })
})

//Mostra um produto específico
router.get("/:productId", (req, res ,next) => {
    const id = req.params.productId

    if(id === "especifico"){
        res.status(200).send ({
            message: "id especifico",
            id: id
        })
        }else {
            res.status(200).send({
                message:"Product especifico"
            })
        }
})

//PUT - Atualiza toda a estrutura do registro
//PATCH - Atualiza parta do registro
router.patch("/", (req, res, next) => {
    res.status(201).send({
        message: "PATCH executado com sucesso"
    })
})

router.delete("/", (req, res, next) => {
    res.status(201).send({
        message: "EXCLUIDO com sucesso"
    })
})

module.exports = router;