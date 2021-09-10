const express = require('express')
const router = express.Router()
const controller = require('../controllers/receptorController')

router.get('/todos', controller.getAll )
router.post('/cadastrar', controller.createReceptor)

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

router.delete('/deletar/:id', controller.deleteById)


module.exports = router