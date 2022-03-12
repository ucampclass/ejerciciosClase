const {
  crearProducto,
  obtenerProductos,
} = require("../bussinesLogic/productBL");
const { GenericResponse } = require("../utils/genericResponse");
const { CustomMessages } = require("../utils/messages");
const { validationResult } = require("express-validator");

const obtener = async (req, res) => {
  const response = new GenericResponse();
  try {
    response.data = await obtenerProductos();

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
      response.messages = errors.mapped();
      response.success = false;

      return res.status(400).json(response);
    }

    response.data = await crearProducto(req.body);
    response.messages = CustomMessages.create_ok;

    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    response.messages = CustomMessages.error_500;
    response.success = false;

    return res.status(500).json(response);
  }
};

module.exports = { obtener, guardar };
