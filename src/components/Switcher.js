import React from 'react'
import { Text } from 'react-internationalization'
 
class Switcher extends React.Component {

    monthDecreased = () => {
        this.changeDate(1)
    }

    monthIncreased = () => {
        this.changeDate(-1)
    }

    changeDate(changeVal) {
      const dateCopy = new Date(this.props.date)

      dateCopy.setMonth(dateCopy.getMonth() + changeVal)
      this.props.changeDate(dateCopy)
    }

    render() {
        const { date, changeDate } = this.props

        return (
          <div className="switcher">
            <div
              role="group"
              className="btn-group"
            >
              <div
                onClick={this.monthIncreased}
                className="btn btn-primary switcherButton"
              >
                  &lt;
              </div>
              <div className="btn btn-primary dateButton">
                <Text id={`monthes.m_${date.getMonth()}`} />
                {` `}
                {date.getFullYear()}
              </div>
              <div
                onClick={this.monthDecreased}
                className="btn btn-primary switcherButton"
              >
                &gt;
              </div>
            </div>
            <div
              className="btn btn-primary todayBtn"
              onClick={() => changeDate(new Date())}
            >
              <Text id="global.today" />
            </div>
          </div>
        )
    }
}

export default Switcher


