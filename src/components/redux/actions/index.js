export const selectDay = dayInfo => {
  return {
    type: 'SELECT_DAY',
    dayInfo
  }
}

export const selectCity = cityName => {
  return {
    type: 'SELECT_CITY',
    cityName
  }
}