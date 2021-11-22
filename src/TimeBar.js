import React from 'react';

class TimeBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleTimeClick = this.handleTimeClick.bind(this);
  }

  handleTimeClick = (e) => {
    this.props.handleTimeClick(e.target.textContent);
  };

  render() {
    return (
      <div class="timer-bar-container">
        <ul className="timer-bar">
          <li
            className={
              this.props.currentTime === 'Daily' ? 'active time-li' : 'time-li'
            }
            onClick={this.handleTimeClick}
          >
            Daily
          </li>
          <li
            className={
              this.props.currentTime === 'Weekly' ? 'active time-li' : 'time-li'
            }
            onClick={this.handleTimeClick}
          >
            Weekly
          </li>
          <li
            className={
              this.props.currentTime === 'Monthly'
                ? 'active time-li'
                : 'time-li'
            }
            onClick={this.handleTimeClick}
          >
            Monthly
          </li>
        </ul>
      </div>
    );
  }
}

export default TimeBar;
