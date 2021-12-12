import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css"; 
import axios from "axios";


import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  
  const[weatherData, setweatherData]=useState({ready:false});
  const [city, setCity]=useState(props.defaultCity);
  function handleResponse(response){
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
      description: response.data.weather[0].description,
      date: new Date(response.data.dt *1000),
    });
  }
  function search(){
const apiKey = "1b8abfcfd13f6be4d6f095c6de05ba7f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function handleCityChange(event){
setCity(event.taget.value);
  }
if (weatherData.ready){
  return (
    <div className="Weather">
      <form className="mb-2" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              class="form-control"
              autocomplete="off"
              autoFocus="on"
              onChange={handleCityChange}
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
      <WeatherInfo data={weatherData}/>

      
    </div>
  );
} else {
search();
    return "Loading...";
  }
}