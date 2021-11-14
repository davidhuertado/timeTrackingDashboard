import React from 'react';
import UserCard from './UserCard';
import TimeBar from './TimeBar';

class UserTimeStatus extends React.Component {
  render() {
    return (
      <div>
        <UserCard />
        <TimeBar />
      </div>
    );
  }
}

export default UserTimeStatus;
