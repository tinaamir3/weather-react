import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css"; 
import axios from "axios";
import {WiHorizonAlt} from "react-icons/wi";
import {WiHorizon} from "react-icons/wi";

export default function Weather(props) {
  
  const[weatherData, setweatherData]=useState({ready:false});
  function handleResponse(response){
    console.log(response.data);
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
      description: response.data.weather[0].description,
      date: "November 23, 2021",
      time: "17:45"
    });
  }
if (weatherData.ready){
  return (
    <div className="Weather">
      <form className="mb-2">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              class="form-control"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-90"
            />
          </div>
        </div>
      </form>

      <h1>
        {weatherData.city}
        <br />
      </h1>
      <h6>{weatherData.date}</h6>
      <h6>{weatherData.time}</h6>
      <h2>
        <img src={weatherData.iconUrl} alt={weatherData.description}/>
      </h2>
      <h3>
          <span className="temperature">{Math.round(weatherData.temperature)}</span>
          <span className="unit">°C</span>
          </h3>


      <p className="feelsLike">
        Feels like: <strong>{Math.round(weatherData.feels)}</strong>°C
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
          {weatherData.humidity}%</span>
        </div>

        <div className="col-3 text-center">
          <i class="fas fa-wind fa-1x wind"></i> <br />
         <span className="data"> Wind: <br />
          {Math.round(weatherData.wind)} km/h </span>
          </div>
         
        </div>
      </div>
    </div>
  );
} else {
  const apiKey = "1b8abfcfd13f6be4d6f095c6de05ba7f";
  
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}