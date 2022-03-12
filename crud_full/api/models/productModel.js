const { Schema, model } = require("mongoose");

const productoScheme = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    cantidad: {
      type: Number,
      required: true,
      default: 0,
    },
    imgUrl: {
      type: String,
      default:
        "http://aquiporti.ec/dreamlab/wp-content/uploads/2020/02/default.jpg",
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("product", productoScheme);
