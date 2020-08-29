const selectDay = (state = {dayInfo:{}}, action) => {
  switch(action.type){
    case 'SELECT_DAY': 
      return {
        dayInfo: action.dayInfo
      }

    default:
      return state
  }
}
export default selectDay