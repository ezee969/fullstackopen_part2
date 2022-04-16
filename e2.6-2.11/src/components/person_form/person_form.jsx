import React from 'react';

export default function PersonForm({
  handleNewName,
  handleNewNumber,
  handleAddBut,
}) {
  return (
    <form>
      <label htmlFor='nameInput'>Name:</label>
      <input
        onChange={handleNewName}
        id='nameInput'
        name='nameInput'
        type='text'
      />
      <br />
      <label htmlFor='numberInput'>Number:</label>
      <input
        onChange={handleNewNumber}
        id='numberInput'
        name='numberInput'
        type='text'
      />
      <div>
        <button onClick={handleAddBut} type='submit'>
          add
        </button>
      </div>
    </form>
  );
}
