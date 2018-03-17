import { combineReducers } from 'redux'

const events = (state = [], action) => {
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

const date = (state = Date(), action) => {
  switch (action.type) {
    case 'CHANGE_DATE':
      return action.date;
    default:
      return state;
  }
}
 
export default combineReducers({
  events,
  date
})