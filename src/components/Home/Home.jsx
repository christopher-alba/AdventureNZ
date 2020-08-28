import React, { useState, useEffect } from 'react'
import './home.css'


const Home = () => {
  let [forcastTenDays, setForcastTenDays] = useState()
  useEffect(() => {

  })
  const fetchWeather = () => {
    fetch("https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=Auckland&lat=0&lon=0&cnt=10&units=metric", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "34092fd749mshf784e4a6a066a34p158e4cjsna61883e3c77d"
      }
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        console.log(response);
        setForcastTenDays(response.list.map(forcast => {
          return forcast
        }))})
      .catch(err => {
        console.log(err);
      });
  }


  return (
    <>
      <div className="home-landing-container">
        <img className="home-landing" src="https://silvertrips.in/wp-content/uploads/2019/06/new-zealand.jpg" alt="" />
      </div>
      <div className="home-landing-text">
        <h1>Welcome to New Zealand</h1>
        <div className="home-inner">
          <div className="home-text">
            <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptatibus incidunt enim natus reiciendis expedita veritatis impedit temporibus officiis odio maiores voluptas dolore cumque odit iure alias mollitia, velit, voluptates exercitationem corrupti. Atque voluptatem expedita cum iusto ipsam voluptatum quae architecto repudiandae mollitia officia provident quibusdam impedit, aspernatur tenetur enim.</p>
          </div>
          <div className="home-icon">
            <i className="tree icon"></i>
          </div>
          <button onClick={() => fetchWeather()}></button>
        </div>
      </div>
      <div>
        Hello There
        {forcastTenDays && forcastTenDays.map(forcast => {
          console.log(forcast);
          let date = new Date(forcast.dt*1000)
          return (
            <div>
              <p>Date: {date.toString()}</p>
          <p>Temperature (Day): {forcast.feels_like.day}</p>
          <p>Temperature (Night): {forcast.feels_like.night}</p>
          <p>Temperature (Evening): {forcast.feels_like.eve}</p>
          <p>Temperature (Morning): {forcast.feels_like.morn}</p>
          <p>Weather: {forcast.weather[0].main}, {forcast.weather[0].description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home