import React, { createContext, useState, useEffect } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Bhopal");
  const [fetchCity, setFetchCity] = useState('Bhopal');
  const [weatherData, setWeatherData] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!fetchCity) return;
      
      const today = new Date().toISOString().split('T')[0];  // Get today's date in YYYY-MM-DD format

      try {
        const response = await fetch(`http://api.weatherapi.com/v1/history.json?key=2faf57a08851487ba7321635240111&q=${fetchCity}&dt=${today}`);
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
      try{
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2faf57a08851487ba7321635240111&q=${fetchCity}&days=7`)
        const data =await response.json();
        setWeatherForecast(data);
        console.log(data)

      }catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeatherData();
  }, [fetchCity]);

  return (
    <WeatherContext.Provider value={{ city, setCity, fetchCity, setFetchCity, weatherData,weatherForecast }}>
      {children}
    </WeatherContext.Provider>
  );
};
