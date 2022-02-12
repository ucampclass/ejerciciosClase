const { Router } = require('express');
const {
  listarAlumnos,
  guardarNuevoAlumno,
  actualizaEdad,
} = require('../controller/alumnosController');
const router = Router();

router.get('/', listarAlumnos);
router.post('/', guardarNuevoAlumno);
router.put('/', actualizaEdad);

module.exports = router;
