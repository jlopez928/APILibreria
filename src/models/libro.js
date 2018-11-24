const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Autor = mongoose.model('Autor')
const Editorial = mongoose.model('Editorial')
const Tema = mongoose.model('Tema')

const LibroSchema = Schema({
	titulo: String,
	autors: {type: Schema.ObjectId, ref: "Autor"},
	editorials: {type: Schema.ObjectId, ref: "Editorial"},
	temas: {type: Schema.ObjectId, ref: "Tema"},
	precio: String,
	edicion: String,
	anno: String,
	paginas: String
})

module.exports = mongoose.model('Libro', LibroSchema)