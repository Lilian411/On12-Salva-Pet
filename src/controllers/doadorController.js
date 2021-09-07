const mongoose = require('mongoose')
const Doador = require('../models/doador')

const getAll = async (req, res) => {
    const doadores = await Doador.find()
    res.status(200).json(doador)
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
    const updateOne = async (req, res) => {
        try {
        const doador = await Doador.findById(req.params.id)
        if (doador == null) {
            return res.status(404).json({message: "doador não encontrado"})
        }
        if (req.body.nome != null) {
            doador.nome = req.body.nome
        }
        const doadorAtualizado = await doador.save()
        res.status(200).json(doadorAtualizado)

        } catch (err) {
            res.status(500).json({message: err.message})
        }
}
const updatePet = async (req, res) => {
    try{
        const doador = await Doador.findById(req.params.id)
        if(doador == null){
            return res.status(404).json({message: "Doador não encontrado."})
        }
        if(req.body.pet != null){
            doador.pet = req.body.pet
        }
        const petAtualizado = await doador.save()
        res.status(200).json(petAtualizado)
    }catch (error){
        res.status(500).json({ message: error.message})
    }
}

const updateIdade = async (req, res) => {
    try{
        const doador = await Doador.findById(req.params.id)
        if(doador == null){
            return res.status(404).json({message: "Doador não encontrado."})
        }
        if(req.body.idade != null){
            doador.idade = req.body.idade
        }
        const idadeAtualizada = await doador.save()
        res.status(200).json(idadeAtualizada)
    }catch (error){
        res.status(500).json({ message: error.message})
    }
}
const updateRaca = async (req, res) => {
    try{
        const doador = await Doador.findById(req.params.id)
        if(doador == null){
            return res.status(404).json({message: "Doador não encontrado."})
        }
        if(req.body.raca != null){
            doador.raca = req.body.raca
        }
        const racaAtualizada = await doador.save()
        res.status(200).json(racaAtualizada)
    }catch (error){
        res.status(500).json({ message: error.message})
    }
}
const updatePeso = async (req, res) => {
    try{
        const doador = await Doador.findById(req.params.id)
        if(doador == null){
            return res.status(404).json({message: "Doador não encontrado."})
        }
        if(req.body.peso != null){
            doador.peso = req.body.peso
        }
        const pesoAtualizado = await doador.save()
        res.status(200).json(pesoAtualizado)
    }catch (error){
        res.status(500).json({ message: error.message})
    }
}

 const updateVacinas = async (req, res) => {
    try{
        const doador = await Doador.findById(req.params.id)
        if(doador == null){
            return res.status(404).json({message: "Doador não encontrado."})
        }
        if(req.body.vacinas != null){
            doador.vacinas = req.body.vacinas
        }
        const vacinaAtualizado = await doador.save()
        res.status(200).json(vacinaAtualizado)
    }catch (error){
        res.status(500).json({ message: error.message})
    }
}

  const updateDono = async (req, res) => {
    try{
        const doador = await Doador.findById(req.params.id)
        if(doador == null){
            return res.status(404).json({message: "Doador não encontrado."})
        }
        if(req.body.dono != null){
            doador.dono = req.body.dono
        }
        const donoAtualizado = await doador.save()
        res.status(200).json(donoAtualizado)
    }catch (error){
        res.status(500).json({ message: error.message})
    }
}
  const updateTelefone = async (req, res) => {
    try{
        const doador = await Doador.findById(req.params.id)
        if(doador == null){
            return res.status(404).json({message: "Doador não encontrado."})
        }
        if(req.body.telefone != null){
            doador.telefone = req.body.telefone
        }
        const telefoneAtualizado = await doador.save()
        res.status(200).json(telefoneAtualizado)
    }catch (error){
        res.status(500).json({ message: error.message})
    }
} 
const updateEmail = async (req, res) => {
    try{
        const doador = await Doador.findById(req.params.id)
        if(doador == null){
            return res.status(404).json({message: "Doador não encontrado."})
        }
        if(req.body.email != null){
            doador.email = req.body.email
        }
        const emailAtualizado = await doador.save()
        res.status(200).json(emailAtualizado)
    }catch (error){
        res.status(500).json({ message: error.message})
    }
} 
const updateLocal = async (req, res) => {
    try{
        const doador = await Doador.findById(req.params.id)
        if(doador == null){
            return res.status(404).json({message: "Doador não encontrado."})
        }
        if(req.body.local != null){
            doador.local = req.body.local
        }
        const localAtualizado = await doador.save()
        res.status(200).json(localAtualizado)
    }catch (error){
        res.status(500).json({ message: error.message})
    }
} 

const deleteById = async (req, res) => {
    const doador = await Doador.findById(req.params.id)
        if(doador == null){
            return res.status(404).json({message: "Doador não encontrado."})
        }
        try{
            await doador.remove()
            res.status(200).json({ message: "Doador excluído com sucesso." })
        } catch (error){
            res.status(500).json({ message: error.message})
        }
}

module.exports = {
    getAll,
    createdoador,
    updateOne,
    updatePet,
    updateIdade,
    updateRaca,
    updatePeso,
    updateVacinas,
    updateDono,
    updateTelefone,
    updateEmail,
    updateLocal,
    deleteById
}