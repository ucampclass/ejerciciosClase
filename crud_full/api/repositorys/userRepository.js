const UserModel = require("../models/userModel");

const obtenerUsuarios = async () => {
  return await UserModel.find();
};

const buscarUsuarioPorCorreo = async (email) => {
  return await UserModel.findOne({ email });
};

const crearUsuario = async (objUser) => {
  const addUser = new UserModel(objUser);

  return await addUser.save();
};

const actualizaUsuario = async (id, password, telefono, rol) => {
  return await UserModel.updateOne({ id }, { password, telefono, rol });
};

const eliminarUsuario = async (id) => {
  return await UserModel.deleteOne({ _id: id });
};

module.exports = {
  obtenerUsuarios,
  buscarUsuarioPorCorreo,
  crearUsuario,
  actualizaUsuario,
  eliminarUsuario,
};
