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
    };
    this.handleProfileClick = this.handleProfileClick.bind(this);
    this.handleProfileHover = this.handleProfileHover.bind(this);
  }

  handleProfileClick(event) {
    const { isLoggedIn } = this.props;
    const { currentUser, showLogin } = this.state;
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
    console.log('Take user to their page', currentUser);
  }

  handleProfileHover(event) {
    const { profileHover } = this.state;
    event.preventDefault();
    this.setState({ profileHover: !profileHover });
  }

  handleLogin() {
    const { login } = this.props;
    login();
    // add callback to close modal
  }

  render() {
    const { login, isLoggedIn } = this.props;
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
          {isLoggedIn ? 'logged in' : 'not logged in'}
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
                login={login}
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
