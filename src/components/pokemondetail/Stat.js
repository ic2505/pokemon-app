import React from "react";

export default function Stat({ stat, progressColor }) {
  if (!stat)
    return (
      <div>
        {/* <Header /> */}
        <p>{"Loading..."}</p>
      </div>
    );

  const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="grid grid-cols-4 gap-3">
      <div>
        <b>{capitalizeString(stat.stat.name)}: </b>
      </div>
      <div className="flex col-span-3">
        <progress
          className={`progress ${progressColor} w-56 mt-2.5`}
          value={stat.base_stat}
          max="160"
        ></progress>
        <div className="pl-3 mt-1">
          <p className="text-xs font-bold ">{stat.base_stat}</p>
        </div>
      </div>
    </div>
  );
}
