import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedText: '',
      searchHover: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchHover = this.searchHover.bind(this);
  }

  // Get request for searchbar
  // Need suggestions
  // Suggestions for patterns, authors, tags, etc.

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      searchedText: event.target.value,
    });
  }

  handleSearch(event) {
    const { searchedText } = this.state;
    event.preventDefault();
    console.log('Query/search database for: ', searchedText);
    this.setState({ searchedText: '' });
  }

  searchHover(event) {
    event.preventDefault();
    const { searchHover } = this.state;
    this.setState({ searchHover: !searchHover });
  }

  render() {
    const { searchedText, searchHover } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <div className={styles.searchContainer}>
            <input
              className={styles.searchInput}
              // placeholder="Search"
              placeholder="Search"
              type="text"
              name="searchedText"
              value={searchedText}
              onChange={this.handleChange}
              autoComplete="off"
            />
            <div
              className={styles.searchIconWrapper}
              onMouseEnter={this.searchHover}
              onMouseLeave={this.searchHover}
            >
              <FaSearch
                className={styles.searchIcon}
                size="25"
                color={searchHover ? 'white' : '#D1D1D1'}
                onClick={this.handleSearch}
              />
            </div>
            {searchedText.length > 0
            && <div className={styles.searchSuggestions}>This will be suggestions list</div>}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

// Notes and experiments:

// This is for if I want to implement a button on top of the input that will display
// search icon - since placeholder is text only:
// <button className={styles.searchView} type="text" name="searchView">
// {magnifyingIcon} Search
// </button>
