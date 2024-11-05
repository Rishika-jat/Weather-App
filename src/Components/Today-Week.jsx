import React, { useState } from "react";
import Hourly from "./Hourly";
import Weekly from "./Weekly";

const Today_Week = () => {
  const [showdata, setShowData] = useState(true);

  function handleToday() {
    
    setShowData(true);
  }

  function handleWeek() {
    setShowData(false);
  }

  return (
    <div>
      <div className="flex gap-7 mb-3 ml-0 heading-responsive">
        <button className={`p-0 border-none bg-transparent shadow-none outline-none ring-0 ${showdata?`font-extrabold`:`font-thin`}`} onClick={handleToday}>Today</button>
        <button className={`p-0 border-none bg-transparent shadow-none outline-none ring-0 ${!showdata?`font-extrabold`:`font-thin`}`} onClick={handleWeek}>Week</button>
      </div>
      <div>
        {showdata ? <Hourly /> : <Weekly />}
      </div>
    </div>
  );
};

export default Today_Week;
