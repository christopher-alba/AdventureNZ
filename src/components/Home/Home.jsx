import React, { Component } from 'react'
import './home.css'

const Home = () => {

  let forcastTenDays = []


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
        forcastTenDays = response.list.map(forcast => {
          return forcast
        })

        console.log(forcastTenDays)})
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
    </>
  )
}

export default Home