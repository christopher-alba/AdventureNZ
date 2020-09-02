import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"
import { compose, withProps } from "recompose"
import { SearchBox } from "react-google-maps/lib/components/places/SearchBox"
import React, { useEffect, useState } from 'react'
const MyMapComponent = () => {


  let [latitude, setLatitude] = useState(0)
  let [longitude, setLongitude] = useState(0)
  let [coordsSet, setCoordsSet] = useState(false)

  useEffect(() => {
    getLocation()
  })

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    }
  }

  const showPosition = (position) => {
    setLatitude(position.coords.latitude) 
    setLongitude(position.coords.longitude)
    console.log(latitude);
    console.log(longitude);
    setCoordsSet(true)
  }


  
  

  return (
    coordsSet && <GoogleMap defaultZoom={15} defaultCenter={{ lat: latitude, lng: longitude }} />
  )


}
const WrappedMap = withScriptjs(withGoogleMap(MyMapComponent))

export default WrappedMap