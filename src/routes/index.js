const express = require('express')
const temaCtrl = require('../controllers/tema')
const Tema = require('../models/tema')
const editorialCtrl = require('../controllers/editorial')
const Editorial = require('../models/editorial')
const autorCtrl = require('../controllers/autor')
const Autor = require('../models/autor')
const libroCtrl = require('../controllers/libro')
const Libro = require('../models/libro')
const faker = require('faker')
const api = express.Router()

//********************************************************
//Rutas API y Faker Tema
api.get('/tema', temaCtrl.getTemas)
api.post('/tema', temaCtrl.saveTema)
api.get('/tema/:temaId', temaCtrl.getTema)
api.delete('/tema/:temaId', temaCtrl.deleteTema)
api.put('/tema/:temaId', temaCtrl.updateTema)

api.get('/fake-temas', (req, res) => {
	for(let i = 0; i < 11; i++){
		const tema = new Tema()

		tema.nombre = faker.lorem.word()

		tema.save(err => {
			if(err) { return next(err) }
		});
		console.log(tema)
	}
	res.redirect('/api/tema');
});
//********************************************************

//********************************************************
//Rutas API y Faker Editorial
api.get('/editorial', editorialCtrl.getEditorials)
api.post('/editorial', editorialCtrl.saveEditorial)
api.get('/editorial/:editorialId', editorialCtrl.getEditorial)
api.delete('/editorial/:editorialId', editorialCtrl.deleteEditorial)
api.put('/editorial/:editorialId', editorialCtrl.updateEditorial)

api.get('/fake-editorials', (req, res) => {
	for(let i = 0; i < 11; i++){
		const editorial = new Editorial()

		editorial.nombre = faker.company.companyName()
		editorial.telefono = faker.phone.phoneNumber()
		editorial.contacto = faker.name.findName()
		editorial.direccion = faker.address.streetAddress()

		editorial.save(err => {
			if(err) { return next(err) }
		});
		console.log(editorial)
	}
	res.redirect('/api/editorial');
});
//********************************************************

//********************************************************
//Rutas API y Faker Autor
api.get('/autor', autorCtrl.getAutors)
api.post('/autor', autorCtrl.saveAutor)
api.get('/autor/:autorId', autorCtrl.getAutor)
api.delete('/autor/:autorId', autorCtrl.deleteAutor)
api.put('/autor/:autorId', autorCtrl.updateAutor)

api.get('/fake-autors', (req, res) => {
	for(let i = 0; i < 11; i++){
		const autor = new Autor()

		autor.nombre = faker.name.findName()
		autor.annonac = faker.random.arrayElement(["1922","1919","1958","1969","1970","1854","1911","1963","1960","1740","1865"]);
		autor.ciudad = faker.address.city()
		autor.pais = faker.address.country()
		autor.estudios = faker.random.arrayElement(["La Sorbonne","Univ. Harvard","Univ. París","Univ. Berlín","Univ. Salamanca","Univ. Sevilla","Univ. Valencia","Univ. Stanfield"]);

		autor.save(err => {
			if(err) { return next(err) }
		});
		console.log(autor)
	}
	res.redirect('/api/autor');
});
//********************************************************

//********************************************************
//Rutas API Libro
api.get('/libro', libroCtrl.getLibros)
api.post('/libro', libroCtrl.saveLibro)
api.get('/libro/:libroId', libroCtrl.getLibro)
api.delete('/libro/:libroId', libroCtrl.deleteLibro)
api.put('/libro/:libroId', libroCtrl.updateLibro)

//********************************************************

module.exports = api