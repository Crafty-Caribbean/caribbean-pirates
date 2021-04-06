import React from 'react';
import styles from './SearchSuggestions.css';

class SearchSuggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { suggestion } = this.props;
    return (
      <div>
        <div className={styles.suggestionItems}>{suggestion}</div>
      </div>
    );
  }
}

export default SearchSuggestions;
