
import React, { useState, useEffect } from 'react'
//import axios from 'axios';

export const FetchData = (props) => {
  const [foreCastData, setForeCastData] = useState([]);
  const [loading, setLoading] = useState(true);

  const populateWeatherData = async () => {
    const response = await fetch('https://localhost:44371/WeatherForecast/DataGet');
    const data = await response.json();
    setForeCastData(data)
    setLoading(false)
  }

  useEffect(() => {
    populateWeatherData()
  },[] )

  const renderForecastsTable = (forecasts) => {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  let contents =
    loading
      ? <p><em>Loading...</em></p>
      :
      renderForecastsTable(foreCastData);

  return (
    <div>
      <h1 id="tabelLabel" >Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {contents}
    </div>
  );
}
