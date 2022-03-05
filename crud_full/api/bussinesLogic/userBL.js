const {
  obtenerUsuarios,
  buscarUsuarioPorCorreo,
  crearUsuario,
  actualizaUsuario,
  eliminarUsuario,
} = require("../repositorys/userRepository");
const { encryptPassword } = require("../utils/password");

const obtenerUsuarioActivos = async () => {
  return await obtenerUsuarios();
};

const buscarPorEmail = async (email) => {
  return await buscarUsuarioPorCorreo(email);
};

const nuevoUsuario = async (user) => {
  user.password = encryptPassword(user.password);

  return await crearUsuario(user);
};

const actualizarUsuario = async (user) => {
  const { password, telefono, rol, _id } = user;
  return await actualizaUsuario(_id, password, telefono, rol);
};

const eliminarUsuarioActivo = async (id) => {
  return await eliminarUsuario(id);
};

module.exports = {
  obtenerUsuarioActivos,
  buscarPorEmail,
  nuevoUsuario,
  actualizarUsuario,
  eliminarUsuarioActivo,
};
