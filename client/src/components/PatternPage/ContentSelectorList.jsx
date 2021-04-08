import React from 'react';
import styles from './PatternSummary.css';

class ContentSelectorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: 'description',
     };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    console.log(event.target.value);
    this.setState({isSelected: event.target.value})
  }

  render() {
    return (
      <div className={styles.contentSelector}>
        <button className={styles.contentOption} onClick={this.clickHandler} value='description' type="button">
          Description
        </button>
        <button className={`${styles.contentOption}  ${styles.contentOption2}`} onClick={this.clickHandler} value='comments' type="button">
          Comments (5)
        </button>
      </div>
    );
  }
}

export default ContentSelectorList;
