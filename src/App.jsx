import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherInfo from "./components/WeatherInfo";
import "./assets/styles.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(latitude, longitude);
      },
      (error) => setError(error.message)
    );
  }, []);

  const fetchWeather = async (latitude, longitude) => {
    try {
      const apiKey = "fdd533266e28101881f610f2b8f1ebe1";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      const response = await axios.get(apiUrl);
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className='app-container'>
      {loading ? (
        <div className='loading'>
          <p>Loading...</p>
        </div>
      ) : error ? (
        <p className='error'>Error: {error}</p>
      ) : weather ? (
        <WeatherInfo weather={weather} />
      ) : null}
    </div>
  );
};

export default App;
