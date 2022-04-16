import React from 'react';
import Country from '../Country/country';

export default function Countries({ filteredData }) {
  if (filteredData.length > 0 && filteredData.length < 11) {
    return (
      <div>
        {filteredData.map((e) => (
          <Country
            compState={filteredData.length === 1 ? false : true}
            capital={e.capital[0]}
            population={e.population}
            key={e.name.common}
            name={e.name.common}
            languages={e.languages}
            flagUrl={Object.values(e.flags)[0]}
          />
        ))}
      </div>
    );
  }
}
