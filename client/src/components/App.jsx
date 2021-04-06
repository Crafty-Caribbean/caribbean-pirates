import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import PatternPage from './PatternPage';
import PatternCard from './PatternCard';
import UserPage from './UserPage/UserPage';
import HomePage from './HomePage';

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
          {/* <Route path="/" component={UserPage} /> */}

          <Route path="/user" component={UserPage} />
          <Route path="/patterns">
            <PatternPage />
          </Route>
          <Route path="/">
            {/* <PatternPage /> */}
            Put your app here
            {/* <HomePage /> */}
          </Route>
          {/* <Route path="/">
            Put your app here
            <PatternCard cardWidth={252} imgSrc="https://static1.dmc.com/cache/p/a/pat0339_01_880x1322.jpg" />
            <PatternCard cardWidth={252} imgSrc="https://static1.dmc.com/cache/p/a/pat14932_440x661.jpg" />
            <PatternCard cardWidth={252} imgSrc="https://i.pinimg.com/564x/51/c8/70/51c8705b6915d2560748f03939201d3b.jpg" />
          </Route> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
