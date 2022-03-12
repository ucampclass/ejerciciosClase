const ProductModel = require("../models/productModel");

const listar = async () => {
  return await ProductModel.find().select([
    "nombre",
    "descripcion",
    "cantidad",
    "imgUrl",
  ]);
};

const guardar = async (model) => {
  const add = new ProductModel(model);

  return await add.save();
};

module.exports = { listar, guardar };
