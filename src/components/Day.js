import React from 'react'
 

class Day extends React.Component {
	static defaultProps = {
		events: {}
	}

	onClick = (eventToEdit, clickEvent, propFunc) => {
		clickEvent.stopPropagation()
		propFunc(eventToEdit)
	}

	render() {
		const {
			day,
			events,
			onClick,
			dateString,
			onEventDelete,
			fromCurrentMonth
		} = this.props

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
							onClick={e => this.onClick(events[key], e, onClick)}
						>
							<span className="eventTitle">
								{events[key].fields.title}
							</span>
							<span
								className="removeEventBtn"
								onClick={e => this.onClick(events[key], e, onEventDelete)}
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