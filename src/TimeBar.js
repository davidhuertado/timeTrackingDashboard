import React from 'react';

class TimeBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { current: 'Weekly' };
  }

  onTimeClick = (e) => {
    const newTime = e.target.textContent;
    this.setState((state, props) => ({
      current: newTime,
    }));
  };

  render() {
    return (
      <div class="timer-bar-container">
        <ul className="timer-bar">
          <li
            className={
              this.state.current === 'Daily' ? 'active time-li' : 'time-li'
            }
            onClick={this.onTimeClick}
          >
            Daily
          </li>
          <li
            className={
              this.state.current === 'Weekly' ? 'active time-li' : 'time-li'
            }
            onClick={this.onTimeClick}
          >
            Weekly
          </li>
          <li
            className={
              this.state.current === 'Monthly' ? 'active time-li' : 'time-li'
            }
            onClick={this.onTimeClick}
          >
            Monthly
          </li>
        </ul>
      </div>
    );
  }
}

export default TimeBar;
