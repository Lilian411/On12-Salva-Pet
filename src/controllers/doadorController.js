const mongoose = require('mongoose')
const Doador = require('../models/doador')

const getAll = async (req, res) => {
    const doadores = await Doador.find()
    res.status(200).json(bancos)
}

const createdoador = async (req, res) => {
    const doador = new Doador ({
   _id: new mongoose.Types.ObjectId(),
    pet: req.body.pet,
    idade: req.body.idade,
    raca: req.body.raca,
    peso: req.body.horas,
    vacinas: req.body.vacinas,
    dono: req.body.dono,
    telefone: req.body.telefone,
    email: req.body.email,
    local: req.body.local,
    creadoEm: req.body.criadoEm
    })
    try{
     const novoDoador = await doador.save()
     res.status(201).json(novoDoador)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
}
module.exports = {
    getAll,
    createdoador
}