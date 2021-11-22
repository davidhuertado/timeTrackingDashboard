import React from 'react';
import ellipsisIcon from './images/icon-ellipsis.svg';
import data from './data.json';

class TaskCard extends React.Component {
  getCurrentTime = () => {
    if (this.props.currenTime === 'Weekly') {
    }
  };

  checkTaskName = (element) => {
    return element.title === this.props.task.taskName;
  };

  render() {
    const dataIndex = data.findIndex(this.checkTaskName);
    const currentTime = this.props.currentTime.toLowerCase();
    const lastTime = (currentTime) => {
      if (currentTime === 'daily') return 'Day';
      else if (currentTime === 'weekly') return 'Week';
      else return 'Month';
    };

    return (
      <div
        className="task-card"
        style={{ backgroundColor: this.props.task.background }}
      >
        <div
          className="task-header"
          style={{ backgroundColor: this.props.task.background }}
        >
          <img
            src={this.props.task.taskIcon}
            className="task-img"
            alt="header"
          />
        </div>
        <div className="task-info">
          <div className="info-header">
            <div className="task-name-div">
              <h2 className="task-name">{this.props.task.taskName}</h2>
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
              <h2 className="hours-h">
                {`${data[dataIndex].timeframes[currentTime].current}hrs`}
              </h2>
            </div>
            <div className="last-time-div">
              <p className="last-time">
                {`Last ${lastTime()}`} -
                <span>{`${data[dataIndex].timeframes[currentTime].previous}hrs`}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskCard;
