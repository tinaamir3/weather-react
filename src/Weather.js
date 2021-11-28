import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

export default function Weather() {
  let weatherData = {
    city: "Toronto",
    date: "November 1st, 2021",
    time: "21:59",
    imgSrc: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
    temperature: "17",
    prescipitation: "0mm",
    wind: "22",
    humidity: "16"
  };

  return (
    <div className="Weather">
      <form className="mb-5">
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
        <img src={weatherData.imgSrc} alt="weather icon"/>
      </h2>
      <h3>{weatherData.temperature}</h3>

      <p className="celsius">°C</p>

      <p>
        Feels like: <strong>2</strong>°
      </p>

      <div className="row">
        <div className="col">
          <i className="fas fa-tint fa-1x prescipitation"></i> <br />
          Prescipitation: {weatherData.prescipitation}
          <p class="presc"></p>
        </div>

        <div className="col">
          <i class="far fa-smile"></i> <br />
          Wind: <br />
          {weatherData.wind} km/h
        </div>
        <div className="col">
          <i class="fas fa-tint"></i><br />
          Humidity:
          <br />
          {weatherData.humidity}%
        </div>
      </div>

    <small className="coded">
        Coded by Tina Amir-Ghasemi {""}
    <a href="https://github.com/tinaamir3/weather-react" target="_blank" rel="noreferrer"> 
 GitHub </a>
    </small>
    </div>
  );
}