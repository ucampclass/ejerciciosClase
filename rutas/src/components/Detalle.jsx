import React from 'react';
import { useParams } from 'react-router-dom';

export const Detalle = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Detalle {id}</h2>
    </div>
  );
};
