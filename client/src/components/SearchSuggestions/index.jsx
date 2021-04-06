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
      <div className={styles.suggestionItems}>
        <Link onClick={toggleShowSuggestions} to={`/patterns/${suggestion.id}`}>
          {suggestion.title}
        </Link>
      </div>
    );
  }
}

export default SearchSuggestions;
