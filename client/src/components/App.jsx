import React from 'react';
import Header from './Header/Header';
import PatternPage from './PatternPage';

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
        Put your app here
        { /* <AppHere /> */ }
      </div>
    );
  }
}

export default App;
