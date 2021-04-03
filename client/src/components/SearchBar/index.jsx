import React from 'react';
import { FaSearch } from "react-icons/fa";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // Get request for searchbar

  // Need suggestions

  // Suggestions for patterns, authors, tags, etc.

  render() {
    return (
      <div>
        <form>
          <FaSearch className={styles.searchIcon} size="15" color="#E8E8E8" onClick={this.handleSearch} />
          <input>
          </input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
