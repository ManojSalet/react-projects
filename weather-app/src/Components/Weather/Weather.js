import React, { useState } from "react";
import styles from "./weather.module.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    // Start loading
    setError(null); // Reset error state

    try {
      const response = await fetch(`https://wttr.in/${city}?format=j1`);

      if (!response.ok) {
        throw new Error("Could not fetch weather data. Please try again.");
      }

      const data = await response.json();
      setWeatherData(data.current_condition[0]); // Update state with weather data
    } catch (error) {
      setError(error.message); // Update error state
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    fetchWeather();
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center fw-bold">Weather App</h1>

        <div className="d-flex justify-content-center mt-3">
          <form onSubmit={handleSubmit} className="d-flex gap-2">
            <input
              className="form-control border border-2"
              type="text"
              value={city}
              onChange={(e)=> setCity(e.target.value)}
              placeholder="Enter city name"
              required
            />
            <button type="submit" className={`btn ${styles.Btn}`}>
              Get Wheather
            </button>
          </form>
        </div>

        {error && <p className="error">{error}</p>}

        {weatherData && (
          <>
            <div className="text-center mt-2">
              <h2 className={`${styles.CityName}`}>Weather in {city}</h2>
            </div>
            <div className="m-3 d-flex justify-content-center">
              <div className="row w-50 text-center">
                <div className={`col-6 ${styles.Data}`}>
                  <span>Temperature</span>
                  <span>Humidity</span>
                  <span>Speed</span>
                  <span>Condition</span>
                </div>
                <div className={`col-6  ${styles.Data}`}>
                  <span>{weatherData.temp_C}°C</span>
                  <span> {weatherData.humidity}%</span>
                  <span>{weatherData.windspeedKmph} km/h</span>
                  <span> {weatherData.weatherDesc[0].value}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default WeatherApp;
