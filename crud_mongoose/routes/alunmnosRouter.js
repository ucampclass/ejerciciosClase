const { Router } = require('express');
const { listarAlumnos } = require('../controller/alumnosController');
const router = Router();

router.get('/', listarAlumnos);

module.exports = router;
