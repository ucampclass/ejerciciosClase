const { Router } = require('express');
const router = Router();
const { obtener } = require('../controllers/rolController');

router.get('/', obtener);

module.exports = router;
