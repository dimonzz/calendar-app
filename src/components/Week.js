import React from 'react'
 
const Week = ({ fromCurrentMonth, day, events }) => (
  <div className="day {!fromCurrentMonth ? 'fromOtherMonth' : ''}">
  	{ day }
  </div>
)

 
export default Week