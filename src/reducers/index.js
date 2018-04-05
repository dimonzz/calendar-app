import { combineReducers } from 'redux'


const events = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
    case 'UPDATE_EVENT':
    case 'DELETE_EVENT': {
      const { id, dateString } = action.event
      const [day, month, year] = dateString.split('/')
      const yearObj = state[year] || {}
      const monthObj = yearObj[month] || {}
      const dayObj = monthObj[day] || {}
      const { [id]: deletedEvent, ...dayWithoutDeleted } = dayObj

      state = {
        ...state,
        [year]: {
          ...yearObj,
          [month]: {
            ...monthObj,
            [day]: action.type === 'DELETE_EVENT'
              ? dayWithoutDeleted
              : {
                ...dayObj,
                [id]: action.event
              }
          }
        }
      }
      break
    }
    default:
  }
  return state
}

const date = (state = new Date(), action) => {
  switch (action.type) {
    case 'CHANGE_DATE':
      return action.date
    default:
      return state
  }
}

const modal = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        show: true,
        event: action.event,
        dateString: action.dateString
      }
    case 'HIDE_MODAL':
      return {
        show: false
      }
    default:
      return state
  } 
}
 
export default combineReducers({
  events,
  date,
  modal
})