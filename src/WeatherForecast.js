import axios from "axios";
import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props){
    function handleResponse(response){
    }
let apiKey= "1b8abfcfd13f6be4d6f095c6de05ba7f";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}
&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
    return (<div className="WeatherForecast">
<div className="row">
    <div className="col">
        <div className="WeatherForecast-day">Thu</div>
        <WeatherIcon code="01d" size={20}/>
<div className="WeatherForecast-temps">
    <span className="WeatherForecast-temp-max">19°</span>
     <span className="WeatherForecast-temp-min">10°</span>
</div>
    </div>
</div>
    </div>
    );
}