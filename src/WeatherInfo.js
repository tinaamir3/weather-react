import React from "react";
import FormattedDate from "./FormattedDate";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import WeatherTemperature from "./WeatherTemperature";
import {WiStrongWind} from "react-icons/wi";
import {WiHumidity} from "react-icons/wi";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return (
    <div className="WeatherInfo">
    <h1>
        {props.data.city}
      </h1>
      <h2>
        <small>Last Updated:</small><FormattedDate date={props.data.date} />
        <br />{props.data.description}
        </h2>
      <h2>
        <WeatherIcon code={props.data.icon} size={86}/>
      </h2>
      <h2 className="temp">
          <WeatherTemperature celsius={props.data.temperature}/>
          </h2>
<div>
      <div className="row">
        <div className="col-3 text-center"> 
           <Sunrise sr={props.data.sunrise} />
        </div>

        <div className="col-3 text-center">
        <Sunset ss={props.data.sunset} />
        </div>

          
        <div className="col-3 text-center">
          <WiHumidity size="2.2em" color="#134293"/><br />
          <span className="data">
          {props.data.humidity}%</span>
        </div>

        <div className="col-3 text-center">
          <WiStrongWind size="2.2em" color="grey"/> <br />
         <span className="data">
          {Math.round(props.data.wind)} km/h </span>
          </div>
        </div>
      </div>
      </div>
    );
}