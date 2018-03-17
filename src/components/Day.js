import React from 'react'
 
const Day = ({ fromCurrentMonth, day, events }) => (
  <div className={ `day ${!fromCurrentMonth ? 'fromOtherMonth' : ''}` }>
  	<div className="dayNumber">
  		<div className="number">{ day }</div>
  	</div>
  </div>
)

 
export default Day