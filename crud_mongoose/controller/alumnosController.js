const {
  listarAlumnosActuales,
  agregarBL,
  actualizarEdadBL,
} = require('../bussinesLogic/alumnosBL');
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

const guardarNuevoAlumno = async (req, res) => {
  try {
    const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      edad,
      sexo,
      direccion,
      estadoCivil,
    } = req.body;

    const resultado = await agregarBL(
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      edad,
      sexo,
      direccion,
      estadoCivil
    );

    response.data = resultado;
    return res.status(201).json(response);
  } catch (e) {
    console.log(e);
    response.success = false;
    response.messages = 'Error interno en el servidor';
    response.data = [];
    return res.status(500).json(response);
  }
};

const actualizaEdad = async (req, res) => {
  try {
    const { _id, edad } = req.body;
    const resultado = await actualizarEdadBL(_id, edad);

    response.messages = 'Alumno actualizado correctamente';
    response.data = resultado;

    return res.json(response);
  } catch (e) {
    console.log(e);
    response.success = false;
    response.messages = 'Error interno';
    response.data = [];

    return res.status(500).json(response);
  }
};

module.exports = { listarAlumnos, guardarNuevoAlumno, actualizaEdad };
