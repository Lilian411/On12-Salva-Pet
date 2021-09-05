const mongoose = require('mongoose')
const Recptor = require('../models/recptor')

const getAll =  async ( req, res) => {
    const recptores = await Recptor.find()
        res.status(200).json(recptores)
    }

    const createTitle =  async (req, res) => {
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
    
    //deletar um titulo/delete/findById/remove


module.exports = {
getAll,
createTitle
}