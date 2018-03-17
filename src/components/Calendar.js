import React from 'react'
import Day from './Day.js';
 
class Calendar extends React.Component {
	render() {
		const date = new Date(this.props.date);
		date.setDate(1);
		
		const currentMonth = date.getMonth();
		const currentYear = date.getYear();

		// as JS return 0 for Sunday, we need to make little hack around it 
		let dayInWeek = date.getDay();
		dayInWeek = dayInWeek == 0 ? 7 : dayInWeek;

		if (dayInWeek !== 1) {
			date.setDate(2 - dayInWeek)
		}

		const elements = [];
		let shouldBeVisible = true;
		while (shouldBeVisible) {
			const fromCurrentMonth = date.getMonth() == currentMonth;
			const dayInMonth = date.getDate();
			elements.push(<Day key={date.getMonth() + '-' + date.getDate()} fromCurrentMonth={fromCurrentMonth} day={dayInMonth}></Day>);

			date.setDate(dayInMonth + 1);

			// check if we are in next month and next day to render is Monday
			// if yes - we don't need to add more days to calendar
			if((date.getMonth() > currentMonth || date.getYear() > currentYear) && date.getDay() == 1) {
				shouldBeVisible = false;
			}
		}
		return <div className="calendar">{ elements }</div>;
	}
}

export default Calendar


