import React from 'react';
import avatarImg from './images/image-jeremy.png';

class UserCard extends React.Component {
  render() {
    return (
      <div className="user-card">
        <div className="avatar-container">
          <img className="avatar" src={avatarImg} alt="avatar" />
        </div>
        <div className="name-container">
          <h1 className="user-h">
            <span>Report for </span>
            <br /> Jeremy Robson
          </h1>
        </div>
      </div>
    );
  }
}

export default UserCard;
