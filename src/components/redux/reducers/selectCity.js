const selectCity = (state = {cityName:''}, action) => {
  console.log(action);
  switch(action.type){
    case 'SELECT_CITY': 
      return {
        ...state,
        cityName: action.cityName
      }
    default:
      return state
  }
}
export default selectCity