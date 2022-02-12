/**
 * Importaciones
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const { dbConnection } = require('./config/database/mongodb');
const alumnosRouter = require('./routes/alunmnosRouter');

const app = express();
dbConnection();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Rutas
 */
app.use('/api/alumnos', alumnosRouter);

app.listen(process.env.PORT, () => {
  console.log('corriendo servidor...');
});
