import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore/lite';
import { dbConfig } from './config/firebase';

function App() {
  const [listadoTareas, setListaTareas] = useState([]);
  // const [form, setForm] = useState({ nombre: '', nota: '' });
  const [nombre, setNombre] = useState('');
  const [nota, setNota] = useState('');
  const [id, setId] = useState('');
  const [esEditar, setEsEditar] = useState(false);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const DB = collection(dbConfig, 'tareas');
      const listadoTareas = await getDocs(DB);
      const listadoFinal = listadoTareas.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      setListaTareas(listadoFinal);
    } catch (e) {
      console.log('hubo un error!!!');
      console.log(e);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (esEditar) {
      actulizarEnDB();
    } else {
      guardaTarea();
    }
  };

  const guardaTarea = async () => {
    const datoAGuardar = {
      nombre,
      nota,
    };
    try {
      const DB = collection(dbConfig, 'tareas');
      const item = await addDoc(DB, datoAGuardar);
      setListaTareas([...listadoTareas, { id: item.id, nombre, nota }]);
    } catch (e) {
      console.log('hubo un error');
      console.log(e);
    }
  };

  const handleFormNombre = (texto) => {
    setNombre(texto);
  };

  const handleFormNota = (texto) => {
    setNota(texto);
  };

  const editarTarea = (item) => {
    setEsEditar(true);
    setNombre(item.nombre);
    setNota(item.nota);
    setId(item.id);
  };

  const actulizarEnDB = async () => {
    try {
      const datos = {
        nombre,
        nota,
      };

      const config = doc(dbConfig, 'tareas', id);
      await updateDoc(config, datos);
      obtenerDatos();
      // const resultado = listadoTareas.map((item) =>
      //   item.id === id
      //     ? { id: item.id, nombre: datos.nombre, nota: datos.nota }
      //     : item
      // );
      // setListaTareas(resultado);
    } catch (e) {
      console.log('hubo un error!!!');
      console.log(e);
    }
  };

  const eliminarTarea = async (item) => {
    try {
      const ref = doc(dbConfig, 'tareas', item.id);
      await deleteDoc(ref);

      obtenerDatos();
      // const resultadoFiltrado = listadoTareas.filter((x) => x.id !== item.id);
      // setListaTareas(resultadoFiltrado);
    } catch (e) {
      console.log('hubo un error!!!');
      console.log(e);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <h1>Listado de tareas</h1>
          <ul className='list-group'>
            {listadoTareas.map((item) => (
              <li
                key={item.id}
                className='list-group-item d-flex justify-content-between align-items-center'
              >
                {item.nombre}
                <div>
                  <button
                    className='btn btn-outline-warning'
                    onClick={() => editarTarea(item)}
                  >
                    Editar
                  </button>
                  <button
                    className='btn btn-outline-danger'
                    onClick={() => eliminarTarea(item)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='col-6'>
          <h1>{esEditar ? 'Editar tarea' : 'Agregar tarea'}</h1>
          <form onSubmit={submit}>
            <label className='form-label'>Nombre tarea</label>
            <input
              type='text'
              className='form-control'
              onChange={(e) => handleFormNombre(e.target.value)}
              value={nombre}
            />
            <label className='form-label'>Nota</label>
            <input
              type='text'
              className='form-control'
              onChange={(e) => handleFormNota(e.target.value)}
              value={nota}
            />

            <button type='submit' className='btn btn-dark'>
              {esEditar ? 'Actualiza' : 'Agregar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
