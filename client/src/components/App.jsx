import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import decode from 'jwt-decode';
import Cookies from 'js-cookie';
import Header from './Header/Header';
import PatternPage from './PatternPage';
import PatternCard from './PatternCard';
import UserPage from './UserPage/UserPage';
import HomePage from './HomePage';

import UserContext from './UserContext';

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
    this.getToken = this.getToken.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.fetchHomeData();
    this.getToken();
  }

  getToken() {
    axios.post('http://localhost:4000/token', {
      withCredentials: true,
    }, {
      withCredentials: true,
    })
      .then((response) => {
        const { accessToken } = response.data;
        const { username, user_id } = decode(accessToken);
        this.setState({
          isLoggedIn: true,
          token: accessToken,
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

  login(token) {
    const { username, user_id } = decode(token);
    // const expiresIn = 1/24;
    this.setState({
      isLoggedIn: true,
      token,
      currentUser: {
        username,
        userId: user_id,
      },
    });
  }

  logout() {
    axios.post('http://localhost:4000/logout', {
      withCredentials: true,
    }, {
      withCredentials: true,
    })
      .then(() => {
        this.setState({
          isLoggedIn: false,
          token: '',
          currentUser: {},
        }, () => {
          Cookies.remove('token');
        });
      })
      .catch((error) => {
        console.error('Error logging out: ', error);
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

    const user = {
      isLoggedIn,
      token,
      currentUser,
    };

    return (
      <UserContext.Provider value={user}>
        <Router>
          <Header
            login={this.login}
            logout={this.logout}
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
      </UserContext.Provider>
    );
  }
}

export default App;
