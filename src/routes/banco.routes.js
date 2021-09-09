const express = require('express')
const router = express.Router()
const controller = require ('../controllers/bancoController')

 

//listar todos os bancos / get> find
router.get ('/todos', controller.getAll)
//criar um novo banco /post > save
router.post ('/cadastrar', controller.createbanco)

//atualizar uma informaçao especifica num banco
router.patch ('/:id', controller.updateOne)
router.patch('/nome/:id', controller.updateNome)
router.patch('/endereco/:id', controller.updateEndereco)
router.patch('/telefone/:id', controller.updateTelefone)

router.delete('/deletar/:id', controller.deleteById)

module.exports = router