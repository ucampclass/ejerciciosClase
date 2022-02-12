const { listarAlumnosActuales } = require('../bussinesLogic/alumnosBL');
const response = { success: true, messages: '', data: [] };

const listarAlumnos = async (req, res) => {
  response.data = await listarAlumnosActuales();
  response.messages = 'Ok';

  return res.json(response);
};

module.exports = { listarAlumnos };
