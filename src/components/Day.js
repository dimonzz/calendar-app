import React from 'react'
 
const Day = ({ fromCurrentMonth, day, events }) => (
  <div className={ `day ${!fromCurrentMonth ? 'fromOtherMonth' : ''}` }>
  	{ day }
  </div>
)

 
export default Day