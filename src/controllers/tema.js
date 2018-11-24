const Tema = require('../models/tema')

function getTema(req, res) {
	let temaId = req.params.temaId

	Tema.findById(temaId, (err, tema) => {
		if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
		if (!tema) return res.status(404).send({message: 'El Tema no existe'})
		
		res.status(200).send({ tema })
	})
}

function getTemas(req, res) {
	Tema.find({}, (err, temas) => {
		if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
		if (!temas) return res.status(404).send({message: 'No existen temas'})

		res.status(200).send({ temas });
	})
}

function updateTema(req, res) {
	let temaId = req.params.temaId
	let update = req.body

	Tema.findByIdAndUpdate(temaId, update, (err, temaUpdated) => {
		if (err) return res.status(500).send({message: `Error al actualizar el tema: ${err}`})

		res.status(200).send({ tema: temaUpdated })		
	})
}

function deleteTema(req, res) {
	let temaId = req.params.temaId

	Tema.findById(temaId, (err, tema) => {
		if (err) return res.status(500).send({message: `Error al borrar el tema: ${err}`})
		
		tema.remove(err => {
			if (err) return res.status(500).send({message: `Error al borrar el tema: ${err}`})	
			res.status(200).send({message: 'El tema ha sido eliminado'})
		})
	})
}

function saveTema(req, res) {
	console.log('POST /api/tema')
	console.log(req.body)

	let tema = new Tema()
	
	tema.nombre = req.body.nombre

	tema.save((err, temaStored) => {
		if (err) 
			res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
		res.status(200).send({tema: temaStored})
	})
}

module.exports = {
	getTema,
	getTemas,
	updateTema,
	deleteTema,
	saveTema
}