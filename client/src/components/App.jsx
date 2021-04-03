import React from 'react';
import Header from './Header/Header';
import PatternPage from './PatternPage';
import PatternCard from './PatternCard';
import UserPage from './UserPage/UserPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Header />
        {/* <PatternPage /> */}
        {/* <PatternCard /> */}
        Put your app here
        <UserPage userId={1} />
      </div>
    );
  }
}

export default App;
