import React, { useEffect } from "react";
import Search from "./Components/Search";

import Today from "./Components/Today";
import Hourly from "./Components/Hourly";
import Weather from "./Components/Weather";
import Today_Week from "./Components/Today-Week";

const App = () => {
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-start ">
      <div className="bg-white w-full m-6 rounded-2xl">
        <div className="bg-white rounded-lg flex justify-around w-full h-16 items-center">
          <Search />
        </div>
        <div className="flex gap-5 flex-wrap md:items-center md:justify-center">
          <Today />
          <div className="flex flex-col gap-5 flex-wrap sm:justify-center lg:ml-0 md:ml-0 sm:ml-20">
            {/* <Hourly /> */}
            <Today_Week/>
            <Weather />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
