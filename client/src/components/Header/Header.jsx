/* eslint-disable no-console */
import React from 'react';
import { IoPersonCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../SearchBar';
import styles from './Header.css';
import Login from '../Login';
import logo from '../../../dist/images/StitchSaverLogo.png';
import AppModal from '../AppModal';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileHover: false,
      showLogin: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleProfileClick = this.handleProfileClick.bind(this);
    this.handleProfileHover = this.handleProfileHover.bind(this);
  }

  handleProfileClick(event) {
    const { isLoggedIn } = this.props;
    const { showLogin } = this.state;
    event.preventDefault();
    if (!isLoggedIn) {
      this.setState({
        showLogin: !showLogin,
      });
    } else {
      this.setState({
        showLogin: false,
      });
    }
  }

  handleProfileHover(event) {
    const { profileHover } = this.state;
    event.preventDefault();
    this.setState({ profileHover: !profileHover });
  }

  handleLogin(loginInfo) {
    const { login } = this.props;
    axios.post('/api/login', loginInfo)
      .then((response) => {
        const { token } = response.data;
        this.setState({
          showLogin: false,
        }, () => {
          login(token);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { login, isLoggedIn, currentUser } = this.props;
    const { userId } = currentUser;
    const { profileHover, showLogin } = this.state;

    return (
      <div id="header" className={styles.header}>
        <Link to="/">
          <img
            className={styles.logoImage}
            src={logo}
            alt="StitchSaver Logo"
          />
        </Link>
        <Link to="/" className={styles.logoName}>
          <span className={styles.logoNameText}>StitchSaver</span>
        </Link>
        <SearchBar />
        <Link to="/" className={styles.homeButton}>
          <span>Home</span>
        </Link>
        <div
          className={styles.profileIconWrapper}
        >
          {isLoggedIn
            ? (
              <Link to={`/users/${userId}`}>
                <IoPersonCircle
                  className={styles.profileIcon}
                  size="50"
                  color={profileHover ? 'black' : '#D1D1D1'}
                  onMouseEnter={this.handleProfileHover}
                  onMouseLeave={this.handleProfileHover}
                />
              </Link>
            )
            : <button type="button" className={styles.loginButton} onClick={this.handleProfileClick}>Login</button>}
        </div>
        {
          showLogin
          && (
            <AppModal outsideClickHandler={this.handleProfileClick}>
              <Login
                login={this.handleLogin}
                signup={(data) => this.signupUser(data)}
              />
            </AppModal>
          )
        }
        {/* Can use this if user has profile picture: */}
        {/* <img src="" alt="User Profile Picture"/> */}
      </div>
    );
  }
}

Header.displayName = 'header';

export default Header;
