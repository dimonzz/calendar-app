import React from 'react'
 

class Day extends React.Component {
	static defaultProps = {
		events: {}
	}

	onEventClick = (eventToEdit, clickEvent) => {
		clickEvent.stopPropagation()
		this.props.onClick(eventToEdit)
	}

	onEventDelete = (eventToDelete, clickEvent) => {
		clickEvent.stopPropagation()
		this.props.onEventDelete(eventToDelete)
	}

	render() {
		const { day, events, fromCurrentMonth, onClick, dateString } = this.props

		return (
			<div
				onClick={() => fromCurrentMonth && onClick({ dateString })}
				className={`day ${!fromCurrentMonth ? 'fromOtherMonth' : ''}`}
			>
				<div className="dayNumber">
					<div className="number">
						{day}
					</div>
					{fromCurrentMonth && Object.keys(events).map(key => (
						<a
							key={events[key].id}
							className="event badge badge-info"
							onClick={this.onEventClick.bind(this, events[key])}
						>
							<span className="eventTitle">
								{events[key].fields.title}
							</span>
							<span
								className="removeEventBtn"
								onClick={this.onEventDelete.bind(this, events[key])}
							>
								x
							</span>
						</a>
					))}
				</div>
			</div>
		)
	}
}
 
export default Day