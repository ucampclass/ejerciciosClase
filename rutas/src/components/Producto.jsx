import React from 'react';
import { Link } from 'react-router-dom';

export const Producto = () => {
  const productos = [
    { id: 1, descripcion: 'Producto A' },
    { id: 2, descripcion: 'Producto B' },
    { id: 3, descripcion: 'Producto C' },
    { id: 4, descripcion: 'Producto D' },
    { id: 5, descripcion: 'Producto E' },
  ];

  return (
    <div>
      <h2>Producto</h2>
      <hr />

      <ul>
        {productos.map((x) => {
          return (
            <Link key={x.id} to={`/detalle/${x.id}`}>
              <li> {x.descripcion}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
