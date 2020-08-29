import { combineReducers } from 'redux'
import selectDays from './selectDays'
import selectCity from './selectCity'
import selectDay from './selectDay'
export default combineReducers({
  selectDays,
  selectCity,
  selectDay
})
