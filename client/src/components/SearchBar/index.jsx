import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedText: '',
    };
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    const { searchedText } = this.state;
    let searchMenuRender;
    let searchMenu = (
      <div className={styles.searchMenu}>This will be search menu</div>
    );

    searchedText.length > 0 ? searchMenuRender = searchMenu : null;

    return (
      <div>
        <form>
          <div className={styles.searchContainer}>
            <FaSearch className={styles.searchIcon} size="25" color="#EBEBEB" />
            <div>
              <input
                className={styles.searchInput}
                // placeholder="Search"
                placeholder="Search"
                type="text"
                name="searchedText"
                value={searchedText}
                onChange={this.handleChange}
              />
              {searchMenuRender}
            </div>
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
