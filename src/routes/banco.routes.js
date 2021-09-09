const express = require('express')
const router = express.Router()
const controller = require ('../controllers/bancoController')
 
router.get('/oi', (req, res) => {
    res.status(200).send({"mensagem":"oi estou funcionando"})
}
)
// listar todos os bancos / get> find
router.get ('/todos', controller.getAll)
//criar um novo banco /post > save
router.post ('/cadastrar', controller.createbanco)
//listar um banco /get/findById

//atualizar uma informaçao especifica num banco/patch/findById/save
router.patch ('/:id', controller.updateOne)
router.patch('/nome/:id', controller.updateNome)
router.patch('/endereco/:id', controller.updateEndereco)
router.patch('/telefone/:id', controller.updateTelefone)
//deletar um titulo/delete/findById/remove
router.delete('/deletar/:id', controller.deleteById)

module.exports = router