const { listarRolesActivo, nuevoRol } = require('../bussinesLogic/rolesBL');

const response = { success: true, messages: '', data: [] };

const obtener = async (req, res) => {
  try {
    response.data = await listarRolesActivo();
    return res.json(response);
  } catch (error) {
    console.log(error);
    response.success = false;
    response.messages = 'Problema interno';
    response.data = [];
    return res.status(500).json(response);
  }
};

module.exports = { obtener };
