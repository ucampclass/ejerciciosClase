const { Router } = require('express');
const router = Router();

const DB = [
  { id: 1, nombre: 'Juan', edad: 25 },
  { id: 2, nombre: 'Ana', edad: 30 },
  { id: 3, nombre: 'Pedro', edad: 35 },
];

// localhost:8000/usuarios/
// localhost:8000/usuarios/usuarios
router.get('/', (req, res) => {
  const resultado = {
    messages: 'Todo en OK desde el archivo de rutas',
    success: true,
    data: DB,
  };

  return res.json(resultado);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const buscarPorId = DB.find((usuario) => usuario.id.toString() === id);

  if (buscarPorId) {
    return res.json(buscarPorId);
  }

  return res.status(404).send();
});

// POST -> localhost:8000/usuarios/usuarios
router.post('/', (req, res) => {
  const alta = req.body;
  const agregar = {
    id: DB.length + 1,
    nombre: alta.nombre,
    edad: alta.edad,
  };

  DB.push(agregar);

  return res.status(201).json();
});

module.exports = router;
