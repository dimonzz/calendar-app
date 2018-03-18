export const addEvent = (title, participants, description, dateString) => ({
  type: 'ADD_EVENT',
  id: new Date().getTime(),
  dateString,
  title,
  participants,
  description
})

export const updateEvent = (id, title, participants, description, dateString) => ({
  type: 'UPDATE_EVENT',
  id,
  title,
  participants,
  description,
  dateString
})
 
export const deleteEvent = (id, dateString) => ({
  type: 'DELETE_EVENT',
  id,
  dateString
})
 
export const changeDate = (date) => ({
  type: 'CHANGE_DATE',
  date
})

export const showModal = (event, dateString) => ({
  type: 'SHOW_MODAL',
  event,
  dateString
})

export const hideModal = () => ({
  type: 'HIDE_MODAL'
})
 