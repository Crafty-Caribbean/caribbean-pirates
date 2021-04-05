import React from 'react';

class CraftTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.craftColor = {
      Crochet: '#f3b816',
      Knitting: '#d23f0f',
    };
  }

  render() {
    const { craftType } = this.props;
    const craftTagStyle = {
      backgroundColor: this.craftColor[craftType],
      borderColor: this.craftColor[craftType],
      color: 'white',
    };
    return (
      <button type="button" style={craftTagStyle}>
        {craftType}
      </button>
    );
  }
}

CraftTag.displayName = 'craft-tag';

export default CraftTag;
