const { check } = require("express-validator");

exports.createProductValidator = [
  check("nombre")
    .notEmpty()
    .withMessage("El campo nombre es requerido")
    .isString()
    .withMessage("El campo nombre es de tipo string"),
  check("precio")
    .notEmpty()
    .withMessage("El campo precio es requerido")
    .isNumeric()
    .withMessage("El campo precio es de tipo numerico"),
  check("stock")
    .notEmpty()
    .withMessage("El campo stock es requerido")
    .isNumeric()
    .withMessage("El campo stock es de tipo numerico"),
  check("codigo")
    .notEmpty()
    .withMessage("El campo código es requerido")
    .isString()
    .withMessage("El campo código debe ser de tipo string"),
];
