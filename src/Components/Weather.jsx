import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import search from '../assets/search.png';
import weather from '../assets/weather.png';
import Rain from '../assets/rain.png';
import cloud from '../assets/cloud..png';
import snow from '../assets/snow..png';
import wind from '../assets/wind.png';
import drizzle from '../assets/drizzle.png';
import humidity from '../assets/humidity.png';
import clear from '../assets/clear.png';

const Weather = () => {
  const inputref = useRef() 

  const [weatherData, setWeatherData] = useState(null);

  const allIcons = {
    1000: clear, // Clear sky
    1003: cloud, // Partly cloudy
    1006: cloud, // Cloudy
    1009: cloud, // Overcast
    1030: drizzle, // Mist
    1063: Rain, // Patchy rain possible
    1210: snow, // Light snow
  };

  const apiKey = "044cd223652a42bfa0a24850250403"; // Your WeatherAPI key

  const searchs = async (city) => {
    if (city === "") {
      alert("Enter city name")
      return;
      
    }
    try {
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
      const response = await fetch(url);
      const data = await response.json();
      
      if (!response.ok) {
        alert(data.message)
        return;
      }

      console.log(data); // Logs the weather data to the console

/*if (!data || !data.current) {
        console.error("Invalid API response:", data);
        return;
      }*/

      const icons = allIcons[data.current.condition.code] || clear;
      setWeatherData({
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph,
        temperature: Math.floor(data.current.temp_c),
        location: data.location.name,
        icon: icons,
      });
    } catch (error) {
      setWeatherData(false)
      console.error("Error in fetching weather Data")
    }
  };

  useEffect(() => {
    searchs("Nigeria");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputref} type="text" placeholder="search" />
        <img src={search} alt="Search Icon" onClick={()=>searchs(inputref.current.value)} />

      </div>

     

      {weatherData ? <>
          <img src={weatherData.icon} alt="Weather Icon" className="clear" />
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="location">{weatherData.location}</p>

          <div className="weather-data">
            <div className="col">
              <img src={humidity} alt="Humidity Icon" />
              <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind} alt="Wind Icon" />
              <div>
                <p>{weatherData.windSpeed} Km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>:<></>}
    </div>
  );
};

export default Weather;
