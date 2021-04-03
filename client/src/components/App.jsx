import React from 'react';
import Header from './Header/Header';
import PatternPage from './PatternPage';
import PatternCard from './PatternCard';

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
        { /* <AppHere /> */ }
      </div>
    );
  }
}

export default App;
