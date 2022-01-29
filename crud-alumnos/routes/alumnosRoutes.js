const { Router } = require('express');
const router = Router();
const {
  obtenerAlumnos,
  creaUnNuevoAlumno,
  actualizaAlumno,
  eliminaAlumno,
} = require('../controllers/alumnosController');

// Obtiene todo los alumnos
router.get('/', obtenerAlumnos);
// Crea un nuevo alumno
router.post('/', creaUnNuevoAlumno);
// Actualiza un alumno
router.put('/', actualizaAlumno);
// Elimina un alumno
router.delete('/', eliminaAlumno);

module.exports = router;
