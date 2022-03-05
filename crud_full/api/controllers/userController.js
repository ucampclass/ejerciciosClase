const {
  actualizarUsuario,
  eliminarUsuarioActivo,
  buscarPorEmail,
  nuevoUsuario,
  obtenerUsuarioActivos,
} = require("../bussinesLogic/userBL");
const { GenericResponse } = require("../utils/genericResponse");
const { CustomMessages } = require("../utils/messages");
const { validationResult } = require("express-validator");

const obtener = async (req, res) => {
  const response = new GenericResponse();
  try {
    response.data = await obtenerUsuarioActivos();

    return res.json(response);
  } catch (error) {
    console.log(error);
    response.messages = CustomMessages.error_500;
    response.success = false;

    return res.status(500).json(response);
  }
};

const guardar = async (req, res) => {
  const response = new GenericResponse();
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      response.success = false;
      response.messages = errors.mapped();

      return res.status(400).json(response);
    }

    const { email } = req.body;
    const find = await buscarPorEmail(email);

    if (find) {
      response.success = false;
      response.messages = CustomMessages.error_email;

      return res.status(400).json(response);
    }

    response.data = await nuevoUsuario(req.body);
    response.messages = CustomMessages.create_ok;

    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    response.success = false;
    response.messages = CustomMessages.error_500;

    return res.status(500).json(response);
  }
};

module.exports = { obtener, guardar };
