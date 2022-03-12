const { Schema, model } = require("mongoose");

const ProductoScheme = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
    },
    imagen: {
      type: String,
      default:
        "https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png",
    },
    precio: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    codigo: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("product", ProductoScheme);
