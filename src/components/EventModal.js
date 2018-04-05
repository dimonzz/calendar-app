import React from 'react'
import { Text } from 'react-internationalization'

class EventModal extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			event: this.getEvent(props.event),
			showError: false
		}
	}

	getEvent(event = {}) {
		return {
			...event,
			fields: event.fields || {
				title: "",
				participants: "",
				description: ""
			}
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.event !== this.props.event)
			this.setState({ event: this.getEvent(nextProps.event) })
		if (!nextProps.show && this.props.show)
			this.setState({ showError: false })
	}

	handleChange = e => {
		this.setState({
			event: {
				...this.state.event,
				fields: {
					...this.state.event.fields,
					[e.target.name]: e.target.value
				}
			},
			showError: false
		})
	}

	handleSubmit = () => {
		const { event } = this.state
		const isFormValid = Object.keys(event.fields).every(key => event.fields[key])

		if (!isFormValid) {
			this.setState({ showError: true })
		} else {
			this.props[event.id ? 'updateEvent' : 'addEvent'](event)
			this.props.hideModal()
		}
	}

	render() {
		const { showError, event: { fields } } = this.state
		const { show, hideModal } = this.props

		return (
			<div
				role="dialog"
				tabIndex="-1"
				className={ `modal ${show ? 'show' : ''}` }
			>
		  	<div
					role="document"
					className="modal-dialog"
				>
		    	<div className="modal-content">
		      	<div className="modal-header">
							<button
								type="button"
								className="close"
								onClick={hideModal}
							>
		          	<span aria-hidden="true">&times;</span>
		        	</button>
		      	</div>
		      	<div className="modal-body">
							{showError &&
								<div className="alert alert-danger">
									<strong><Text id="modal.error" /></strong>
									<Text id="modal.errorText" />
								</div>
							}
							{Object.keys(fields).map(key => (
								<div
									key={key}
									className="form-group"
								>
									<label
										htmlFor={key}
										className="col-form-label"
									>
										<Text id={`modal.${key}Label`} />:
									</label>
									<input
										id={key}
										name={key}
										type="text"
										value={fields[key]}
										className="form-control"
										onChange={this.handleChange}
									/>
								</div>
							))}
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-primary"
									onClick={this.handleSubmit}
								>
									<Text id="modal.save" />
								</button>
								<button
									type="button"
									onClick={hideModal}
									className="btn btn-secondary"
								>
									<Text id="modal.close" />
								</button>
							</div>
		    		</div>
		  		</div>
				</div>
			</div>
		)
	}
}
 
export default EventModal