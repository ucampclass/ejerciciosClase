import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export const List = () => {
  const { user, setUser } = useContext(UserContext);

  const actualizar = () => {
    setUser({
      nombre: 'Alejandra',
      edad: 25,
      sexo: 'F',
      status: 'Pendiente',
    });
  };
  return (
    <div>
      <h5>
        Lista {user.nombre}, {user.status}
      </h5>

      <button className='btn btn-primary' onClick={actualizar}>
        Actualizar datos
      </button>
    </div>
  );
};
