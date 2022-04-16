import React from 'react';

export default function Persons({ persons, filter }) {
  if (filter === '') {
    return (
      <ul>
        {persons.map((e) => (
          <p key={e.name}>
            {e.name} {e.number}
          </p>
        ))}
      </ul>
    );
  }
  return (
    <ul>
      {persons
        .filter((e) => e.name.toLowerCase().includes(filter.toLowerCase()))
        .map((e) => (
          <p key={e.name}>
            {e.name} {e.number}
          </p>
        ))}
    </ul>
  );
}
