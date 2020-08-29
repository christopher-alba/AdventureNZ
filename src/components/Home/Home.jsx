import React, { useState, useEffect } from 'react'
import './home.css'
import { Dropdown, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import {selectDays, selectCity} from '../redux/actions/index'
const Home = (props) => {
  console.log(props);
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
  const getActivities = () => {

  }
  const fetchWeather = () => {
    fetch(`https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=${selectedItem}&lat=0&lon=0&cnt=10&units=metric`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        // console.log(response);
        setForcastTenDays(response.list.map(forcast => {
          return forcast
        }))
        props.selectDays(response.list.map(forcast => {
          return forcast
        }))
        setSelectedItemHeader(selectedItem)
        props.selectCity(selectedItem)

      })
      .then(() => {
        document.getElementsByClassName("cityName")[0].scrollIntoView()
      })
      .catch(err => {
        // console.log(err);
        // console.log(process.env.API_KEY);
      });
  }

  const getDate = (date) => {
    let day = date.getDate()
    let month = date.getMonth()
    let weekday = date.getUTCDay()

    switch (weekday) {
      case 0:
        weekday = "Sunday"
        break;
      case 1:
        weekday = "Monday"
        break;
      case 2:
        weekday = "Tuesday"
        break;
      case 3:
        weekday = "Wednesday"
        break;
      case 4:
        weekday = "Thursday"
        break;
      case 5:
        weekday = "Friday"
        break;
      case 6:
        weekday = "Saturday"
        break;
      default:
        break;
    }

    switch (month) {
      case 0:
        month = "January"
        break;
      case 1:
        month = "February"
        break;
      case 2:
        month = "March"
        break;
      case 3:
        month = "April"
        break;
      case 4:
        month = "May"
        break;
      case 5:
        month = "June"
        break;
      case 6:
        month = "July"
        break;
      case 7:
        month = "August"
        break;
      case 8:
        month = "September"
        break;
      case 9:
        month = "October"
        break;
      case 10:
        month = "November"
        break;
      case 11:
        month = "December"
        break;
    }
    return `${weekday} ${day} ${month}`
  }

  return (
    <>
      <div className="home-landing-container">

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
        <div className="home-selection">
          <h2>Get Weather and Find Activities</h2>
          <Dropdown
            placeholder='Select City'
            fluid
            selection
            options={cityOptions}
            onChange={(evt) => {
              console.log(evt.currentTarget.innerText)
              setSelectedItem(evt.currentTarget.innerText)
              
            }}
          />
          <Button onClick={() => fetchWeather()}>Get Weather for Next 10 Days</Button>


        </div>
      </div>

      <div className="weather-main-container">
        <h3 className="cityName" style={{ paddingTop: "10%", fontSize: "3rem", color: "white" }}>{props.cityName}</h3>
        <div className="all-forcasts">
          
          {props.daysInfo.length > 0 && props.daysInfo.map(forcast => {
            let date = new Date(forcast.dt * 1000)
            date = getDate(date)
            return (
              <div className="single-forcast" onClick={() => getActivities()}>
                <div className="date info">
                  {date}
                  <Link to={`/activities/${forcast.weather[0].main}`} ><Button color='grey' y>Find Activities</Button></Link>
                </div>
                <div className="day info"><strong>Day:</strong> {forcast.feels_like.day} °C </div>
                <div className="night info"><strong>Night: </strong> {forcast.feels_like.night} °C</div>
                <div className="evening info"><strong> Evening:</strong> {forcast.feels_like.eve} °C</div>
                <div className="morning info"> <strong>Morning:</strong> {forcast.feels_like.morn} °C</div>
                <div className="weather info"><strong>Weather: </strong>{forcast.weather[0].main}, {forcast.weather[0].description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

function mapStateToProps(state) {
  console.log(state);
  return {
    daysInfo: state.selectDays.daysInfo,
    cityName: state.selectCity.cityName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectDays: (daysInfo) => dispatch(selectDays(daysInfo)),
    selectCity: (cityName) => dispatch(selectCity(cityName))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);