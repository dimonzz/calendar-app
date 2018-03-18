import React from 'react'
 
class Switcher extends React.Component {

    monthDecreased = () => {
        this.changeDate(1);
    }

    monthIncreased = () => {
        this.changeDate(-1);
    }

    changeDate(changeVal) {
      const dateCopy = new Date(this.props.date);
      dateCopy.setMonth(dateCopy.getMonth() + changeVal)
      this.props.changeDate(dateCopy);
    }

    render() {
        const date = this.props.date;
        
        return (
          <div className="btn-group" role="group">
            <div className="btn btn-primary switcherButton" onClick={ this.monthIncreased }>&lt;</div>
            <div className="btn btn-primary">{ date.toLocaleString("uk-ua", { month: "long" }) } { date.getFullYear() }</div>
            <div className="btn btn-primary switcherButton" onClick={ this.monthDecreased }>&gt;</div>
          </div>
        )
    }
}

export default Switcher


