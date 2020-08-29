export const getDate = (dt) => {
  let date = new Date(dt * 1000)
  let day = date.getDate()
  let month = date.getMonth()
  let weekday = date.getUTCDay()

  switch (weekday) {
    case 0:
      weekday = "Sunday"
      break;
    case 1:
      weekday = "Monday"
      break;
    case 2:
      weekday = "Tuesday"
      break;
    case 3:
      weekday = "Wednesday"
      break;
    case 4:
      weekday = "Thursday"
      break;
    case 5:
      weekday = "Friday"
      break;
    case 6:
      weekday = "Saturday"
      break;
    default:
      break;
  }

  switch (month) {
    case 0:
      month = "January"
      break;
    case 1:
      month = "February"
      break;
    case 2:
      month = "March"
      break;
    case 3:
      month = "April"
      break;
    case 4:
      month = "May"
      break;
    case 5:
      month = "June"
      break;
    case 6:
      month = "July"
      break;
    case 7:
      month = "August"
      break;
    case 8:
      month = "September"
      break;
    case 9:
      month = "October"
      break;
    case 10:
      month = "November"
      break;
    case 11:
      month = "December"
      break;
  }
  return `${weekday} ${day} ${month}`
}