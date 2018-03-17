import React from 'react'
import Day from './Day.js';
 
class Calendar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const date = new Date();
		date.setDate(1);
		console.log("DATE !", date);
		const currentMonth = date.getMonth();

		if (date.getDay() !== 1) {
			date.setDate(2 - date.getDay())
		}

		const elements = [];
		console.log("DATE", date);
		let shouldBeVisible = true;
		while (shouldBeVisible) {
			const fromCurrentMonth = date.getMonth() == currentMonth;
			const day = date.getDate();
			elements.push(<Day fromCurrentMonth={fromCurrentMonth} day={day}></Day>);

			date.setDate(day + 1);

			// check if we are in next month and next day to render is Monday
			// if yes - we don't need to add more days to calendar
			if(date.getMonth() > currentMonth && date.getDay() == 1) {
				shouldBeVisible = false;
			}
		}
		return <div className="calendar">{ elements }</div>;
	}
}

export default Calendar


