const {
  listarProductos,
  nuevoProduto,
} = require("../repositorys/productRepository");

const obtenerProductos = async () => {
  return await listarProductos();
};

const crearProducto = async (model) => {
  return await nuevoProduto(model);
};

module.exports = { obtenerProductos, crearProducto };
