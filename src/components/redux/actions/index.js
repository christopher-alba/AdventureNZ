export const selectDays = daysInfo => {
  return {
    type: 'SELECT_DAYS',
    daysInfo
  }
}

export const selectCity = cityName => {
  return {
    type: 'SELECT_CITY',
    cityName
  }
}