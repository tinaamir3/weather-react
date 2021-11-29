import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <footer> <small className="coded">
        Coded by Tina Amir-Ghasemi {""}
    <a href="https://github.com/tinaamir3/weather-react" target="_blank" rel="noreferrer"> 
 GitHub </a>
    </small></footer>
    </div>
  );
}

export default App;
