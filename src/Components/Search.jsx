import React, { useContext } from "react";
import { FaCloud, FaSearch, FaLocationArrow } from "react-icons/fa";
import { WeatherContext } from "./WeatherProvider";

const Search = () => {
  const { city, setCity, setFetchCity } = useContext(WeatherContext);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setFetchCity(city);
      setCity("");
    }
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

 
  return (
    <>
      <div className="flex items-center justify-around gap-2">
        <FaCloud size={30} color="gray" />
        <h1>Weather</h1>
      </div>

      <div className="flex justify-items-center items-center gap-2">
        <FaSearch size={18} color="gray" />
        <input
          type="text"
          placeholder="Search for places..."
          className="border-0 focus:outline-none"
          value={city}
          onChange={handleCity}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="hidden items-center justify-around gap-2 bg-gray-200 rounded-full w-auto px-4 my-10 h-10 md:hidden sm:hidden lg:flex ">
        <button
          className="flex p-0 border-none bg-transparent shadow-none outline-none ring-0 items-center gap-2"
        
        >
          <FaLocationArrow size={20} color="gray" />
          <h3>Current location</h3>
        </button>
      </div>
    </>
  );
};

export default Search;
