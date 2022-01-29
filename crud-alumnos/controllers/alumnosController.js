const {
  obtenerTodosLosAlumnos,
  crearUnAlumno,
  obtenerAlumnoPorId,
  actualizarAlumno,
  eliminarAlumno,
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
  const validoSiExiste = obtenerAlumnoPorId(req.body.id);

  if (!validoSiExiste) {
    (respuesta.messages = 'El alumno no existe'), (respuesta.status = false);
    respuesta.data = [];

    return res.status(404).json(respuesta);
  }

  respuesta.data = actualizarAlumno(req.body.id, req.body.sexo, req.body.edad);
  respuesta.messages = 'Se actualizo el alumno correctamente';
  return res.json(respuesta);
};

const eliminaAlumno = (req, res) => {
  const validoSiExiste = obtenerAlumnoPorId(req.body.id);

  if (!validoSiExiste) {
    (respuesta.messages = 'El alumno no existe'), (respuesta.status = false);
    respuesta.data = [];

    return res.status(404).json(respuesta);
  }

  eliminarAlumno(req.body.id);
  respuesta.messages = 'Alumno eliminado correctamente';
  respuesta.data = [];
  return res.json(respuesta);
};

module.exports = {
  obtenerAlumnos,
  creaUnNuevoAlumno,
  actualizaAlumno,
  eliminaAlumno,
};
