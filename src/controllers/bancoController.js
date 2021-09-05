const mongoose = require('mongoose')
const Banco = require('../models/banco')

const getAll = async (req, res) => {
    const bancos = await Banco.find()
    res.status(200).json(bancos)
}

const createbanco =  async (req, res) => {
    const banco = new Banco ({
   _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    horas: req.body.horas,
    creadoEm: req.body.criadoEm
    })
    try{
     const novoBanco = await banco.save()
     res.status(201).json(novoBanco)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
}

module.exports = {
    getAll,
    createbanco
}