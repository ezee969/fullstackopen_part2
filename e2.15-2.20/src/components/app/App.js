import React, { useState, useEffect } from 'react';
import Persons from '../persons/persons';
import Filter from '../filter/filter';
import PersonForm from '../person_form/person_form';
import personsService from '../../services/persons';
import Notification from '../notification/notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [notificationStyle, setNotificationStyle] = useState(null);

  useEffect(() => {
    personsService.getAll().then((res) => setPersons(res));
  }, []);

  useEffect(() => {
    setFilteredPersons(
      persons.filter((e) => e.name.toLowerCase().includes(filter.toLowerCase()))
    );
  }, [filter, persons]);

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNewFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleDeleteBut = (id, name) => {
    if (window.confirm(`delete ${name}?`)) {
      personsService
        .del(id)
        .then(() =>
          personsService.getAll().then((response) => setPersons(response))
        )
        .catch((error) => showNot(`Error`, 'error'));
    }
  };

  const handleAddBut = (event) => {
    const person = persons.find((e) => e.name === newName);
    event.preventDefault();
    if (person && personCheckVal(newName)) {
      const editedPerson = { ...person, number: newNumber };
      personsService.update(person.id, editedPerson).then(() =>
        personsService.getAll().then((response) => {
          setPersons(response);
          showNot(`Number of ${person.name} updated successfully`, 'success');
        })
      );
    } else if (!person) {
      const newPerson = { name: newName, number: newNumber };
      personsService.create(newPerson).then(() =>
        personsService.getAll().then((response) => {
          setPersons(response);
          showNot(
            `${newPerson.name} added successfully to the list`,
            'success'
          );
          resetInputVal();
          setNewName('');
          setNewNumber('');
        })
      );
    }
  };

  const showNot = (mesagge, notificationStyle) => {
    setNotificationStyle(notificationStyle);
    setErrorMessage(mesagge);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };

  const personCheckVal = (name) =>
    window.confirm(
      `${name} is already added to phonebook, 
        replace the old number with a new one?`
    );

  const resetInputVal = () =>
    Array.from(document.getElementsByClassName('input')).forEach(
      (e) => (e.value = '')
    );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} style={notificationStyle} />
      <Filter handleNewFilter={handleNewFilter} />
      <h3>Add a new</h3>
      <PersonForm
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
        handleAddBut={handleAddBut}
      />
      <h3>Numbers</h3>
      {filteredPersons && (
        <Persons
          handleDeleteBut={handleDeleteBut}
          filteredPersons={filteredPersons}
        />
      )}
    </div>
  );
};

export default App;
