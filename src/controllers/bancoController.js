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
    creadoEm: req.body.criadoEm
    })
    const bancoJaExiste = await Banco.findOnde({nome: req.body.nome})
    if (bancoJaExiste) {
        return res.status(409).json({error: ' Banco ja cadastrado.'})
    }
    try{
     const novoBanco = await banco.save()
     res.status(201).json(novoBanco)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
}
    const updateOne = async (req, res) => {
        try {
        const banco = await Banco.findById(req.params.id)
        if (banco == null) {
            return res.status(404).json({message: "banco não encontrado"})
        }

        if (req.body.nome != null) {
            banco.nome = req.body.nome
        }
        const bancoAtualizado = await banco.save()
        res.status(200).json(bancoAtualizado)
        
        } catch (err) {
            res.status(500).json({message: err.message})
        }
    }
const updateNome = async (req, res) => {
    try{
        const banco = await Banco.findById(req.params.id)
        if(banco == null){
            return res.status(404).json({message: "Banco não encontrado."})
        }
        if(req.body.nome != null){
         banco.nome = req.body.nome
        }
        const bancoAtualizado = await banco.save()
        res.status(200).json(bancoAtualizado)
    }catch (error){
        res.status(500).json({ message: error.message})
    }
}

const updateEndereco = async (req, res) => {
    try{
        const banco = await Banco.findById(req.params.id)
        if(banco == null){
            return res.status(404).json({message: "Banco não encontrado."})
        }
        if(req.body.endereco != null){
            banco.endereco = req.body.endereco
        }
        const bancoAtualizado = await banco.save()
        res.status(200).json(bancoAtualizado)
    }catch (error){
        res.status(500).json({ message: error.message})
    }
}
const updateTelefone = async (req, res) => {
    try{
        const banco = await Banco.findById(req.params.id)
        if(banco == null){
            return res.status(404).json({message: "Banco não encontrado."})
        }
        if(req.body.telefone != null){
            banco.telefone = req.body.telefone
        }
        const bancoAtualizado = await banco.save()
        res.status(200).json(bancoAtualizado)
    }catch (error){
        res.status(500).json({ message: error.message})
    }
}


const deleteById = async (req, res) => {
    const banco = await Banco.findById(req.params.id)
        if(!banco == null){
            return res.status(404).json({message: "Banco não encontrado."})
        }
        try{
            await banco.remove()
            res.status(200).json({ message: "Banco excluído com sucesso." })
        } catch (error){
            res.status(500).json({ message: error.message})
        }
}
module.exports = {
    getAll,
    createbanco,
    updateOne,
    updateNome,
    updateEndereco,
    updateTelefone,
    deleteById
}