const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, {
	useNewUrlParser: true
}).then(() => console.log('Conexion a la base de datos establecida...'))
.catch(err => console.log(`Error al conectar a la base de datos: ${err}`))

app.listen(config.port, () => {
	console.log(`API Libreria corriendo en http://localhost:${config.port}`)
})