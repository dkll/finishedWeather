import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const api = {
  key: '2cbb81ca9e678bc7ef28e1aee8455825',
  base: 'https://api.openweathermap.org/data/2.5/'
}


function App() {

  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        console.log(result);
    })
    
  }

  return (
    <div className="container">
      <div>
          <h1>Weather App</h1>
          <input
              type="text"
              placeholder="Enter city/town..."
              onChange={(e) =>
                  setSearch(
                      e.target
                          .value
                  )
              }
          />
          <button
              onClick={
                  searchPressed
              }
          >
              Search
      </button>
      </div>

      {typeof weather.main != 'undefined' ? <div><p>{weather.name}</p>
        <p>{weather.main.temp}° Celcius</p>
          <p>{weather.weather[0].main}</p>
          <p>({weather.weather[0].description})</p></div> : ''}



          
      </div>
  );
}

export default App;
