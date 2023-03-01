import styled from 'styled-components';
import { useState, useEffect } from "react";
import { initialWeather } from './WeatherData';

const Style = styled.div`
color: #C5B1AD;
margin: 0px;
position: absolute;
top: 0px;
right: 0px;
padding: 15px;`



const TheWeather = () => {
    const [city, setCity] = useState("London");
    const [weather, setWeather] = useState(initialWeather);
    const [error, setError] = useState(null);
   

    useEffect(() => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=39637cf8059492fb8c980ff66cfcbaa5&units=metric`,
          {
            headers: { Accept: "application/json" },
          }
        )
          .then((res) => res.json())
          .then((weatherObj) => setWeather(weatherObj))
          .catch((err) => setError(err));
          
         
      }, [city]);

      if (error) {
        return <p>Error!</p>;
      }
      
    return (
          <Style>
          <p> {weather.weather[0]["description"]} {Math.floor(Number(weather.main.temp))} ° 
          
           / Min : {Math.floor(Number(weather.main.temp_min))} ° 
              / Max : {" "}{Math.floor(Number(weather.main.temp_max))} °
          </p>
            </Style>
    )
}

export default (TheWeather);