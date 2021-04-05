import React from 'react';

class SkillTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.skillLevelColor = {
      Beginner: '#73b7b8',
      Novice: '#50b99b',
      Intermediate: '#f6cb52',
      Advanced: '#f05a29',
      Expert: '#af1d3c',
    };
  }

  render() {
    const { skillLevel } = this.props;
    const skillTagStyle = {
      backgroundColor: this.skillLevelColor[skillLevel],
      borderColor: this.skillLevelColor[skillLevel],
      color: 'white',
    };
    return (
      <button type="button" style={skillTagStyle}>
        {skillLevel}
      </button>
    );
  }
}

SkillTag.displayName = 'skill-tag';

export default SkillTag;
