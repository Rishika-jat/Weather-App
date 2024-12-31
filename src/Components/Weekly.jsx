
import React, { useContext } from "react";
import { WeatherContext } from "./WeatherProvider";
import Week from "./Week";

const Weekly = () => {
  const { weatherData } = useContext(WeatherContext);

  const defaultDays = Array(7).fill({
    date_epoch: Date.now(),
    day: {
      condition: {
        icon: "default-icon.png",  // Replace with a path to a default icon
        text: "Default Condition"
      },
      avgtemp_c: 25
    },
    date: new Date().toISOString().split('T')[0]  // Today's date
  });

  const daysToDisplay = weatherData
    ? weatherData.forecast.forecastday
    : defaultDays;

  return (
    <div className="upper-section">
      <div className="weekly-container flex gap-3 overflow-y-hidden overflow-x-scroll">
        {daysToDisplay.map((day, index) => (
          <Week
            key={day.date_epoch || index}
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
