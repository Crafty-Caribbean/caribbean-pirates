import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import PatternPage from './PatternPage';
import PatternCard from './PatternCard';
import UserPage from './UserPage/UserPage';
import HomePage from './HomePage';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchHomeData();
  }

  fetchHomeData() {
    axios.get('/api/patterns')
      .then((response) => {
        const { data } = response;
        this.setState({ data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { data } = this.state;
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/users/:user_id" component={UserPage} />
          <Route
            path="/patterns/:pattern_id"
            render={({ match, location, history }) => (
              <PatternPage match={match} location={location} history={history} />
            )}
          />
          <Route path="/">
            <HomePage list={data} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
