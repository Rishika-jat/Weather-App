
import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { WeatherContext } from "./WeatherProvider";
import { useContext } from "react";

const Today = () => {
  const { weatherData } = useContext(WeatherContext);

  // Default values
  const defaultIcon = "../public/thunder.webp";
  const defaultTemp = "37°C";
  const defaultText = "Default";
  const defaultDate = "Default";
  const defaultLocation = "Default";

  // Conditional values
  const icon = weatherData ? weatherData.forecast.forecastday[0].day.condition.icon : defaultIcon;
  const temp = weatherData ? `${weatherData.forecast.forecastday[0].day.avgtemp_c}°C` : defaultTemp;
  const text = weatherData ? weatherData.forecast.forecastday[0].day.condition.text : defaultText;
  const date = weatherData ? weatherData.forecast.forecastday[0].date : defaultDate;
  const location = weatherData ? weatherData.location.name : defaultLocation;

  return (
    <div className="cop mx-16 my-8 w-96 place-items-center shadow-2xl p-5 rounded-lg">
      <img src={icon} alt="" className="w-32" />
      <h1 className="text-7xl">{temp}</h1>
      <p>{text}</p>
      <hr />
      <div className="flex items-center justify-center gap-2">
        <FaCalendarAlt size={20} color="gray" />
        <p>{date}</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <FaMapMarkerAlt size={20} color="red" />
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Today;
