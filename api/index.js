const express = require('express');
const app = express();

const DB = [
  { id: 1, nombre: 'Juan', edad: 25 },
  { id: 2, nombre: 'Ana', edad: 30 },
  { id: 3, nombre: 'Pedro', edad: 35 },
];

//Rutas en Expressjs
//solicitud => request -> req
//responder => response -> res
// app.get(ruta, (req, res)=> {})
app.get('/', (req, res) => {
  res.send('Hola mundo, esta es mi primer api');
});

app.get('/usuarios', (req, res) => {
  const resultado = {
    messages: 'Todo en OK',
    success: true,
    data: DB,
  };

  return res.json(resultado);
});

app.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const buscarPorId = DB.find((usuario) => usuario.id.toString() === id);

  if (buscarPorId) {
    return res.json(buscarPorId);
  }

  return res.status(404).send();
});

app.get('/clientes', (req, res) => {
  return res.json({ nombre: 'Soy un cliente' });
});

// app.listen(puerto, function)
app.listen(8000, () => {
  console.log('corriendo servidor...');
});
