import React, { useEffect, useState } from 'react';

export const Estado = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    console.log('Ejecuto useEffect');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((data) => data.json())
      .then((resultado) => setLista(resultado));
    // setLista(alumnos);
  }, []);

  return (
    <div>
      <ul>
        {lista.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
    </div>
  );
};
