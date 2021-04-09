import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SearchSuggestions.css';

const SearchSuggestions = (props) => {
  const { suggestion, clearSearchSuggestions } = props;
  return (
    <Link className={styles.link} onClick={clearSearchSuggestions} to={`/patterns/${suggestion.id}`}>
      <div className={styles.suggestionItems}>
        <span className={styles.suggestionText}>{suggestion.title}</span>
      </div>
    </Link>
  );
};

export default SearchSuggestions;
