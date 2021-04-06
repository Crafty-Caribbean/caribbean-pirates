import React from 'react';
import { IoPersonCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import styles from './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: '',
      profileHover: false,
    };
    this.handleProfileClick = this.handleProfileClick.bind(this);
    this.handleProfileHover = this.handleProfileHover.bind(this);
  }

  handleProfileClick(event) {
    const { currentUser } = this.state;
    event.preventDefault();
    console.log('Take user to their page', currentUser);
  }

  handleProfileHover(event) {
    const { profileHover } = this.state;
    event.preventDefault();
    this.setState({ profileHover: !profileHover });
  }

  render() {
    const { profileHover } = this.state;

    return (
      <div id="header" className={styles.header}>
        <Link to="/">
          <img
            className={styles.logoImage}
            src="/images/StitchSaverLogo.png"
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
        {/* Can use this if user has profile picture: */}
        {/* <img src="" alt="User Profile Picture"/> */}
      </div>
    );
  }
}

Header.displayName = 'header';

export default Header;
