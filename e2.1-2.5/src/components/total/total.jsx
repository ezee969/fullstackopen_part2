import React from 'react';

export default function Total({ data }) {
  const getTotal = data.reduce(
    (prevValue, currValue) => prevValue + currValue.exercises,
    0
  );

  return <p>Number of exercises {getTotal}</p>;
}
