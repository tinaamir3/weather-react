import React, {useState} from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css"; 
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const[weatherData, setweatherData]=useState({ready:false});
  const [city, setCity]=useState(props.defaultCity);

  function handleResponse(response){
    console.log(response.data);
    setweatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt *1000),
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
    });
  }

 function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
setCity(event.target.value);
  }

  function search(){
const apiKey = "1b8abfcfd13f6be4d6f095c6de05ba7f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
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
              className="form-control"
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
<WeatherForecast coordinates={weatherData.coordinates}/>
      
    </div>
  );
} else {
search();
    return "Loading...";
  }
}