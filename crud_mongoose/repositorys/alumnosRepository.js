const Alumno = require('../models/alumnosModel');

const guardarAlumnoRepository = async (model) => {
  const alumno = new Alumno(model);

  const resultado = await alumno.save();

  return resultado;
};

const listarAlumnos = async () => {
  return await Alumno.find();
};

const buscarAlumnoPorID = async (idAlumno) => {
  return await Alumno.findById({ _id: idAlumno });
};

const buscarAlumnoPorNombre = async (nombreAlumno) => {
  return await Alumno.find({ nombre: nombreAlumno });
};

const actualizarEdadRepository = async (idAlumno, edadAlumno) => {
  return await Alumno.findByIdAndUpdate(
    { _id: idAlumno },
    { edad: edadAlumno, direccion },
    { new: true }
  );
};

const eliminarPorId = async (idAlumno) => {
  return await Alumno.findByIdAndRemove({ _id: idAlumno });
};

module.exports = {
  listarAlumnos,
  buscarAlumnoPorID,
  buscarAlumnoPorNombre,
  guardarAlumnoRepository,
  actualizarEdadRepository,
  eliminarPorId,
};
