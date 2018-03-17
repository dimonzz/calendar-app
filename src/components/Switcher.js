import React from 'react'
 
class Switcher extends React.Component {
    constructor(props) {
        super(props);
        // clonning date object
        this.state = { date : props.date };
    }

    monthDecreased = () => {
        this.changeDate(1);
    }

    monthIncreased = () => {
        this.changeDate(-1);
    }

    changeDate(changeVal) {
      const dateCopy = new Date(this.state.date);
      dateCopy.setMonth(dateCopy.getMonth() + changeVal)
      this.props.changeDate(dateCopy);

      this.setState({
          date: dateCopy
      });     
    }

    render() {
        const date = this.state.date;
        
        return (
          <div className="btn-group" role="group">
            <div className="btn btn-primary switcherButton" onClick={ this.monthIncreased }>&lt;</div>
            <div className="btn btn-primary">{ this.state.date.toLocaleString("uk-ua", { month: "long" }) } { this.state.date.getFullYear() }</div>
            <div className="btn btn-primary switcherButton" onClick={ this.monthDecreased }>&gt;</div>
          </div>
        )
    }
}

export default Switcher


