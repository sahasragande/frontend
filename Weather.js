import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'd5b71200b5eef2af74936f3dea40e9dd'; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city');
      return;
    }

    try {
      const res = await fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        setError(data.message);
        setWeather(null);
      } else {
        setWeather({
          name: data.name,
          temp: data.main.temp,
          desc: data.weather[0].description,
          humidity: data.main.humidity,
          wind: data.wind.speed,
        });
        setError('');
      }
    } catch {
      setError('Something went wrong');
      setWeather(null);
    }
  };

  return (
    <div className="container-fluid min-vh-100 bg-light text-dark d-flex flex-column align-items-center justify-content-center">
      <h2 className="mb-4 text-dark">🌞 Weather App</h2>

      <div className="input-group mb-3 w-75 w-md-50">
        <input
          type="text"
          className="form-control bg-white text-dark border-0"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-outline-primary" onClick={fetchWeather}>
          Get Weather
        </button>
      </div>

      {error && (
        <div className="alert alert-danger w-75 text-center">{error}</div>
      )}

      {weather && (
        <div className="card bg-light text-dark mt-4 w-75 shadow-lg">
          <div className="card-body">
            <h4 className="card-title">{weather.name}</h4>
            <p className="card-text">🌡 Temperature: {weather.temp}°C</p>
            <p className="card-text">☁ Description: {weather.desc}</p>
            <p className="card-text">💧 Humidity: {weather.humidity}%</p>
            <p className="card-text">🌬 Wind Speed: {weather.wind} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;