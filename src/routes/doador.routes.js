const express = require('express')
const router = express.Router()
const controller = require ('../controllers/doadorController')

router.get('/', controller.getAll)
//criar um novo banco /post > save
router.post('/', controller.createdoador)
//listar um banco /get/findById

//atualizar uma informaçao especifica num banco/patch/findById/save

//deletar um titulo/delete/findById/remove
module.exports = router