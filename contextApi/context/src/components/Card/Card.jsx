import React from 'react';
import { List } from '../List/List';

export const Card = ({ nombre }) => {
  return (
    <div>
      <h3>Card {nombre}</h3>
      <List nombre={nombre} />
    </div>
  );
};
