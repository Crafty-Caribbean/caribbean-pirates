import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/users/:user_id" component={} */}
          {/* <PatternPage /> */}
          {/* <PatternCard cardWidth={252} imgSrc="https://static1.dmc.com/cache/p/a/pat0339_01_880x1322.jpg" />
          <PatternCard cardWidth={252} imgSrc="https://static1.dmc.com/cache/p/a/pat14932_440x661.jpg" />
        <PatternCard cardWidth={252} imgSrc="https://i.pinimg.com/236x/da/49/82/da49825a87e5de376fa62a590d8b65c0.jpg" /> */}
          Put your app here
          { /* <AppHere /> */ }
          {/* <Route path="/" component={} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
