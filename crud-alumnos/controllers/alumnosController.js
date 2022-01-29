const {
  obtenerTodosLosAlumnos,
  crearUnAlumno,
} = require('../bussinesLogic/alumnosBL');

const respuesta = {
  messages: '',
  status: true,
  data: [],
  errors: [],
};

const obtenerAlumnos = (req, res) => {
  const resultado = obtenerTodosLosAlumnos();

  if (resultado === undefined) {
    respuesta.messages = 'Alumno no encontrado';
    respuesta.status = false;
    respuesta.data = [];
    return res.status(404).json(respuesta);
  }

  respuesta.messages = 'Success';
  respuesta.data = resultado;
  res.json(respuesta);
};

const creaUnNuevoAlumno = (req, res) => {
  const resultado = crearUnAlumno(
    req.body.nombre,
    req.body.apellido,
    req.body.edad,
    req.body.sexo
  );
  respuesta.messages = 'Alumno creado correctamente';
  respuesta.data = resultado;

  return res.status(201).json(respuesta);
};

const actualizaAlumno = (req, res) => {
  respuesta.messages = 'Este es un put';
  return res.json(respuesta);
};

const eliminaAlumno = (res, req) => {
  respuesta.messages = 'Este es un delete';
  return req.json(respuesta);
};

module.exports = {
  obtenerAlumnos,
  creaUnNuevoAlumno,
  actualizaAlumno,
  eliminaAlumno,
};
