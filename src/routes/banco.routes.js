const express = require('express')
const router = express.Router()
const controller = require ('../controllers/bancoController')


// listar todos os bancos / get> find
router.get('/', controller.getAll)
//criar um novo banco /post > save
router.post('/', controller.createbanco)
//listar um banco /get/findById

//atualizar uma informaçao especifica num banco/patch/findById/save

//deletar um titulo/delete/findById/remove
module.exports = router