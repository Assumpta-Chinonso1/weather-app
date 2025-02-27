import React from 'react'
import './Weather.css'
import search from '../assets/search.png'
import weather from '../assets/weather.png'
import Rain from '../assets/rain.png'
import cloud from '../assets/cloud..png'
import snow from '../assets/snow..png'
import wind from '../assets/wind.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import clear from '../assets/clear.png'

const Weather = () => {
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='search' />
            <img src={search} alt=""  />
        </div>

        <img src={clear} alt="" className='clear' />
        <p className='temperature'>16°C </p>
       <p className='location'>London</p>
        </div>
  )
}

export default Weather