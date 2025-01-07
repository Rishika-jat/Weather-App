// import React, { createContext, useState, useEffect } from 'react';

// export const WeatherContext = createContext();

// export const WeatherProvider = ({ children }) => {
//   const [city, setCity] = useState("Bhopal");
//   const [fetchCity, setFetchCity] = useState('Bhopal');
//   const [weatherData, setWeatherData] = useState(null);
//   const [weatherForecast, setWeatherForecast] = useState(null);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       if (!fetchCity) return;
      
//       const today = new Date().toISOString().split('T')[0];  // Get today's date in YYYY-MM-DD format

//       try {
//         const response = await fetch(`https://api.weatherapi.com/v1/history.json?key=2faf57a08851487ba7321635240111&q=${fetchCity}&dt=${today}`);
//         const data = await response.json();
//         setWeatherData(data);
//         console.log(data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//       try{
//         const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2faf57a08851487ba7321635240111&q=${fetchCity}&days=7`)
//         const data =await response.json();
//         setWeatherForecast(data);
//         console.log(data)

//       }catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };
//     fetchWeatherData();
//   }, [fetchCity]);

//   return (
//     <WeatherContext.Provider value={{ city, setCity, fetchCity, setFetchCity, weatherData,weatherForecast }}>
//       {children}
//     </WeatherContext.Provider>
//   );
// };

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

      const today = new Date().toISOString().split('T')[0];
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;


      try {
        const response = await fetch(`https://api.weatherapi.com/v1/history.json?key=2faf57a08851487ba7321635240111&q=${fetchCity}&dt=${today}`);
                const data = await response.json();
                setWeatherData(data);
                console.log(data);
      } catch (error) {
        console.error('Error fetching historical weather data:', error);
      }

      try {
        const forecastResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${fetchCity}&days=7`);
        const forecastData = await forecastResponse.json();
        setWeatherForecast(forecastData);
        console.log('Weather Forecast Data:', forecastData);
      } catch (error) {
        console.error('Error fetching weather forecast:', error);
      }
    };
    fetchWeatherData();
  }, [fetchCity]);

  return (
    <WeatherContext.Provider value={{ city, setCity, fetchCity, setFetchCity, weatherData, weatherForecast }}>
      {children}
    </WeatherContext.Provider>
  );
};
