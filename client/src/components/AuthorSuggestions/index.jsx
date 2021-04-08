import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthorSuggestions.css';

const AuthorSuggestions = (props) => {
  const { author, toggleShowSuggestions } = props;
  return (
    <Link className={styles.link} onClick={toggleShowSuggestions} to={`/users/${author.id}`}>
      <div className={styles.suggestionItems}>
        <span className={styles.suggestionText}>{author.username}</span>
      </div>
    </Link>
  );
};

export default AuthorSuggestions;
