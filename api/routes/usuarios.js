const { Router } = require('express');
const {
  getUsuario,
  detalle,
  guardaUsuario,
} = require('../controllers/usuariosController');
const router = Router();
// /usuarios/ GET
router.get('/', getUsuario);
// /usuario/:id GET -> Obtiene detalle por id
router.get('/:id', detalle);
// /usuarios/ POST
router.post('/', guardaUsuario);

module.exports = router;
