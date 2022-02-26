import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Card } from '../Card/Card';

export const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>
        Componente home - {user.nombre},{user.edad} años
      </h1>
      <Card nombre='Juan' />
    </div>
  );
};
