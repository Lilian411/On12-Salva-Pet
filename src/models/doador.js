const mongoose = require("mongoose");

const doadorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    pet: {
        type: String,
        required: true
    },
    idade: {
        type: String,
        required: true
    },
    raca: {
        type: String,
        required: true
    },
    peso: {
        type: String,
        required: true
    },
    vacinas:{
        type: String,
        required: true
    },
    dono:{
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    local: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('doador', doadorSchema)