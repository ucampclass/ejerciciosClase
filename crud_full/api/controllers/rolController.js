const { listarRolesActivo, nuevoRol } = require("../bussinesLogic/rolesBL");
const { validationResult } = require("express-validator");
const { CustomMessages } = require("../utils/messages");
const { GenericResponse } = require("../utils/genericResponse");

const obtener = async (req, res) => {
  const response = new GenericResponse();
  try {
    response.data = await listarRolesActivo();
    return res.json(response);
  } catch (error) {
    console.log(error);
    response.success = false;
    response.messages = CustomMessages.error_500;
    response.data = [];
    return res.status(500).json(response);
  }
};

const guardar = async (req, res) => {
  const response = new GenericResponse();
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      response.messages = errors.mapped();
      return res.status(400).json(response);
    }

    const { nombre } = req.body;

    response.data = await nuevoRol(nombre);
    response.messages = "Creado exitosamente";

    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    response.data = [];
    response.messages = CustomMessages.error_500;
    response.success = false;

    return res.status(500).json(response);
  }
};

module.exports = { obtener, guardar };
