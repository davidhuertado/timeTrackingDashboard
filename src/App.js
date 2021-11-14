import React from 'react';
import UserCard from './UserCard';
import UserTimeStatus from './UserTimeStatus';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserTimeStatus />
      </div>
    );
  }
}

export default App;
