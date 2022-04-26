const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send({
        message:"GET rota ItemsRequest"
    })
})

router.post("/", (req, res, next) => {
    res.status(201).send({
        message:"POST rota ItemsRequest"
    })
})

router.get("/:itemrequestId", (req, res ,next) => {
    const id = req.params.itemrequestId

    if(id === "especifico"){
        res.status(200).send ({
            message: "id especifico",
            id: id
        })
        }else {
            res.status(200).send({
                message:"ItemRequest especifico"
            })
        }
})

router.patch("/", (req, res, next) => {
    res.status(201).send({
        message: "PATCH ItemRequest executado com sucesso"
    })
})

router.delete("/", (req, res, next) => {
    res.status(201).send({
        message: "ItemRequest EXCLUIDO com sucesso"
    })
})

module.exports = router;