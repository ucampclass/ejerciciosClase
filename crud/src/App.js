import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import { dbConfig } from './config/firebase';

function App() {
  const [listadoTareas, setListaTareas] = useState([]);

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
        </div>
      </div>
    </div>
  );
}

export default App;
