import React from 'react'
import {
  translate,
  internationalize
} from 'react-internationalization'

import Day from './Day'


const weekdayNames = [
	'monday',
	'tuesday',
	'wednesday',
	'thursday',
	'friday',
	'saturday',
	'sunday'
]
 
class Calendar extends React.Component {
	static defaultProps = {
		events: {}
	}

	render() {
		const date = new Date(this.props.date)
		date.setDate(1)
		
		const currentMonth = date.getMonth()
		const currentYear = date.getFullYear()

		// as JS return 0 for Sunday, we need to make little hack around it 
		const dayInWeek = date.getDay() || 7

		if (dayInWeek !== 1) {
			date.setDate(2 - dayInWeek)
		}

		const elements = []
		for (let i = 0; i < 42; i++) {
			const dayInMonth = date.getDate()

			elements.push(
				<Day
					key={i}
					day={dayInMonth}
					onClick={this.props.showModal}
					onEventDelete={this.props.deleteEvent}
					events={this.props.events[dayInMonth]}
					fromCurrentMonth={date.getMonth() === currentMonth}
					dateString={`${dayInMonth}/${currentMonth + 1}/${currentYear}`}
				/>
			)
			date.setDate(dayInMonth + 1)
		}

		return (
			<div className="calendar">
				<div className="daysNames">
					{weekdayNames.map((weekday, index) => (
						<div key={index} className="bg-primary">
							{translate(`weekdays.${weekday}`)}
						</div>
					))}
				</div>
				<div className="shortDaysNames">
					{weekdayNames.map((weekday, index) => (
						<div key={index} className="bg-primary">
							{translate(`shortWeekdays.${weekday}`)}
						</div>
					))}
				</div>
				{elements}
			</div>
		)
	}
}

export default internationalize(Calendar)


