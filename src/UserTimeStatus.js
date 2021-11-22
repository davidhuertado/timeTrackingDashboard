import React from 'react';
import UserCard from './UserCard';
import TimeBar from './TimeBar';

class UserTimeStatus extends React.Component {
  render() {
    return (
      <div className="user-time-status">
        <UserCard />
        <TimeBar
          currentTime={this.props.currentTime}
          handleTimeClick={this.props.handleTimeClick}
        />
      </div>
    );
  }
}

export default UserTimeStatus;
