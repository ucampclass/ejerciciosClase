const product = require("../repositorys/productsRepository");

const obtenerListado = async () => {
  return await product.listar();
};

const nuevoProducto = async (data) => {
  return await product.guardar(data);
};

module.exports = { obtenerListado, nuevoProducto };
