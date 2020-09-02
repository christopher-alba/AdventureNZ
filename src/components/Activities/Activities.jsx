import { GoogleMap, Marker } from "react-google-maps"
import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './activities.css'
import { getDate } from '../helpers'
import { Button } from 'semantic-ui-react'

class activities extends Component {

  state = {
    activity: "tourism",
  }

  componentDidMount = () => {
    document.documentElement.scrollTop = 0
    if(this.props.dayInfo.weather[0].main.includes("Rain")){
      this.setState({activity: "indoors"})
    }
  }



  render = () => {
    console.log(this.props.dayInfo);
    return (
      <>
        <div className="activities-dayInfo">
          <p>{getDate(this.props.dayInfo.dt)}</p>
          <p>{this.props.cityName}</p>
          <p className="day info"><strong>Day:</strong> {this.props.dayInfo.feels_like.day} °C </p>
          <p className="night info"><strong>Night: </strong> {this.props.dayInfo.feels_like.night} °C</p>
          <p className="evening info"><strong> Evening:</strong> {this.props.dayInfo.feels_like.eve} °C</p>
          <p className="morning info"> <strong>Morning:</strong> {this.props.dayInfo.feels_like.morn} °C</p>
          <p className="weather info"><strong>Weather: </strong>{this.props.dayInfo.weather[0].main}, {this.props.dayInfo.weather[0].description}</p>
        </div>
        <div className="activities-list">
          <h1>Activities when {this.props.dayInfo.weather[0].description}</h1>
          { !this.props.dayInfo.weather[0].main.includes("Rain") && <Button onClick={() => {
            this.setState({activity:"Parks"})
          }}>Parks</Button>}
          <Button onClick={() => {
            this.setState({activity:"Cafes"})
          }}>Cafes</Button>
          <Button onClick={() => {
            this.setState({activity:"Tourism"})
          }}>General Tourism</Button>
          <Button onClick={() => {
            this.setState({activity:"Indoors"})
          }}>Indoors</Button>
          <iframe
            width="100%"
            height="500px"
            frameBorder="0" style={{ border: "0" }}
            src={`https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_API_KEY_GOOGLE}&q=${this.props.cityName}+city+${this.state.activity}&zoom=8
            `} allowFullScreen>
          </iframe>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dayInfo: state.selectDay.dayInfo,
    cityName: state.selectCity.cityName
  }
}

export default connect(mapStateToProps)(activities)