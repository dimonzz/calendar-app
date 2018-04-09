import React from 'react'
import {
  translate,
  internationalize
} from 'react-internationalization'
 
class Search extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			filterValue: '',
			filteredEvents: []
		}
		this.eventsList = this.createEventsList(props.events)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.events !== this.props.events)
			this.eventsList = this.createEventsList(nextProps.events)
	}

	createEventsList(eventsStruct) {
		let eventsList = []
		for (let year in eventsStruct) {
			for (let month in eventsStruct[year]) {
				for (let day in eventsStruct[year][month]) {
					eventsList = [
						...eventsList,
						...Object.keys(eventsStruct[year][month][day]).map(key => eventsStruct[year][month][day][key])
					]
				}
			}
		}

		return eventsList
	}

	handleChange = (e) => {
		this.setState({
			filterValue: e.target.value,
			filteredEvents: this.filterEventsList(this.eventsList, e.target.value)
		})
	}

	filterEventsList(eventsList, filterValue) {
		if (filterValue.length < 3) return []
		return eventsList.filter(event => event.fields.title.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1)
	}

	onFocus = (e) => {
		this.setState({
			filteredEvents: this.filterEventsList(this.eventsList, this.state.filterValue)
		})
	}

	onBlur = (e) => {
		this.setState({
			filteredEvents: []
		})
	}

	handleEventClick = (eventClicked, e) => {
		this.props.showModal(eventClicked)
	}

	render() {
		const { filterValue, filteredEvents } = this.state

		return (
			<div className="form-inline searchForm">
				<input
					type="search"
					value={filterValue}
					onBlur={this.onBlur}
					onFocus={this.onFocus}
					className="form-control"
					onChange={this.handleChange}
					placeholder={translate('global.search_label')}
				/>
				<div className="searchResults">
					{filteredEvents.map((event) => (
						<div
							key={event.id}
							onMouseDown ={() => this.handleEventClick(event)}
						>
							{`${event.fields.title} (${event.dateString})`}
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default internationalize(Search)

