const Editorial = require('../models/editorial')

function getEditorial(req, res) {
	let editorialId = req.params.editorialId

	Editorial.findById(editorialId, (err, editorial) => {
		if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
		if (!editorial) return res.status(404).send({message: 'El Editorial no existe'})
		
		res.status(200).send({ editorial })
	})
}

function getEditorials(req, res) {
	Editorial.find({}, (err, editorials) => {
		if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
		if (!editorials) return res.status(404).send({message: 'No existen editoriales'})

		res.status(200).send({ editorials });
	})
}

function updateEditorial(req, res) {
	let editorialId = req.params.editorialId
	let update = req.body

	Editorial.findByIdAndUpdate(editorialId, update, (err, editorialUpdated) => {
		if (err) return res.status(500).send({message: `Error al actualizar el Editorial: ${err}`})

		res.status(200).send({ tema: editorialUpdated })		
	})
}

function deleteEditorial(req, res) {
	let editorialId = req.params.editorialId

	Editorial.findById(editorialId, (err, editorial) => {
		if (err) return res.status(500).send({message: `Error al borrar el editorial: ${err}`})
		
		editorial.remove(err => {
			if (err) return res.status(500).send({message: `Error al borrar el editorial: ${err}`})	
			res.status(200).send({message: 'El Editorial ha sido eliminado'})
		})
	})
}

function saveEditorial(req, res) {
	console.log('POST /api/Editorial')
	console.log(req.body)

	let editorial = new Editorial()
	
	editorial.nombre = req.body.nombre
	editorial.telefono = req.body.telefono
	editorial.contacto = req.body.contacto
	editorial.direccion = req.body.direccion

	editorial.save((err, editorialStored) => {
		if (err) 
			res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
		res.status(200).send({editorial: editorialStored})
	})
}

module.exports = {
	getEditorial,
	getEditorials,
	updateEditorial,
	deleteEditorial,
	saveEditorial
}