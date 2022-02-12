const {
  listarAlumnos,
  guardarAlumnoRepository,
  actualizarEdadRepository,
} = require('../repositorys/alumnosRepository');

const listarAlumnosActuales = async () => {
  const resultado = await listarAlumnos();
  const data = resultado.map((x) => {
    return {
      _id: x._id,
      nombre: x.nombre,
      apellidoPaterno: x.apellido_paterno,
      apellidoMaterno: x.apellido_materno,
    };
  });

  return data;
};

const agregarBL = async (
  nombre,
  apellido_paterno,
  apellido_materno,
  edad,
  sexo,
  direccion,
  estado_civil
) => {
  const modelo = {
    nombre,
    apellido_paterno,
    apellido_materno,
    edad,
    sexo,
    direccion,
    estado_civil,
  };
  const resultado = await guardarAlumnoRepository(modelo);

  return resultado;
};

const actualizarEdadBL = async (id, edad) => {
  const result = await actualizarEdadRepository(id, edad);

  return result;
};

module.exports = { listarAlumnosActuales, agregarBL, actualizarEdadBL };
