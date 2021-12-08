import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css"; 
import axios from "axios";

export default function Weather() {
  const[ready,setReady]=useState(false);
  const[temperature, setTemperature]=useState(null);
  function handleResponse(response){
    setTemperature(response.data.main.temp);
  setReady(true);  
  }
if (ready){
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
        Toronto
        <br />
      </h1>
      <h6>November 23, 2021</h6>
      <h6>23:23</h6>
      <h2>
        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="weather icon"/>
      </h2>
      <h3>
          <span className="temperature">{Math.round(temperature)}</span>
          <span className="unit">°C</span>
          </h3>


      <p className="feelsLike">
        Feels like: <strong>2°C</strong>
      </p>

      <div className="row">
        <div className="col">
          <i className="fas fa-tint fa-1x prescipitation"></i> <br />
          Prescipitation: 2mm
          <p class="presc"></p>
        </div>

        <div className="col">
          <i class="fas fa-wind fa-1x wind"></i> <br />
          Wind: <br />
          23 km/h
        </div>
        <div className="col">
          <i class="fas fa-water"></i><br />
          Humidity:
          <br />
          80%
        </div>
      </div>
    </div>
  );
} else {
  const apiKey = "1b8abfcfd13f6be4d6f095c6de05ba7f";
  let city="Toronto";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}