import React from 'react';

export default function Person({ id, name, number, handleDeleteBut }) {
  return (
    <li id={id}>
      {name} {number}{' '}
      <button onClick={() => handleDeleteBut(id, name)}>delete</button>
    </li>
  );
}
