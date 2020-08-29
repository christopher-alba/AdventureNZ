const selectDay = (state = {dayInfo:{}}, action) => {
  switch(action.type){
    case 'SELECT_DAY':
      return {
        ...state,
        dayInfo:action.dayInfo
      }
    default:
      return state
  }
}
export default selectDay