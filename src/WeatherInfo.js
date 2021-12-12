import React from "react";
import FormattedDate from "./FormattedDate";
import {WiHorizonAlt} from "react-icons/wi";
import {WiHorizon} from "react-icons/wi";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props){
    return (
    <div className="WeatherInfo">
    <h1>
        {props.data.city}
      </h1>
      <h6>
        <FormattedDate date={props.data.date} />
        {props.data.description}
        </h6>
      <h2>
        <img src={props.data.iconUrl} alt={props.data.description}/>
      </h2>
      <h3>
          <WeatherTemperature celsius={props.data.temperature}/>
          </h3>


      <p className="feelsLike">
        Feels like: <strong>{Math.round(props.data.feels)}</strong>°C
      </p>
<div>
      <div className="row">
        <div className="col-3 text-center">
          <WiHorizonAlt size="2.5em" color="orangered"/> <br /> 
           <span className="data">5am</span>
        </div>

        <div className="col-3 text-center">
          <WiHorizon size="2.5em" color="orangered"/>
          <br />
        <span className="data">6pm</span>
        </div>

          
        <div className="col-3 text-center">
          <i class="fas fa-water humidity"></i><br />
          <span className="data">Humidity:
          <br />
          {props.data.humidity}%</span>
        </div>

        <div className="col-3 text-center">
          <i class="fas fa-wind fa-1x wind"></i> <br />
         <span className="data"> Wind: <br />
          {Math.round(props.data.wind)} km/h </span>
          </div>
         
        </div>
      </div>
      </div>
    );
}