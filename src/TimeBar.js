import React from 'react';

class TimeBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { current: 'Weekly' };
  }

  // onTimeClick = (e) => {
  //   let timeOptions = Array.from(document.querySelectorAll('.time-li'));

  //   console.log(timeOptions);
  //   console.log(e.target);
  //   const willBeActive = e.target.textContent;
  //   this.setState({ current: willBeActive });

  //   const willActivate = (element) =>
  //     element.textContent === this.state.current;

  //   console.log(timeOptions.find(willActivate));
  // };

  render() {
    return (
      <div class="timer-bar-container">
        <ul className="timer-bar">
          <li className="time-li" onClick={this.onTimeClick}>
            Daily
          </li>
          <li className="active time-li" onClick={this.onTimeClick}>
            Weekly
          </li>
          <li className="time-li" onClick={this.onTimeClick}>
            Monthly
          </li>
        </ul>
      </div>
    );
  }
}

export default TimeBar;
