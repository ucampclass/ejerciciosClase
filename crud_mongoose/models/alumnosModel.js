const { model, Schema } = require('mongoose');

const alumnoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido_paterno: {
    type: String,
    required: true,
  },
  apellido_materno: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
    default: 0,
  },
  sexo: {
    type: String,
    default: '',
  },
  direccion: {
    type: String,
    default: '',
  },
  estado_civil: {
    type: String,
    default: 'soltero',
  },
});

//model(nombre de la coleccion, su esquema)
module.exports = model('alumno', alumnoSchema);
