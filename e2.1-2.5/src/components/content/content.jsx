import React from 'react';
import Part from '../part/part';

export default function Content({ parts }) {
  return (
    <main>
      {parts.map((element) => (
        <Part
          key={element.name}
          name={element.name}
          exercises={element.exercises}
        />
      ))}
    </main>
  );
}
