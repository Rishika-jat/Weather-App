import React from "react";

const Hour = (props) => {
  return (
    <div className="hour-box flex gap-0 items-center flex-col shadow-2xl px-14 py-5 rounded-lg transform transition-transform duration-300 hover:scale-90">
      <p className="w-20">{props.time}</p>
      <img src={props.src} alt="" className="w-10" />
      <p>{props.temp}°C</p>
    </div>
  );
};

export default Hour;
