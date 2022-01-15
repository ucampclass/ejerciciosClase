import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { dbConfig } from './config/firebase';

function App() {
  const [listadoTareas, setListaTareas] = useState([]);
  // const [form, setForm] = useState({ nombre: '', nota: '' });
  const [nombre, setNombre] = useState('');
  const [nota, setNota] = useState('');

  useEffect(() => {
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

    obtenerDatos();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    guardaTarea();
  };

  const guardaTarea = async () => {
    const datoAGuardar = {
      nombre,
      nota,
    };
    // const datoAGuardar = {
    //   nombre:nombre,
    //   nota: nota,
    // };

    console.log(datoAGuardar);
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
              </li>
            ))}
          </ul>
        </div>
        <div className='col-6'>
          <h1>Agregar tarea</h1>
          <form onSubmit={submit}>
            <label className='form-label'>Nombre tarea</label>
            <input
              type='text'
              className='form-control'
              onChange={(e) => handleFormNombre(e.target.value)}
            />
            <label className='form-label'>Nota</label>
            <input
              type='text'
              className='form-control'
              onChange={(e) => handleFormNota(e.target.value)}
            />

            <button type='submit' className='btn btn-dark'>
              Agregar tarea
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
