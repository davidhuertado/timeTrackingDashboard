import React from 'react';

class TimeBar extends React.Component {
  render() {
    return (
      <div>
        <ul className="timer-bar">
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </div>
    );
  }
}

export default TimeBar;
