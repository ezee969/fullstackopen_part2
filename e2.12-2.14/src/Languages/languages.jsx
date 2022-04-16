import React from 'react';

export default function Languages({ languages }) {
  return (
    <div>
      <h2>Spoken languages</h2>
      <ul>
        {Object.values(languages).map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
}
