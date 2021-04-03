import React from 'react';

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
      </div>
    );
  }
}

Header.displayName = 'header';

export default Header;
