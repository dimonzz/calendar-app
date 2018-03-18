import React from 'react'
 

class Day extends React.Component {

	onEventClick = (eventToEdit, clickEvent) => {
		clickEvent.stopPropagation();
		this.props.onEventClick(eventToEdit);
	}

	onEventDelete = (eventToDelete, clickEvent) => {
		clickEvent.stopPropagation();
		this.props.onEventDelete(eventToDelete.id, eventToDelete.dateString);
	}

	render() {
		return <div className={ `day ${!this.props.fromCurrentMonth ? 'fromOtherMonth' : ''}` } onClick={this.props.onClick}>
			  	<div className="dayNumber">
			  		<div className="number">{ this.props.day }</div>
			  		{ this.props.events.map((event) => {
			  			return <a key={ event.id } className="event badge badge-info" onClick={ this.onEventClick.bind(this, event) }>
			  						<span className="eventTitle">{ event.title }</span>
			  						<span className="removeEventBtn" onClick={ this.onEventDelete.bind(this, event) }>x</span>
			  					</a>
			  		})}
			  	</div>
			  </div>		
	}
}
 
export default Day