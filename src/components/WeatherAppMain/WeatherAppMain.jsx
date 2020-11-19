import React, { useState, useEffect } from "react";
import styles from "./WeatherAppMain.module.scss";

const WeatherAppMain = () => {

  const [weather, setWeather] = useState([])
  const [bristol, setBristol] = useState([])
  const [rome, setRome] = useState([])

  const fetchData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=2643744&units=metric&appid=8db2109807015fdef60439fd9eb32637`)
      .then(response => response.json())
      .then(response => {
        setWeather(response.main)
      });
  }

  useEffect(() => {
    fetchData();
  }, [])

  const fetchBristol = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=4749005&units=metric&appid=8db2109807015fdef60439fd9eb32637`)
      .then(response => response.json())
      .then(response => {
        setBristol(response.main)
      });
  }

  const fetchRome = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=4219762&units=metric&appid=8db2109807015fdef60439fd9eb32637`)
      .then(response => response.json())
      .then(response => {
        setRome(response.main)
      });
  }

  return (

    <div>
      <section className={styles.main}>
        <section className={styles.card}>
          <h1>London</h1>
          <div>Temp: {weather.temp} °C</div>
          <div>Min Temp: {weather.temp_min} °C</div>
          <div>Max Temp: {weather.temp_max} °C</div>
          <div>Humidity: {weather.humidity} %</div>
        </section>
        <section className={styles.card}>
          <h1>Bristol</h1>
          <button onClick={fetchBristol}>Click for Bristol Weather!</button>
          <div>Temp: {bristol.temp} °C</div>
          <div>Min Temp: {bristol.temp_min} °C</div>
          <div>Max Temp: {bristol.temp_max} °C</div>
          <div>Humidity: {bristol.humidity} %</div>
        </section>
        <section className={styles.card}>
          <h1>Rome</h1>
          <button onClick={fetchRome}>Click for Rome Weather!</button>
          <div>Temp: {rome.temp} °C</div>
          <div>Min Temp: {rome.temp_min} °C</div>
          <div>Max Temp: {rome.temp_max} °C</div>
          <div>Humidity: {rome.humidity} %</div>
        </section>
      </section>
    </div>

  );
};

export default WeatherAppMain;
