import React from 'react';
import { Link } from 'react-router-dom';

const AuthorSuggestions = (props) => {
  const { author, toggleShowSuggestions } = props;
  return (
    <div>
      <Link onClick={toggleShowSuggestions} to={`/stitchsaver/users/${author.id}`}>
        {author.username}
      </Link>
    </div>
  );
};

export default AuthorSuggestions;
