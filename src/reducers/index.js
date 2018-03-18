import { combineReducers } from 'redux'

const getCurrentDayFromState = (stateCopy, action) => {
  if (!action.dateString) return;
  const parts = action.dateString.split('/');
  parts.map((part) => parseInt(part, 10));
  return stateCopy[parts[2]][parts[1]][parts[0]];
}

const extractEventFromAction = (action) => {
  return {
    id: action.id,
    title: action.title,
    description: action.description,
    participants: action.participants,
    dateString: action.dateString
  };
}

const events = (state = [], action) => {
  // JS saves references to nested objects so we need to create deep copy
  let stateCopy = JSON.parse(JSON.stringify(state));
  const currentDay = getCurrentDayFromState(stateCopy, action);

  switch (action.type) {
    case 'ADD_EVENT':
      const parts = action.dateString.split('/');
      if (!stateCopy[parts[2]]) {
        stateCopy[parts[2]] = {};
      }
      if (!stateCopy[parts[2]][parts[1]]) {
        stateCopy[parts[2]][parts[1]] = {};
      }
      if (!stateCopy[parts[2]][parts[1]][parts[0]]) {
        stateCopy[parts[2]][parts[1]][parts[0]] = [];
      }
      stateCopy[parts[2]][parts[1]][parts[0]].push(extractEventFromAction(action));
      return stateCopy;
    case 'UPDATE_EVENT':
      let updElIndex = currentDay.findIndex((el) => {
        return el.id === action.id;
      });
      if (updElIndex > -1) {
        currentDay[updElIndex] = extractEventFromAction(action);
      }
      return stateCopy;
    case 'DELETE_EVENT':
      let index = currentDay.findIndex((el) => {
        return el.id === action.id;
      });
      if (index > -1) {
        currentDay.splice(index, 1);
      }
      return stateCopy;
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

const modal = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        show: true,
        event: action.event,
        dateString: action.dateString
      };
    case 'HIDE_MODAL':
      return {
        show: false
      };
    default:
      return state;
  } 
}
 
export default combineReducers({
  events,
  date,
  modal
})