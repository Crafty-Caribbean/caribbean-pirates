import React from 'react';
import { IoPersonCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import styles from './Header.css';
import Login from '../Login';
import logo from '../../../dist/images/StitchSaverLogo.png';
import AppModal from '../AppModal';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: '',
      profileHover: false,
      showLogin: false,
      loggedIn: false,
    };
    this.handleProfileClick = this.handleProfileClick.bind(this);
    this.handleProfileHover = this.handleProfileHover.bind(this);
  }

  handleProfileClick(event) {
    const { currentUser, showLogin, loggedIn } = this.state;
    event.preventDefault();
    if (!loggedIn) {
      this.setState({
        showLogin: !showLogin,
      });
    }
    console.log('Take user to their page', currentUser);
  }

  handleProfileHover(event) {
    const { profileHover } = this.state;
    event.preventDefault();
    this.setState({ profileHover: !profileHover });
  }

  render() {
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
          <IoPersonCircle
            className={styles.profileIcon}
            size="50"
            color={profileHover ? 'black' : '#D1D1D1'}
            onClick={this.handleProfileClick}
            onMouseEnter={this.handleProfileHover}
            onMouseLeave={this.handleProfileHover}
          />
        </div>
        {
          showLogin
          && (
            <AppModal outsideClickHandler={this.handleProfileClick}>
              <Login
                login={(data) => this.loginUser(data)}
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
