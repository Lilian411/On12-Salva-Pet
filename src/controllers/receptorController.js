const mongoose = require('mongoose')
const Receptor = require('../models/receptor')


const getAll =  async ( req, res) => {
    const receptores = await Receptor.find()
        res.status(200).json(receptores)
    }
    const createReceptor =  async (req, res) => {
        const receptor = new Receptor ({
       _id: new mongoose.Types.ObjectId(),
        pet: req.body.pet,
        idade: req.body.idade,
        raca: req.body.raca,
        peso: req.body.peso,
        vacinas: req.body.vacinas,
        dono: req.body.dono,
        telefone: req.body.telefone,
        email: req.body.email,
        local: req.body.local,
        creadoEm: req.body.criadoEm
        })
        try{
         const novoReceptor = await receptor.save()
         res.status(201).json(novoReceptor)
        } catch (err) {
            res.status(400).json({ message: err.message})
        }
    }
    //listar um banco /get/findById
    
    //atualizar uma informaçao especifica num banco/patch/findById/save
    const updateOne = async (req, res) => {
        try {
        const receptor = await Receptor.findById(req.params.id)
        if (receptor == null) {
            return res.status(404).json({message: "receptor não encontrado"})
        }
        if (req.body.nome != null) {
            receptor.nome = req.body.nome
        }
        const receptorAtualizado = await receptor.save()
        res.status(200).json(receptorAtualizado)
        
        } catch (err) {
            res.status(500).json({message: err.message})
        }
    }
    const updatePet = async (req, res) => {
        try{
            const receptor = await Receptor.findById(req.params.id)
            if(receptor == null){
                return res.status(404).json({message: "Receptor não encontrado."})
            }
            if(req.body.pet != null){
                receptor.pet = req.body.pet
            }
            const petAtualizado = await receptor.save()
            res.status(200).json(petAtualizado)
        }catch (error){
            res.status(500).json({ message: error.message})
        }
    }
    
    const updateIdade = async (req, res) => {
        try{
            const receptor = await Receptor.findById(req.params.id)
            if(receptor == null){
                return res.status(404).json({message: "Receptor não encontrado."})
            }
            if(req.body.idade != null){
                receptor.idade = req.body.idade
            }
            const idadeAtualizada = await receptor.save()
            res.status(200).json(idadeAtualizada)
        }catch (error){
            res.status(500).json({ message: error.message})
        }
    }
    const updateRaca = async (req, res) => {
        try{
            const receptor = await Receptor.findById(req.params.id)
            if(receptor == null){
                return res.status(404).json({message: "Receptor não encontrado."})
            }
            if(req.body.raca != null){
                receptor.raca = req.body.raca
            }
            const racaAtualizada = await receptor.save()
            res.status(200).json(racaAtualizada)
        }catch (error){
            res.status(500).json({ message: error.message})
        }
    }
    const updatePeso = async (req, res) => {
        try{
            const receptor = await Receptor.findById(req.params.id)
            if(receptor == null){
                return res.status(404).json({message: "Receptor não encontrado."})
            }
            if(req.body.peso != null){
                receptor.peso = req.body.peso
            }
            const pesoAtualizado = await receptor.save()
            res.status(200).json(pesoAtualizado)
        }catch (error){
            res.status(500).json({ message: error.message})
        }
    }
    
     const updateVacinas = async (req, res) => {
        try{
            const receptor = await Receptor.findById(req.params.id)
            if(receptor == null){
                return res.status(404).json({message: "Receptor não encontrado."})
            }
            if(req.body.vacinas != null){
                receptor.vacinas = req.body.vacinas
            }
            const vacinaAtualizado = await receptor.save()
            res.status(200).json(vacinaAtualizado)
        }catch (error){
            res.status(500).json({ message: error.message})
        }
    }
    
      const updateDono = async (req, res) => {
        try{
            const receptor = await Receptor.findById(req.params.id)
            if(receptor == null){
                return res.status(404).json({message: "Receptor não encontrado."})
            }
            if(req.body.dono != null){
                receptor.dono = req.body.dono
            }
            const donoAtualizado = await receptor.save()
            res.status(200).json(donoAtualizado)
        }catch (error){
            res.status(500).json({ message: error.message})
        }
    }
      const updateTelefone = async (req, res) => {
        try{
            const receptor = await Receptor.findById(req.params.id)
            if(receptor == null){
                return res.status(404).json({message: "Receptor não encontrado."})
            }
            if(req.body.telefone != null){
                receptor.telefone = req.body.telefone
            }
            const telefoneAtualizado = await receptor.save()
            res.status(200).json(telefoneAtualizado)
        }catch (error){
            res.status(500).json({ message: error.message})
        }
    } 
    const updateEmail = async (req, res) => {
        try{
            const receptor = await Receptor.findById(req.params.id)
            if(receptor == null){
                return res.status(404).json({message: "Receptor não encontrado."})
            }
            if(req.body.email != null){
                receptor.email = req.body.email
            }
            const emailAtualizado = await receptor.save()
            res.status(200).json(emailAtualizado)
        }catch (error){
            res.status(500).json({ message: error.message})
        }
    } 
    const updateLocal = async (req, res) => {
        try{
            const receptor = await Receptor.findById(req.params.id)
            if(receptor == null){
                return res.status(404).json({message: "Receptor não encontrado."})
            }
            if(req.body.local != null){
                receptor.local = req.body.local
            }
            const localAtualizado = await receptor.save()
            res.status(200).json(localAtualizado)
        }catch (error){
            res.status(500).json({ message: error.message})
        }
    } 
    
    const deleteById = async (req, res) => {
        const receptor = await Recptor.findById(req.params.id)
            if(receptor == null){
                return res.status(404).json({message: "Receptor não encontrado."})
            }
            try{
                await receptor.remove()
                res.status(200).json({ message: "Receptor excluído com sucesso." })
            } catch (error){
                res.status(500).json({ message: error.message})
            }
    }
    
    module.exports = {
        getAll,
        createReceptor,
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