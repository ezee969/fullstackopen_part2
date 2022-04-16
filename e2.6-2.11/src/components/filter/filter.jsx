import React from 'react';

export default function Filter({ handleNewFilter }) {
  return (
    <>
      <label htmlFor='filterInput'>Filter shown with:</label>
      <input
        onChange={handleNewFilter}
        id='filterInput'
        name='filterInput'
        type='text'
      />
    </>
  );
}
