/**
 * Importaciones
 */
const express = require("express");
const cors = require("cors");
const bodyParse = require("body-parser");
const { dbConnection } = require("./config/database/mongodb");
require("dotenv").config();
const rolRoutes = require("./Routes/rolRoutes");
// const { body, validationResult } = require("express-validator");

const app = express();
dbConnection();
app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

/**
 * Rutas
 **/
app.use("/api/roles", rolRoutes);

// app.post(
//   "/",
//   body("nombre")
//     .notEmpty()
//     .withMessage("El campo nombre es requerido")
//     .isString()
//     .withMessage("El campo nombre es de tipo string"),
//   (req, res) => {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       return res.status(400).json({ messages: errors.mapped() });
//     }

//     return res.json(req.body);
//   }
// );

app.listen(process.env.PORT || 9001, () => {
  console.log("corriendo servidor...");
});
