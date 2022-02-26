import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export const Nosotros = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h2>
        Nosotros - {user.nombre}, {user.edad}
      </h2>
    </>
  );
};
