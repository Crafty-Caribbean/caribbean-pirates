import React from 'react';
import styles from './ContentButtons.css'

class ContentButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    console.log(event.target.value);
    this.setState({isSelected: event.target.value});
    this.props.changeContentDisplay(event.target.value);
  }

  render() {
    // console.log(this.props);
    // const isSelected = this.props.buttonName === this.props.selected
    //  ? isSelected = 'styles.selected'
    //  : isSelected = '';
    let isSelected = '';
    if(this.props.buttonName ===  this.props.selected) {
      isSelected = styles.selected;
    }
    return(
      <button className={`${styles.contentOption} ${isSelected}`} onClick={this.clickHandler} value={this.props.buttonName}>{this.props.buttonName}</button>
    )
  }
}

export default ContentButtons;