import React, { useState } from 'react';

export const Contador = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    if (contador >= 10) {
      return;
    }
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador <= 0) {
      return;
    }
    setContador(contador - 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button className='btn btn-primary' onClick={sumar}>
        +
      </button>
      <button className='btn btn-danger' onClick={restar}>
        -
      </button>
    </div>
  );
};
