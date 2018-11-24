const libro = require('../models/libro')

function getLibro(req, res) {
	let libroId = req.params.libroId

	Libro.findById(libroId, (err, libro) => {
		if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
		if (!libro) return res.status(404).send({message: 'El libro no existe'})
		
		res.status(200).send({ libro })
	})
}

function getLibros(req, res) {
	Libro.find({}, (err, libros) => {
		if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
		if (!libros) return res.status(404).send({message: 'No existen libros'})

		res.status(200).send({ libros });
	})
}

function updateLibro(req, res) {
	let libroId = req.params.libroId
	let update = req.body

	Libro.findByIdAndUpdate(libroId, update, (err, libroUpdated) => {
		if (err) return res.status(500).send({message: `Error al actualizar el libro: ${err}`})

		res.status(200).send({ libro: libroUpdated })		
	})
}

function deleteLibro(req, res) {
	let libroId = req.params.libroId

	Libro.findById(libroId, (err, libro) => {
		if (err) return res.status(500).send({message: `Error al borrar el libro: ${err}`})
		
		libro.remove(err => {
			if (err) return res.status(500).send({message: `Error al borrar el libro: ${err}`})	
			res.status(200).send({message: 'El libro ha sido eliminado'})
		})
	})
}

function saveLibro(req, res) {
	console.log('POST /api/libro')
	console.log(req.body)

	let libro = new libro()

	libro.titulo = req.body.titulo
	libro.autors = req.body.autors
	libro.editorials = req.body.editorials
	libro.temas = req.body.temas
	libro.precio = req.body.precio
	libro.edicion = req.body.edicion
	libro.anno = req.body.anno
	libro.paginas = req.body.paginas

	libro.save((err, libroStored) => {
		if (err) 
			res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
		res.status(200).send({libro: libroStored})
	})
}

module.exports = {
	getLibro,
	getLibros,
	updateLibro,
	deleteLibro,
	saveLibro
}