const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TemaSchema = Schema({
	nombre: String
})

module.exports = mongoose.model('Tema', TemaSchema)