import React from 'react';
import Person from '../person/person';

export default function Persons({ filteredPersons, handleDeleteBut }) {
  if (filteredPersons.length > 0) {
    return (
      <ul>
        {filteredPersons.map((e) => (
          <Person
            handleDeleteBut={handleDeleteBut}
            id={e.id}
            key={e.name}
            name={e.name}
            number={e.number}
          />
        ))}
      </ul>
    );
  }
}
