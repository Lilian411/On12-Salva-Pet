const express = require('express')
const router = express.Router()
const controller = require('../controllers/recptorController')

// listar todos os bancos / get> find
router.get('/', controller.getAll )

//criar um novo banco /poasync (req, res) => 
router.post('/', controller.createTitle)

router.patch('/:id', controller.updateOne)
router.patch ('/:id', controller.updateOne)
router.patch('/pet/:id', controller.updatePet)
router.patch('/idade/:id', controller.updateIdade)
router.patch('/raca/:id', controller.updateRaca)
router.patch('/peso/:id', controller.updatePeso)
router.patch('/vacinas/:id', controller.updateVacinas)
router.patch('/dono/:id', controller.updateDono)
router.patch('/telefone/:id', controller.updateTelefone)
router.patch('/email/:id', controller.updateEmail)
router.patch('/local/:id', controller.updateLocal)

router.delete('/:id', controller.deleteById)


module.exports = router