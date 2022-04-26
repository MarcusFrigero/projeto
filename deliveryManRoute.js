const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send({
        message:"GET rota Delivery"
    })
})

router.post("/", (req, res, next) => {
    res.status(201).send({
        message:"POST rota Delivery"
    })
})

router.get("/:deliveryManId", (req, res ,next) => {
    const id = req.params.deliveryManId

    if(id === "especifico"){
        res.status(200).send ({
            message: "id especifico",
            id: id
        })
        }else {
            res.status(200).send({
                message:"Delivery especifico"
            })
        }
})

router.patch("/", (req, res, next) => {
    res.status(201).send({
        message: "PATCH DELIVERY executado com sucesso"
    })
})

router.delete("/", (req, res, next) => {
    res.status(201).send({
        message: "DELIVERY EXCLUIDO com sucesso"
    })
})

module.exports = router;