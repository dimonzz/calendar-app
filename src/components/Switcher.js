import React from 'react'
import { Text } from 'react-internationalization'
 
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
          <div className="switcher">
            <div className="btn-group" role="group">
              <div className="btn btn-primary switcherButton" onClick={ this.monthIncreased }>&lt;</div>
              <div className="btn btn-primary dateButton"><Text id={`monthes.m_${date.getMonth()}`}></Text> { date.getFullYear() }</div>
              <div className="btn btn-primary switcherButton" onClick={ this.monthDecreased }>&gt;</div>
            </div>
            <div className="btn btn-primary todayBtn" onClick={() => {
              this.props.changeDate(new Date())
            }}><Text id="global.today"></Text></div>
          </div>
        )
    }
}

export default Switcher


