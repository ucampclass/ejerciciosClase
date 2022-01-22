const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Importamos rutas
const usuariosRuta = require('./routes/usuarios');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/usuarios', usuariosRuta);

//Rutas en Expressjs
//solicitud => request -> req
//responder => response -> res
// app.get(ruta, (req, res)=> {})

// app.listen(puerto, function)
app.listen(8000, () => {
  console.log('corriendo servidor...');
});
