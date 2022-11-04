import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import { useState, useEffect } from "react";
import axios from "axios";

function Hi() {

  const [cityName, setCityName] = useState("lahore");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    
    const getWeather = () => { // get current weather 
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`)
        .then(function (response) {

          console.log("data: ", response.data);
          setWeather(response.data)

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
    getWeather();
  }, [])


  
    // e.preventDefault();

    console.log("city: " + cityName);
   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`)
      .then(function (response) {

        console.log("data: ", response.data);

        setWeather(response.data)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  useEffect(() => {
    const getWeather = () => { // get current weather 
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`)
        .then(function (response) {

          console.log("data: ", response.data);
          setWeather(response.data)

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
    getWeather();
  }, [])



  return <div id='container'>

   
    <h1>
      weather app:
    </h1>

    <form onSubmit={submitHandler}>

      <input
        type="text"
        placeholder='Enter your City Name'
        onChange={(e) => {
          setCityName(e.target.value)
        }}
      />
<br />
<br />
      <button type="submit">Get Weather</button>

    </form>

    <br />

    {(weather?.name)?

      <div>
        <div>Weather of {weather?.name}</div> 
        <br />
        <div>Current Temp {weather?.main?.temp}</div>
      </div>
      :
      null
    }

  </div>



ReactDOM.render(<Hi />, document.querySelector('#root'));