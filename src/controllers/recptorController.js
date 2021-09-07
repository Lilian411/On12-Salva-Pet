const mongoose = require('mongoose')
const recptor = require('../models/recptor')
const Recptor = require('../models/recptor')

const getAll =  async ( req, res) => {
    const recptores = await Recptor.find()
        res.status(200).json(recptores)
    }
    const createRecptor =  async (req, res) => {
        const recptor = new Recptor ({
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
         const novoRecptor = await recptor.save()
         res.status(201).json(novoRecptor)
        } catch (err) {
            res.status(400).json({ message: err.message})
        }
    }
    //listar um banco /get/findById
    
    //atualizar uma informaçao especifica num banco/patch/findById/save
    const updateOne = async (req, res) => {
        try {
        const recptor = await Recptor.findById(req.params.id)
        if (recptor == null) {
            return res.status(404).json({message: "receptor não encontrado"})
        }
        if (req.body.nome != null) {
            recptor.nome = req.body.nome
        }
        const recptorAtualizado = await recptor.save()
        res.status(200).json(recptorAtualizado)
        
        } catch (err) {
            res.status(500).json({message: err.message})
        }
    }
    const updatePet = async (req, res) => {
        try{
            const recptor = await Recptor.findById(req.params.id)
            if(recptor == null){
                return res.status(404).json({message: "Recptor não encontrado."})
            }
            if(req.body.pet != null){
                recptor.pet = req.body.pet
            }
            const petAtualizado = await recptor.save()
            res.status(200).json(petAtualizado)
        }catch (error){
            res.status(500).json({ message: error.message})
        }
    }
    
    const updateIdade = async (req, res) => {
        try{
            const recptor = await Recptor.findById(req.params.id)
            if(recptor == null){
                return res.status(404).json({message: "Recptor não encontrado."})
            }
            if(req.body.idade != null){
                recptor.idade = req.body.idade
            }
            const idadeAtualizada = await recptor.save()
            res.status(200).json(idadeAtualizada)
        }catch (error){
            res.status(500).json({ message: error.message})
        }
    }
    const updateRaca = async (req, res) => {
        try{
            const recptor = await Recptor.findById(req.params.id)
            if(recptor == null){
                return res.status(404).json({message: "Recptor não encontrado."})
            }
            if(req.body.raca != null){
                recptor.raca = req.body.raca
            }
            const racaAtualizada = await recptor.save()
            res.status(200).json(racaAtualizada)
        }catch (error){
            res.status(500).json({ message: error.message})
        }
    }
    const updatePeso = async (req, res) => {
        try{
            const recptor = await Recptor.findById(req.params.id)
            if(recptor == null){
                return res.status(404).json({message: "Recptor não encontrado."})
            }
            if(req.body.peso != null){
                recptor.peso = req.body.peso
            }
            const pesoAtualizado = await recptor.save()
            res.status(200).json(pesoAtualizado)
        }catch (error){
            res.status(500).json({ message: error.message})
        }
    }
    
     const updateVacinas = async (req, res) => {
        try{
            const recptor = await Recptor.findById(req.params.id)
            if(recptor == null){
                return res.status(404).json({message: "Recptor não encontrado."})
            }
            if(req.body.vacinas != null){
                recptor.vacinas = req.body.vacinas
            }
            const vacinaAtualizado = await recptor.save()
            res.status(200).json(vacinaAtualizado)
        }catch (error){
            res.status(500).json({ message: error.message})
        }
    }
    
      const updateDono = async (req, res) => {
        try{
            const recptor = await Recptor.findById(req.params.id)
            if(recptor == null){
                return res.status(404).json({message: "Recptor não encontrado."})
            }
            if(req.body.dono != null){
                recptor.dono = req.body.dono
            }
            const donoAtualizado = await recptor.save()
            res.status(200).json(donoAtualizado)
        }catch (error){
            res.status(500).json({ message: error.message})
        }
    }
      const updateTelefone = async (req, res) => {
        try{
            const recptor = await Recptor.findById(req.params.id)
            if(recptor == null){
                return res.status(404).json({message: "Recptor não encontrado."})
            }
            if(req.body.telefone != null){
                recptor.telefone = req.body.telefone
            }
            const telefoneAtualizado = await recptor.save()
            res.status(200).json(telefoneAtualizado)
        }catch (error){
            res.status(500).json({ message: error.message})
        }
    } 
    const updateEmail = async (req, res) => {
        try{
            const recptor = await Recptor.findById(req.params.id)
            if(recptor == null){
                return res.status(404).json({message: "Recptor não encontrado."})
            }
            if(req.body.email != null){
                recptor.email = req.body.email
            }
            const emailAtualizado = await recptor.save()
            res.status(200).json(emailAtualizado)
        }catch (error){
            res.status(500).json({ message: error.message})
        }
    } 
    const updateLocal = async (req, res) => {
        try{
            const recptor = await Recptor.findById(req.params.id)
            if(recptor == null){
                return res.status(404).json({message: "Recptor não encontrado."})
            }
            if(req.body.local != null){
                recptor.local = req.body.local
            }
            const localAtualizado = await recptor.save()
            res.status(200).json(localAtualizado)
        }catch (error){
            res.status(500).json({ message: error.message})
        }
    } 
    
    const deleteById = async (req, res) => {
        const recptor = await Recptor.findById(req.params.id)
            if(recptor == null){
                return res.status(404).json({message: "Recptor não encontrado."})
            }
            try{
                await recptor.remove()
                res.status(200).json({ message: "Recptor excluído com sucesso." })
            } catch (error){
                res.status(500).json({ message: error.message})
            }
    }
    
    module.exports = {
        getAll,
        createRecptor,
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