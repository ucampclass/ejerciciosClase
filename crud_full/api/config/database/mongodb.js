const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_MONGO);
    console.log('conectado a la DB...');
  } catch (error) {
    console.log('Error de conexion');
    console.log(error);
  }
};

module.exports = { dbConnection };
