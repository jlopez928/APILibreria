const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AutorSchema = Schema({
	nombre: String,
	annonac: String,
	ciudad: String,
	pais: String,
	estudios: String
})

module.exports = mongoose.model('Autor', AutorSchema)