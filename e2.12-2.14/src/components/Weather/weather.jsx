import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Weather({ name }) {
  const [data, setData] = useState({});
  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${REACT_APP_API_KEY}&q=${name}&aqi=no`
      )
      .then((response) => setData(response.data));
  }, [name]);

  if (Object.entries(data).length !== 0) {
    return (
      <div>
        <h2>Weather in {name}</h2>
        <p>temperature: {data.current.temp_c} Celcius</p>
        <img src={data.current.condition.icon} alt='' />
        <p>
          wind:{data.current.wind_mph}mph direction {data.current.wind_dir}
        </p>
      </div>
    );
  }
}
