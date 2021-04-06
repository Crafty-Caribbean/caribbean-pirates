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
      data: [],
    };
  }

  componentDidMount() {
    this.fetchHomeData();
  }

  fetchHomeData() {
    this.setState({
      data: [{
        id: 1,
        author: {
          id: 1,
          username: 'username',
          profile_pic: 'url',
        },
        skill_level: 'Beginner',
        craft_type: 'Crochet',
        description: 'Lorem Ipsum test test 1234',
        price: 17.95,
        images: ['https://static1.dmc.com/cache/p/a/pat0339_01_880x1322.jpg'],
        name: 'Name',
      }],
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/user" component={UserPage} />
          <Route path="/patterns">
            <PatternPage />
          </Route>
          <Route path="/">
            <HomePage list={data} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
