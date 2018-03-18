import React from 'react'
 

class EventModal extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			event: this.getBlankEvent(),
			showError: false
		}
	}

	getBlankEvent() {
		return {
			title: "",
			participants: "",
			description: ""
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			event: nextProps.event ? nextProps.event : this.getBlankEvent()
		})
	}

	handleChange = (inputEvent) => {
		inputEvent.preventDefault();
		this.setState({
			event: {
				...this.state.event,
				[inputEvent.target.name] : inputEvent.target.value
			},
			showError: false
		});
	}

	formValid() {
		let formValid = true;
		let blankObj = this.getBlankEvent();
		for(let fieldName in blankObj) {
			if (!this.state.event[fieldName] || this.state.event[fieldName] === '') {
				formValid = false;
				break;
			}
		}
		return formValid;
	}

	handleSubmit = () => {
		const formValid = this.formValid();
		this.setState({
			showError: !formValid
		})
		if ( !formValid ) return;
		

		if (this.state.event.id) {
			this.props.updateEvent(this.state.event.id, this.state.event.title, this.state.event.participants, this.state.event.description, this.state.event.dateString);
		} else {
			this.props.addEvent(this.state.event.title, this.state.event.participants, this.state.event.description, this.props.dateString);
		}

		this.props.hideModal();
	}

	render() {
		return <div className={ `modal ${this.props.show ? 'show' : ''}` } tabIndex="-1" role="dialog">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <button type="button" className="close" onClick={ this.props.hideModal }>
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div className="modal-body">
		      	{ this.state.showError ? <div className="alert alert-danger"><strong>Помилка!</strong> Потрібно заповнити усі поля.</div> : '' }
		        <div className="form-group">
		          <label htmlFor="title" className="col-form-label">Назва:</label>
		          <input type="text" className="form-control" id="title" name="title" value={this.state.event.title} onChange={ this.handleChange } />
		        </div>
		        <div className="form-group">
		          <label htmlFor="participants" className="col-form-label">Список учасників:</label>
		          <input type="text" className="form-control" id="participants" name="participants" value={this.state.event.participants} onChange={ this.handleChange } />
		        </div>
		        <div className="form-group">
		          <label htmlFor="description" className="col-form-label">Опис:</label>
		          <input type="text" className="form-control" id="description" name="description" value={this.state.event.description} onChange={ this.handleChange } />
		        </div>
		      </div>
		      <div className="modal-footer">
		        <button type="button" className="btn btn-primary" onClick={ this.handleSubmit }>Зберегти</button>
		        <button type="button" className="btn btn-secondary" onClick={ this.props.hideModal }>Закрити</button>
		      </div>
		    </div>
		  </div>
		</div>		
	}
}
 
export default EventModal