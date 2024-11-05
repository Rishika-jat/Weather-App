import React from "react";

const Week = (props) => {
  return (
    <div className="hour-box flex gap-0 items-center flex-col shadow-2xl px-14 py-5 rounded-lg justify-center transform transition-transform duration-300 hover:scale-90">
      <p className="w-20">{props.day}</p>
      <img src={props.icon} alt={props.condition} className="w-10" />{" "}
      <p>{props.temp}°C</p>
       {/* <p>{props.condition}</p> */}
    </div>
  );
};

export default Week;
