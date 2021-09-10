const express = require('express')
const router = express.Router()
const controller = require ('../controllers/bancoController')

router.get ('/todos', controller.getAll)
router.post ('/cadastrar', controller.createbanco)
router.patch ('/:id', controller.updateOne)
router.patch('/nome/:id', controller.updateNome)
router.patch('/endereco/:id', controller.updateEndereco)
router.patch('/telefone/:id', controller.updateTelefone)

router.delete('/deletar/:id', controller.deleteById)

module.exports = router