import { useContext } from "react";
import React from "react";

import { WeatherContext } from "./WeatherProvider";

const Weather = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) return <p>Loading...</p>;
  const current = weatherData.forecast.forecastday[0].day;
  const astro = weatherData.forecast.forecastday[0].astro;
  return (
    <div className="lower-section mb-3 flex-wrap">
      <p className="heading-responsive">Today's Highlights</p>
      <div className="collection-container1 gap-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:place-content-center">
        <div className="UV-index shadow-lg w-52 h-28 rounded-2xl p-4 flex items-center justify-around hover:scale-105 hover:bg-gray-100 transform transition-transform duration-300 sm:ml-5 lg:ml-0 md:ml-0">
          <div>
            <p>UV index</p>
            <p>{current.uv}</p>
          </div>

          <div>
            <img src="../public/UV.png" className="w-16" alt="" />
          </div>
          {/* <div className="bg-yellow-300 w-16 h-16"></div> */}
        </div>
        <div className="UV-index shadow-lg w-52 h-28 rounded-2xl p-4 flex items-center justify-around hover:scale-105 hover:bg-gray-100 transform transition-transform duration-300">
          <div>
            <p>Wind Status</p>
            <p>{current.maxwind_kph}</p>
          </div>
          <div>
            <img src="../public/Wind_status.png" className="w-16" alt="" />
          </div>
          {/* <div className="bg-yellow-300 w-16 h-16"></div> */}
        </div>
        <div className="UV-index shadow-lg w-52 h-28 rounded-2xl p-4 flex items-center justify-around hover:scale-105 hover:bg-gray-100 transform transition-transform duration-300 ">
          <div>
            <p>Sunrise & Sunset</p>
            <p>{astro.sunrise}</p>
            <p>{astro.sunset}</p>
          </div>
          <div>
            <img
              src="../public/sunrise_set.jpg"
              alt=""
              className="w-16 transform rotate-90"
            />
          </div>
          {/* <div className="bg-yellow-300 w-16 h-16"></div> */}
        </div>
      </div>
      <div className="collection-container2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 my-2">
        <div className="UV-index shadow-lg w-52 h-28 rounded-2xl p-4 flex items-center justify-around hover:scale-105 hover:bg-gray-100 transform transition-transform duration-300">
          <div>
            <p>Humidity</p>
            <p>{current.avghumidity}%</p>
          </div>
          <div>
            <img src="../public/humidity.png" alt="" className="w-16" />
          </div>
          {/* <div className="bg-yellow-300 w-16 h-16"></div> */}
        </div>
        <div className="UV-index shadow-lg w-52 h-28 rounded-2xl p-4 flex items-center justify-around hover:scale-105 hover:bg-gray-100 transform transition-transform duration-300">
        <div>
        <p>Visibility</p>
        <p>{current.avgvis_km}km</p>
        </div>
         <div>
          <img src="../public/visibility.png" alt="" className="w-14" />
         </div>
          {/* <div className="bg-yellow-300 w-16 h-16"></div> */}
        </div>
        <div className="UV-index shadow-lg w-52 h-28 rounded-2xl p-4 flex items-center justify-around hover:scale-105 hover:bg-gray-100 transform transition-transform duration-300">
        <div>
        <p>Rain Chance</p>
        <p>{current.daily_chance_of_rain}%</p>
        </div>
         <div>
          <img src="../public/Rain.jpg" alt="" className="w-16" />
         </div>
          {/* <div className="bg-yellow-300 w-16 h-16"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Weather;
