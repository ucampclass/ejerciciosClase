const { check } = require("express-validator");

exports.createProductValidator = [
  check("nombre")
    .notEmpty()
    .withMessage("El campo nombre es requerido")
    .isString()
    .withMessage("El campo nombre es de tipo string"),
  check("descripcion")
    .notEmpty()
    .withMessage("El campo descripcion es requerido")
    .isString()
    .withMessage("El campo descripcion es de tipo string"),
  check("cantidad").isNumeric("El campo cantidad es de tipo numerico"),
];
