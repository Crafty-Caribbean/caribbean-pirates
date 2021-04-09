/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

class PatternForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
      price: undefined,
      skillLevel: undefined,
      craftType: undefined,
      images: [],
    };
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        PatternForm
      </div>
    );
  }
}

export default PatternForm;
