import React from 'react';
import { IoPersonCircle } from "react-icons/io5";
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
    this.navToHomePage = this.navToHomePage.bind(this);
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

  navToHomePage() {
    console.log('Take user to home/search page');
  }

  render() {
    const { profileHover } = this.state;

    return (
      <div id="header" className={styles.header}>
        <img className={styles.logoImage} src="/images/StitchSaverLogo.png" alt="StitchSaver Logo" />
        <button className={styles.logoName} type="submit">StitchSaver</button>
        <button className={styles.homeButton} type="submit">Home</button>
        <SearchBar />
        <div
          className={styles.profileIconWrapper}
          onMouseEnter={this.handleProfileHover}
          onMouseLeave={this.handleProfileHover}
        >
          <IoPersonCircle
            className={styles.profileIcon}
            size="50"
            // color="white"
            color={profileHover ? 'black' : '#D1D1D1'}
            onClick={this.handleProfileClick}
          />
        </div>
        {/* <img src="" alt="User Profile Picture"/> */}
      </div>
    );
  }
}

Header.displayName = 'header';

export default Header;
