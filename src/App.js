import React from 'react';
import UserTimeStatus from './UserTimeStatus';
import TaskCard from './TaskCard';
import workIcon from './images/icon-work.svg';
import playIcon from './images/icon-play.svg';
import studyIcon from './images/icon-study.svg';
import exerciseIcon from './images/icon-exercise.svg';
import socialIcon from './images/icon-social.svg';
import selfCareIcon from './images/icon-self-care.svg';

const taskArray = [
  { taskName: 'Work', taskIcon: workIcon, background: 'hsl(15, 100%, 70%)' },
  { taskName: 'Play', taskIcon: playIcon, background: 'hsl(195, 74%, 62%)' },
  { taskName: 'Study', taskIcon: studyIcon, background: 'hsl(348, 100%, 68%)' },
  {
    taskName: 'Exercise',
    taskIcon: exerciseIcon,
    background: 'hsl(145, 58%, 55%)',
  },
  {
    taskName: 'Social',
    taskIcon: socialIcon,
    background: 'hsl(264, 64%, 52%)',
  },
  {
    taskName: 'Self Care',
    taskIcon: selfCareIcon,
    background: 'hsl(43, 84%, 65%)',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleTimeClick = this.handleTimeClick.bind(this);
    this.state = { currentTime: 'Weekly' };
  }

  handleTimeClick(newTime) {
    this.setState((state, props) => ({
      currentTime: newTime,
    }));
  }
  render() {
    return (
      <div className="App">
        <UserTimeStatus
          currentTime={this.state.currentTime}
          handleTimeClick={this.handleTimeClick}
        />
        <TaskCard currentTime={this.state.currentTime} task={taskArray[0]} />
        <TaskCard currentTime={this.state.currentTime} task={taskArray[1]} />
        <TaskCard currentTime={this.state.currentTime} task={taskArray[2]} />
        <TaskCard currentTime={this.state.currentTime} task={taskArray[3]} />
        <TaskCard currentTime={this.state.currentTime} task={taskArray[4]} />
        <TaskCard currentTime={this.state.currentTime} task={taskArray[5]} />
      </div>
    );
  }
}

export default App;
