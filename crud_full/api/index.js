/**
 * Importaciones
 */
const express = require("express");
const cors = require("cors");
const bodyParse = require("body-parser");
const { dbConnection } = require("./config/database/mongodb");
require("dotenv").config();
const rolRoutes = require("./Routes/rolRoutes");
const userRoutes = require("./Routes/userRoutes");

const app = express();
dbConnection();
app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

/**
 * Rutas
 **/
app.use("/api/roles", rolRoutes);
app.use("/api/users", userRoutes);

app.listen(process.env.PORT || 9001, () => {
  console.log("corriendo servidor...");
});
