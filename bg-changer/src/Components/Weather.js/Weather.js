import React, { useState } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = 'a0f86a0806c4c1a873ca12501364691c'; // Replace with your OpenWeather API key

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);  // Start loading
    setError('');
    setWeatherData(null);

    try {
      const response = await axios.get(
        // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
        `https://wttr.in/${city}?format=j1`
      );
      setWeatherData(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('City not found. Please enter a valid city.');
      } else {
        setError('An error occurred while fetching the data.');
      }
    } finally {
      setLoading(false);  // End loading
    }
  };

  return (
    <div className="weather-container container d-flex flex-column justify-content-center">
      <h1>Weather App</h1>
      <div className="input-group">
        <input
          type="text"
          className="city-input"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather} className="fetch-button">
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {weatherData && !loading && (
        <div className="weather-info">
          <h2>Weather in {weatherData.nearest_area[0].areaName[0].value}</h2>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
