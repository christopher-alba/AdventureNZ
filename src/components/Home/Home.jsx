import React, { useState, useEffect } from 'react'
import './home.css'
import { Dropdown, Button } from 'semantic-ui-react'


const Home = () => {
  let [forcastTenDays, setForcastTenDays] = useState()
  let [selectedItem, setSelectedItem] = useState()
  let [selectedItemHeader, setSelectedItemHeader] = useState()

  let cityOptions = [
    {
      key: 'Auckland',
      text: 'Auckland',
      value: 'Auckland'
    },
    {
      key: 'Wellington',
      text: 'Wellington',
      value: 'Wellington'
    },
    {
      key: 'Christchurch',
      text: 'Christchurch',
      value: 'Christchurch'
    }
  ]

  useEffect(() => {

  })
  const fetchWeather = () => {
    fetch(`https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=${selectedItem}&lat=0&lon=0&cnt=10&units=metric`, {
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
        }))
        setSelectedItemHeader(selectedItem)

      })
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

        </div>
      </div>
      <div class="home-selection">
        <Dropdown
          placeholder='Select City'
          fluid
          selection
          options={cityOptions}
          onChange={async (evt) => {
            console.log(evt.currentTarget.innerText)
            await setSelectedItem(evt.currentTarget.innerText)
            fetchWeather()
          }}
        />
        <Button onClick={() => fetchWeather()}>Get Weather for Next 10 Days</Button>
        <h3 style={{paddingTop:"10%"}}>{selectedItemHeader}</h3>
        <div className="all-forcasts">
          
          {forcastTenDays && forcastTenDays.map(forcast => {
            console.log(forcast);
            let date = new Date(forcast.dt * 1000)
            return (
              <div className ="single-forcast">
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
      </div>

    </>
  )
}

export default Home