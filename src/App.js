import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import Search from './Search.js'
import Temperature from './Temperature.js'
import MainInfo from './MainInfo.js'
import LowerInfo from './LowerInfo.js'
import './App.css';

function App() {

  const cities = [
    {id: 1, name: 'Moscow'},
    {id: 2, name: 'Samara'},
    {id: 3, name: 'Ekaterinburg'},
    {id: 4, name: 'Volgograd'},
    {id: 5, name: 'Budapest'},
    {id: 6, name: 'Helsinki'}
  ]
  const apikey = '1731d4f498d9084d8807e322407a08e1';

  const [city, setCity] = useState('Moscow')
  const [temperature, setTemperature] = useState(0)
  const [weatherDescription, setWeatherDescription] = useState('')
  const [wind, setWind] = useState(0)
  const [pressure, setPressure] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [precipitation, setPrecipition] = useState(0)
  const [icon, setIcon] = useState('')
  const [measure, setMeasure] = useState('metric')

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${measure}&lang=ru&appid=${apikey}`)
    .then(response => response.json())
    .then(result => {
      setIcon(result.weather[0].icon)
      setTemperature (
        Math.round(result.main.temp)
      )
      setWeatherDescription(result.weather[0].description)
      setWind(result.wind.speed)
      setPressure(result.main.pressure)
      setHumidity(Math.round(result.main.humidity))
    })

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=1&appid=${apikey}`)
    .then(response => response.json())
    .then(result => {
      setPrecipition(Math.round(result.list[0].pop * 100))
    })
  }, [])

  function changeCity() {
    const currentCity = document.querySelector('.search__cityName')
    const changeCity = document.querySelector('.change-city')
    const cityInfo = document.querySelector('.search__cityInfo')
    currentCity.style.display = "none"
    cityInfo.style.visibility = "hidden"
    changeCity.style.display = "block"
  }

  function getNewData() {
    const cityInfo = document.querySelector('.search__cityInfo')
    const currentCity = document.querySelector('.search__cityName')
    const changeCity = document.querySelector('.change-city')
    cityInfo.style.visibility = "visible"
    currentCity.style.display = "block"
    changeCity.style.display = "none"

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${measure}&lang=ru&appid=${apikey}`)
    .then(response => response.json())
    .then(result => {
      setIcon(result.weather[0].icon)
      setTemperature (
        Math.round(result.main.temp)
      )
      setWeatherDescription(result.weather[0].description)
      setWind(result.wind.speed)
      setPressure(result.main.pressure)
      setHumidity(Math.round(result.main.humidity))
    })

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=1&appid=${apikey}`)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setPrecipition(Math.round(result.list[0].pop * 100))
    })
  }

  function changeMeasure(value) {
    const celsius = document.querySelector('.temperature__celsius')
    const fahrenheit = document.querySelector('.temperature__fahrenheit')

    if (value === celsius) {
      setMeasure(prev => 'metric')
      setTemperature(prev => {
        return Math.round(5 / 9 * (prev - 32))
      })
    } else if (value === fahrenheit) {
      setMeasure(prev => 'imperial')
      setTemperature(prev => {
        return Math.round(9 / 5 * prev + 32)
      })
    }
  }


 useEffect(() => {
    setMeasure(measure)
  }, [changeMeasure])

  function insertNewCity(value) {
    setCity(value)
  }

  return (
    <div className="App">
      <header className = "header">
        <Search cities = {cities} city = {city} onChangeCity = {changeCity} onInsertNewCity = {insertNewCity} onGetNewData = {getNewData}/>
        <Temperature  measure = {measure} onChangeMeasure = {changeMeasure} />
      </header>
      <main className = "main">
        <MainInfo icon = {icon} temperature = {temperature} weatherDescription = {weatherDescription}/>
      </main>
      <footer className = "footer">
        <LowerInfo precipitation = {precipitation} humidity = {humidity} pressure = {pressure} wind = {wind}/>
      </footer>
    </div>
  );
}

App.propTypes = {
  cities: PropTypes.array,
  city: PropTypes.string,
  temperature: PropTypes.number,
  measure: PropTypes.string,
  icon: PropTypes.string,
  precipitation: PropTypes.number,
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  wind: PropTypes.number,
  weatherDescription: PropTypes.string,
  insertNewCity: PropTypes.func,
  changeMeasure: PropTypes.func,
  getNewData: PropTypes.func,
  changeCity: PropTypes.func
}

export default App;
