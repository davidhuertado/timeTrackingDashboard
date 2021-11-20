import React from 'react';
import UserTimeStatus from './UserTimeStatus';
import TaskCard from './TaskCard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserTimeStatus />
        <TaskCard />
      </div>
    );
  }
}

export default App;
