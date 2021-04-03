import React from 'react';

class PatternCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="pattern-card">
        <span>PatternCard</span>
      </div>
    );
  }
}

PatternCard.displayName = 'pattern-card';

export default PatternCard;
