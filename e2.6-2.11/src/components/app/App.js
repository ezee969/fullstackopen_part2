import React, { useState, useEffect } from 'react';
import Persons from '../persons/persons';
import Filter from '../filter/filter';
import PersonForm from '../person_form/person_form';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState();
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNewFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleAddBut = (event) => {
    event.preventDefault();
    if (persons.find((e) => e.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleNewFilter={handleNewFilter} />
      <h3>Add a new</h3>
      <PersonForm
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
        handleAddBut={handleAddBut}
      />
      <h3>Numbers</h3>
      {persons && <Persons persons={persons} filter={filter} />}
    </div>
  );
};

export default App;
