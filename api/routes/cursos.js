const express = require('express');
const router = express.Router();

// localhost:8000/cursos/
router.get('/', (req, res) => {
  return res.json({ name: 'Saludos desde mi nueva carpeta' });
});

module.exports = router;
