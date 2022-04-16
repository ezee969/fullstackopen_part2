import React from 'react';
import Languages from '../../Languages/languages';
import Weather from '../Weather/weather';
import { useState } from 'react';

export default function Country({
  name,
  capital,
  population,
  languages,
  flagUrl,
  compState,
}) {
  const [compresed, setCompresed] = useState(compState);

  const handleShowButton = () => {
    setCompresed(false);
  };

  if (compresed) {
    return (
      <div>
        {name}
        <button onClick={handleShowButton}>show</button>
      </div>
    );
  }
  return (
    <div>
      <h1>{name}</h1>
      <p>capital {capital}</p>
      <p>population {population}</p>
      <Languages languages={languages} />
      <img src={flagUrl} alt='' />
      <Weather name={name} />
    </div>
  );
}
