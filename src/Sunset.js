import React from "react";
import {WiHorizon} from "react-icons/wi";

export default function Sunrise(props) {
  let hours = props.ss.getHours();
  let minutes = props.ss.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
          <WiHorizon size="2.5em" color="orangered"/><span className="data">{hours}:{minutes}</span>
    </div>
  );
}
