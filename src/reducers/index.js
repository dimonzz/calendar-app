import { combineReducers } from 'redux'

const eventsReducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        {
          id: action.id,
      date: action.date,
      title: action.title,
      participants: action.participants,
      description: action.description
        }
      ]
    case 'UPDATE_EVENT':
      return state.map(event =>
        (event.id === action.id)
          ? {
            ...event, 
            title: action.title,
            participants: action.participants,
            description: action.description
          }
          : event
      )
    case 'DELETE_EVENT':
      const index = state.findIdex((event) => event.id === state.id)
      const stateCopy = state.slice()
      if (index > -1) stateCopy.splice(index, 1)
      return stateCopy
    default:
      return state
  }
}

const calendarReducers = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_DATE':
      return {
        date: action.date,
        month: action.month
      }
    default:
      return state;
  }
}
 
export default combineReducers({
  eventsReducers,
  calendarReducers
})