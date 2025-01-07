
import React, { useContext, useEffect } from "react";
import { WeatherContext } from "./WeatherProvider";
import Week from "./Week";

const Weekly = () => {
  const { weatherForecast } = useContext(WeatherContext);

  const daysToDisplay = weatherForecast?.forecast?.forecastday || [];

  useEffect(() => {
    console.log("daysToDisplay:", daysToDisplay);
  }, [daysToDisplay]);

  return (
    <div className="upper-section">
      <div className="weekly-container flex gap-3 overflow-y-hidden overflow-x-scroll">
        {daysToDisplay.map((day, index) => (
          <Week
            key={day.date_epoch ?? index}
            day={new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })}
            icon={day.day.condition.icon}
            temp={day.day.avgtemp_c}
            condition={day.day.condition.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Weekly;
