import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import decode from 'jwt-decode';
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
      isLoggedIn: false,
      token: '',
      currentUser: {},
    };
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    this.fetchHomeData();
  }

  login(info) {
    axios.post('/api/login', info)
      .then((response) => {
        const { token } = response.data;
        const { username, user_id } = decode(token);
        this.setState({
          isLoggedIn: true,
          token,
          currentUser: {
            username,
            userId: user_id,
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
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
    const {
      data,
      isLoggedIn,
      currentUser,
      token,
    } = this.state;
    return (
      <Router>
        <Header
          login={this.login}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          token={token}
        />
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
