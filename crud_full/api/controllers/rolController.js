const { listarRolesActivo, nuevoRol } = require("../bussinesLogic/rolesBL");
const { validationResult } = require("express-validator");

const response = { success: true, messages: "", data: [] };

const obtener = async (req, res) => {
  try {
    response.data = await listarRolesActivo();
    return res.json(response);
  } catch (error) {
    console.log(error);
    response.success = false;
    response.messages = "Problema interno";
    response.data = [];
    return res.status(500).json(response);
  }
};

const guardar = async (req, res) => {
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
    response.messages = "Hubo un error interno";
    response.success = false;

    return res.status(500).json(response);
  }
};

module.exports = { obtener, guardar };
