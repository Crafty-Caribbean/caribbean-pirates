import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import decode from 'jwt-decode';
import Cookies from 'js-cookie';
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
    console.log(Cookies.get('shortlyid'));
    setTimeout(() => console.log(document.cookie), 2000);
  }

  componentDidUpdate() {
    console.log(Cookies.get('shortlyid'));
    console.log(Cookies.get('token'));
  }

  login(token) {
    const { username, user_id } = decode(token);
    const expiresIn = 1/24;
    Cookies.set('token', token, {
      expires: expiresIn,
    });
    document.cookie = `token=${token}`;
    console.log(Cookies.get('token'));
    console.log(document.cookie);
    this.setState({
      isLoggedIn: true,
      token,
      currentUser: {
        username,
        userId: user_id,
      },
    });
  }

  fetchHomeData() {
    axios.get('/api/patterns')
      .then((response) => {
        const { data } = response;
        console.log(Cookies.get('token'));
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
