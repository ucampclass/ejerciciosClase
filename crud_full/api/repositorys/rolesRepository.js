const RolesModel = require('../models/rolesModel');

/**
 * Obtiene todos los roles de la base de datos
 */
const listarRoles = async () => {
  return await RolesModel.find();
};

/**
 * Guarda un nuevo rol
 *
 * @param {object} objRol
 * @returns Un nuevo rol
 */
const guardarRol = async (objRol) => {
  const nuevoRol = new RolesModel(objRol);

  return await nuevoRol.save();
};

module.exports = { listarRoles, guardarRol };
