const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EditorialSchema = Schema({
	nombre: String,
	telefono: String,
	contacto: String,
	direccion: String
})

module.exports = mongoose.model('Editorial', EditorialSchema)