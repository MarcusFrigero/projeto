const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send({
        message:"GET rota Client"
    })
})

router.post("/", (req, res, next) => {
    res.status(201).send({
        message:"POST rota Client"
    })
})

router.get("/:clientId", (req, res ,next) => {
    const id = req.params.clientId

    if(id === "especifico"){
        res.status(200).send ({
            message: "id especifico",
            id: id
        })
        }else {
            res.status(200).send({
                message:"Client especifico"
            })
        }
})

router.patch("/", (req, res, next) => {
    res.status(201).send({
        message: "PATCH CLIENT executado com sucesso"
    })
})

router.delete("/", (req, res, next) => {
    res.status(201).send({
        message: "CLIENT EXCLUIDO com sucesso"
    })
})

module.exports = router;