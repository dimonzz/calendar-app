export const addEvent = event => ({
  type: 'ADD_EVENT',
  event : {
    ...event,
    id: new Date().getTime().toString()
  }
})

export const updateEvent = event => ({
  type: 'UPDATE_EVENT',
  event
})
 
export const deleteEvent = event => ({
  type: 'DELETE_EVENT',
  event
})
 
export const changeDate = date => ({
  type: 'CHANGE_DATE',
  date
})

export const showModal = event => ({
  type: 'SHOW_MODAL',
  event
})

export const hideModal = () => ({
  type: 'HIDE_MODAL'
})
 