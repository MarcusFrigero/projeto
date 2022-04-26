const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send({
        message:"GET rota Request"
    })
})

router.post("/", (req, res, next) => {
    res.status(201).send({
        message:"POST rota Request"
    })
})

router.get("/:requestId", (req, res ,next) => {
    const id = req.params.requestId

    if(id === "especifico"){
        res.status(200).send ({
            message: "id especifico",
            id: id
        })
        }else {
            res.status(200).send({
                message:"REQUEST especifico"
            })
        }
})

router.patch("/", (req, res, next) => {
    res.status(201).send({
        message: "PATCH REQUEST executado com sucesso"
    })
})

router.delete("/", (req, res, next) => {
    res.status(201).send({
        message: "REQUEST EXCLUIDO com sucesso"
    })
})

module.exports = router;