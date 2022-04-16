import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from '../Countries/countries';

export default function App() {
  const [data, setData] = useState([]);
  const [countriesFilter, setCountriesFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter((e) =>
        e.name.common.toLowerCase().includes(countriesFilter.toLowerCase())
      )
    );
  }, [countriesFilter, data]);

  const handleCountryInputChange = (event) => {
    setCountriesFilter(event.target.value);
  };

  return (
    <div>
      <label htmlFor='country'>find countries</label>
      <input onChange={handleCountryInputChange} type='text' id='country' />
      {data && <Countries filteredData={filteredData} />}
    </div>
  );
}
