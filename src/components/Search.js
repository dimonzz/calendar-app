import React from 'react'
 
class Search extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			filterValue: '',
			filteredEvents: []
		};
		this.eventsList = this.createEventsList(props.events);
	}

	componentWillReceiveProps(nextProps) {
		this.eventsList = this.createEventsList(nextProps.events);
	}

	createEventsList(eventsStruct) {
		let eventsList = [];
		for (let year in eventsStruct) {
			for (let month in eventsStruct[year]) {
				for (let day in eventsStruct[year][month]) {
					eventsList = eventsList.concat(eventsStruct[year][month][day])
				}
			}
		}

		return eventsList;
	}

	handleChange = (e) => {	
		this.setState({
			filterValue: e.target.value,
			filteredEvents: this.filterEventsList(this.eventsList, e.target.value)
		});
	}

	filterEventsList(eventsList, filterValue) {
		if(filterValue.length < 3) return [];
		return eventsList.filter((event) => {
			return event.title.toLowerCase().includes(filterValue);
		});
	}

	onFocus = (e) => {
		this.setState({
			filteredEvents: this.filterEventsList(this.eventsList, this.state.filterValue)
		});
	}

	onBlur = (e) => {
		this.setState({
			filteredEvents: []
		});
	}

	handleEventClick = (eventClicked, e) => {
		this.props.showModal(eventClicked);
	}

	render() {
		return <form className="form-inline my-2 my-lg-0 searchForm">
			  <input className="form-control " type="search" placeholder="Пошук" aria-label="Пошук" 
			  	value={ this.state.filterValue } 
			  	onChange={ this.handleChange }
			  	onFocus={ this.onFocus } 
        		onBlur={ this.onBlur }  />
			  <div className="searchResults">
			  	{ this.state.filteredEvents.map((event) => <div key={ event.id } onMouseDown ={ () => { this.handleEventClick(event) } }>{ `${event.title}(${event.dateString})` }</div>) }
			  </div>
		  </form>
	}
}

export default Search

