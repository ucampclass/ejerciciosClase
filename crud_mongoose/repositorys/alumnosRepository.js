const Alumno = require('../models/alumnosModel');

const listarAlumnos = async () => {
  return await Alumno.find();
};

const buscarAlumnoPorID = async (idAlumno) => {
  return await Alumno.findById({ _id: idAlumno });
};

const buscarAlumnoPorNombre = async (nombreAlumno) => {
  return await Alumno.find({ nombre: nombreAlumno });
};

module.exports = { listarAlumnos, buscarAlumnoPorID, buscarAlumnoPorNombre };
