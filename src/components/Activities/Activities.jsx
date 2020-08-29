import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './activities.css'
import { getDate } from '../helpers'

class activities extends Component {
  componentDidMount = () => {
    document.documentElement.scrollTop = 0
  }

  render = () => {
    return (
      <div className="activities-dayInfo">
        <p>{getDate(this.props.dayInfo.dt)}</p>
        <p>{this.props.cityName}</p>
      </div>
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