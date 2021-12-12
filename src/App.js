import './App.css';
import Weather from "./Weather";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Toronto" />
      </header>
      <footer> <small className="coded">
        Coded by Tina Amir-Ghasemi {""}
    <a href="https://github.com/tinaamir3/weather-react" target="_blank" rel="noopener noreferrer"> 
 GitHub </a>
    </small></footer>
    </div>
  );
}

export default App;
