const { check } = require("express-validator");

exports.userCreateValidator = [
  check("nombre")
    .notEmpty()
    .withMessage("El campo nombre es requerido")
    .isString()
    .withMessage("El campo nombre es de tipo string"),
  check("apellido")
    .notEmpty()
    .withMessage("El campo apellido es requerido")
    .isString()
    .withMessage("El campo apellido es de tipo string"),
  check("email")
    .notEmpty()
    .withMessage("El campo email es requierod")
    .isEmail()
    .withMessage("El campo email debe ser un correo valido"),
  check("password")
    .notEmpty()
    .withMessage("El campo password es requierod")
    .isString()
    .withMessage("El campo password debe ser un correo valido"),
  check("rol")
    .notEmpty()
    .withMessage("El campo rol es requierod")
    .isArray()
    .withMessage("El campo rol debe ser un correo valido"),
];
