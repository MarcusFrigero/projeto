const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send({
        message:"GET rota Region"
    })
})

router.post("/", (req, res, next) => {
    res.status(201).send({
        message:"POST rota Region"
    })
})

router.get("/:regionId", (req, res ,next) => {
    const id = req.params.regionId

    if(id === "especifico"){
        res.status(200).send ({
            message: "id especifico",
            id: id
        })
        }else {
            res.status(200).send({
                message:"Region especifico"
            })
        }
})

router.patch("/", (req, res, next) => {
    res.status(201).send({
        message: "PATCH REGION executado com sucesso"
    })
})

router.delete("/", (req, res, next) => {
    res.status(201).send({
        message: "REGION EXCLUIDO com sucesso"
    })
})

module.exports = router;