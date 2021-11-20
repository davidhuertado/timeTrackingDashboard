import React from 'react';
import workIcon from './images/icon-work.svg';
import ellipsisIcon from './images/icon-ellipsis.svg';
import data from './data.json';

class TaskCard extends React.Component {
  render() {
    return (
      <div className="task-card">
        <div className="task-header">
          <img src={workIcon} className="task-img" alt="Work" />
        </div>
        <div className="task-info">
          <div className="info-header">
            <div className="task-name-div">
              <h2 className="task-name">Work</h2>
            </div>
            <div className="ellipsis-div">
              <img
                className="ellipsis-icon"
                src={ellipsisIcon}
                alt="ellipsis"
              />
            </div>
          </div>
          <div className="task-time-div">
            <div className="task-hours-div">
              <h2 className="hours-h">32hrs</h2>
            </div>
            <div className="last-time-div">
              <p className="last-time">
                Last Week - <span>36hrs</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskCard;
