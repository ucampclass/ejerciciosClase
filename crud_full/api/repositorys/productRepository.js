const ProductModel = require("../models/productModel");

const listarProductos = async () => {
  return await ProductModel.find();
};

const nuevoProduto = async (model) => {
  const add = new ProductModel(model);

  return await add.save();
};

module.exports = { listarProductos, nuevoProduto };
