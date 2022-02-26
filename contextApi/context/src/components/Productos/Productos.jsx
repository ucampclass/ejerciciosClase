import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export const Productos = () => {
  const { user, setUser } = useContext(UserContext);

  const actualizar = () => {
    setUser({
      nombre: 'Ana',
      edad: 21,
      sexo: 'F',
      status: '',
    });
  };
  return (
    <>
      <h2>
        Productos - {user.nombre}, {user.edad}
      </h2>

      <button className='btn btn-info' onClick={actualizar}>
        Actualizar
      </button>
    </>
  );
};
