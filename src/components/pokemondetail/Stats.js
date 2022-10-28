import React from "react";
import Stat from "./Stat";

export default function Stats({ stats, progressColor }) {
  return (
    <div>
      <h1 className="text-xl py-2">
        <b>Stats:</b>
      </h1>
      {stats.map((stat, idx) => {
        return <Stat key={idx} stat={stat} progressColor={progressColor}/>;
      })}
    </div>
  );
}
