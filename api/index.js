const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Importamos rutas
const usuariosRuta = require('./routes/usuarios');
const cursosRuta = require('./routes/cursos');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/usuarios', usuariosRuta);
app.use('/cursos', cursosRuta);

app.listen(8000, () => {
  console.log('corriendo servidor...');
});
