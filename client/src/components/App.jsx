import React from 'react';
import Header from './Header/Header';

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
        Put your app here
        { /* <AppHere /> */ }
      </div>
    );
  }
}

export default App;
