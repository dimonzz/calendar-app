export const addEvent = (date, title, participants, description) => ({
  type: 'ADD_EVENT',
  id: new Date().getTime(),
  date,
  title,
  participants,
  description
})

export const updateEvent = (id, title, participants, description) => ({
  type: 'UPDATE_EVENT',
  id,
  title,
  participants,
  description
})
 
export const deleteEvent = id => ({
  type: 'DELETE_EVENT',
  id
})
 
export const changeDate = (date) => ({
  type: 'CHANGE_DATE',
  date
})
 