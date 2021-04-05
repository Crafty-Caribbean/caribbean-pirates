import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Router>
        <Header />
        <Switch>
        {/* <Route path="/" component={UserPage} /> */}
          {/* <PatternPage /> */}
          <Route path="/">
            Put your app here
            {/* <PatternCard
              cardWidth={252}
              imgSrc="https://static1.dmc.com/cache/p/a/pat0339_01_880x1322.jpg"
              skillLevel="Advanced"
              craftType="Knitting"
            />
            <PatternCard
              cardWidth={252}
              imgSrc="https://static1.dmc.com/cache/p/a/pat14932_440x661.jpg"
              skillLevel="Beginner"
              craftType="Crochet"
            />
            <PatternCard
              cardWidth={252}
              imgSrc="https://i.pinimg.com/564x/51/c8/70/51c8705b6915d2560748f03939201d3b.jpg"
              showTags={false}
            /> */}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
