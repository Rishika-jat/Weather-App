
import React, { useContext } from "react";
import { WeatherContext } from "./WeatherProvider";
import Hour from "./hour"


const Hourly = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) return <p>Loading...</p>;

  return (
    <div className="upper-section">
     {/* <Today_Week/> */}
      <div className="hourly-container flex gap-3  overflow-y-hidden overflow-x-scroll">
        {weatherData.forecast.forecastday[0].hour.slice(0, 24).map((hour) => (
          <Hour
            key={hour.time_epoch}
            src={hour.condition.icon}
            temp={hour.temp_c}
            time={new Date(hour.time_epoch * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          />
        ))}
      </div>
    </div>
  );
};

export default Hourly;
