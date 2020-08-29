const selectDays = (state = {daysInfo:{}}, action) => {
  switch(action.type){
    case 'SELECT_DAYS': 
      return {
        daysInfo: action.daysInfo
      }

    default:
      return state
  }
}
export default selectDays