const { check } = require("express-validator");

exports.createRolValidator = [
  check("nombre")
    .notEmpty()
    .withMessage("El campo nombre es requerido")
    .isString()
    .withMessage("El campo nombre es de tipo string"),
];
