const express = require('express')
const router = express.Router()
const controller = require('../controllers/recptorController')

// listar todos os bancos / get> find
router.get('/', controller.getAll )

//criar um novo banco /poasync (req, res) => {
router.post('/', controller.createTitle)

module.exports = router