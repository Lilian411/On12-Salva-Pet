const express = require("express")
const mongoose = require('mongoose')
const app = express()
const cors = require("cors")
const db = require("../src/data/database")

db.connect()

app.use(cors())
app.use(express.json())



const bancoRouter = require('./src/routes/banco.routes')
app.use('/banco', bancoRouter)

const doadorRouter = require('./src/routes/doador.routes')
app.use('/doador', doadorRouter)

const receptorRouter = require('./src/routes/receptor.routes')
app.use('/receptor', receptorRouter) 

module.exports = app
