import React from "react";
import {WiHorizonAlt} from "react-icons/wi";

export default function Sunrise(props) {
  let hours = props.sr.getHours();
  let minutes = props.sr.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
          <WiHorizonAlt size="2.5em" color="orangered"/><span className="data">{hours}:{minutes}</span>
    </div>
  );
}
