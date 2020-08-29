import { combineReducers } from 'redux'
import selectDays from './selectDays'
import selectCity from './selectCity'
export default combineReducers({
  selectDays,
  selectCity
})
