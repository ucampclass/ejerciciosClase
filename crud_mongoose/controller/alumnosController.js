const { listarAlumnosActuales } = require('../bussinesLogic/alumnosBL');
const response = { success: true, messages: '', data: [] };

const listarAlumnos = async (req, res) => {
  try {
    response.data = await listarAlumnosActuales();
    response.messages = 'Ok';

    return res.json(response);
  } catch (e) {
    console.log(e);
    response.success = false;
    response.messages = 'Error interno en el servidor';
    response.data = [];
    return res.status(500).json(response);
  }
};

module.exports = { listarAlumnos };
