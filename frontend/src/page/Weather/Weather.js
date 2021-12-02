import { Grid } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import API from '../../API/API'
import './Weather.css'

export default function HomeBoard() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    async function getWeather() {
      let city = localStorage.getItem("weatherCity");
      if (city === null)
        localStorage.setItem("weatherCity", "Paris")
      await API.GetWeather(localStorage.getItem("weatherCity"), 1, "standard").then((response) => {
        setWeather(response.data)
      }, (error) => {
        console.log(error)
      })
    }
    getWeather()
  },[])

  return (
    <Grid>
      {weather.map(item =>
          <div key={item.id}>
            <Grid container xs={12} justifyContent='center' alignItems='center'>
              <img className="imgWeather" alt='Weather' src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`} />
              <Grid className='infoWeather'>
                <div className='titleWeather'>
                  {localStorage.getItem("weatherCity")}
                </div>
                <div className='infoWeatherText'> Méteo : {item.weather.description}</div>
                <div className='infoWeatherText'> Température : {item.temp}°C</div>
                <div className='infoWeatherText'> Pression : {item.pres} hPa</div>
                <div className='infoWeatherText'> Humidité : {item.rh}%</div>
              </Grid>
            </Grid>
          </div>
        )}
    </Grid>
  );
}