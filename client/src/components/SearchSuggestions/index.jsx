import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SearchSuggestions.css';

class SearchSuggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { suggestion, toggleShowSuggestions } = this.props;
    return (
      <Link className={styles.link} onClick={toggleShowSuggestions} to={`/patterns/${suggestion.id}`}>
        <div className={styles.suggestionItems}>
          <span className={styles.suggestionText}>{suggestion.title}</span>
        </div>
      </Link>
    );
  }
}

export default SearchSuggestions;
