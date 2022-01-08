import React, { useState } from 'react';

export const Nombre = () => {
  const [nombre, setNombre] = useState('');
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  return (
    <div>
      <input
        type='text'
        placeholder='Ingresa la información'
        className='form-control'
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type='text'
        placeholder='Usuario'
        className='form-control'
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type='text'
        placeholder='Correo'
        className='form-control'
        onChange={(e) => setCorreo(e.target.value)}
      />
      <h2>Valor: {nombre}</h2>
      <h2>Usuario: {usuario}</h2>
      <h2>Correo: {correo}</h2>
    </div>
  );
};
