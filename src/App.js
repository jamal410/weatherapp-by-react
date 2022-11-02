import logo from './logo.svg';
// import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";
import './index.css';
import axios from "axios"

function App() {
  
  // function Weather() {
    const [cityName, setCityName] = useState("");
    const [Weather, setWeather] = useState("");
  
    const submitHandler = (e) => {
  
      e.preventDefault();
      console.log("city: " + cityName);
  
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`)
        .then(function (response) {
          console.log("data: ", response.data);
  
          setWeather(response.data)
  
  
        })
        .catch(function (error) {
          //handle error
          console.log(error);
        })
      }
      return 
      <div>
  shehzaD
        <form onSubmit={submitHandler}>
          <input type="text"
            placeholder='Enter City Name'
            onChange={(e) => {
              setWeather(e.target.value);
            }}
          />
          <button type="submit">Get Weather</button>
  
        </form>
      </div>
    
  
}

export default App;
