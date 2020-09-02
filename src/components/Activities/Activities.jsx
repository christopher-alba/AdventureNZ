import {GoogleMap, Marker} from "react-google-maps"
import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './activities.css'
import { getDate } from '../helpers'
import Map from '../Map/Map'

class activities extends Component {
  componentDidMount = () => {
    document.documentElement.scrollTop = 0
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
          <Map googleMapURL= {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY_GOOGLE}`}
          loadingElement={<div style={{height:"100%"}} />}
          containerElement={<div style={{height:"80vh", width:"80vw", margin: "0 auto 0 auto"}} />}
          mapElement={<div style={{height:"100%"}} />}
          ></Map>
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