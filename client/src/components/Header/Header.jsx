import React from 'react';
import SearchBar from '../SearchBar';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="header">
        <span>StitchSaver</span>
        <SearchBar />
      </div>
    );
  }
}

Header.displayName = 'header';

export default Header;
