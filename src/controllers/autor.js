const Autor = require('../models/autor')

function getAutor(req, res) {
	let autorId = req.params.autorId

	Autor.findById(autorId, (err, autor) => {
		if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
		if (!autor) return res.status(404).send({message: 'El autor no existe'})
		
		res.status(200).send({ autor })
	})
}

function getAutors(req, res) {
	Autor.find({}, (err, autors) => {
		if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
		if (!autors) return res.status(404).send({message: 'No existen autores'})

		res.status(200).send({ autors });
	})
}

function updateAutor(req, res) {
	let autorId = req.params.autorId
	let update = req.body

	Autor.findByIdAndUpdate(autorId, update, (err, autorUpdated) => {
		if (err) return res.status(500).send({message: `Error al actualizar el autor: ${err}`})

		res.status(200).send({ autor: autorUpdated })		
	})
}

function deleteAutor(req, res) {
	let autorId = req.params.autorId

	Autor.findById(autorId, (err, autor) => {
		if (err) return res.status(500).send({message: `Error al borrar el autor: ${err}`})
		
		autor.remove(err => {
			if (err) return res.status(500).send({message: `Error al borrar el autor: ${err}`})	
			res.status(200).send({message: 'El autor ha sido eliminado'})
		})
	})
}

function saveAutor(req, res) {
	console.log('POST /api/autor')
	console.log(req.body)

	let autor = new Autor()

	autor.nombre = req.body.nombre
	autor.annonac = req.body.annonac
	autor.ciudad = req.body.ciudad
	autor.pais = req.body.pais
	autor.estudios = req.body.estudios

	autor.save((err, autorStored) => {
		if (err) 
			res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
		res.status(200).send({autor: autorStored})
	})
}

module.exports = {
	getAutor,
	getAutors,
	updateAutor,
	deleteAutor,
	saveAutor
}