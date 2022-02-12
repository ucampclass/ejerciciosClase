const { listarAlumnos } = require('../repositorys/alumnosRepository');

const listarAlumnosActuales = async () => {
  const resultado = await listarAlumnos();

  return resultado;
};

module.exports = { listarAlumnosActuales };
