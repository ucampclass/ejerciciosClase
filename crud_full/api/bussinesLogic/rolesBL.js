const { listarRoles, guardarRol } = require('../repositorys/rolesRepository');

const listarRolesActivo = async () => {
  return await listarRoles();
};

const nuevoRol = async (nombreRol) => {
  const agregarRol = {
    nombre: nombreRol,
  };

  return await guardarRol(agregarRol);
};

module.exports = { listarRolesActivo, nuevoRol };
