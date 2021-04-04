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
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchedText: event.target.value,
    });
    // Need suggestions
    // Suggestions for patterns, authors, tags, etc.
  }

  handleSearch(event) {
    const { searchedText } = this.state;
    event.preventDefault();
    console.log('Searched for ', searchedText);
    // Will need to query for patterns, users/authorors, tags, etc.
  }

  render() {
    const { searchedText } = this.state;
    const options = ['testing', 'lala', 'abc', 'hello', 'yay', 'no', 'happy', 'angry', 'bye'];

    return (
      <div>
        <form onSubmit={this.handleSearch} autoComplete="off">
          <div className={styles.searchContainer}>
            <div>
              <input
                className={styles.searchInput}
                placeholder="Search"
                type="search"
                name="searchedText"
                value={searchedText}
                spellCheck="true"
                onChange={this.handleChange}
              />
              {searchedText.length > 0
              && <div className={styles.searchMenu}>This will be suggestions menu</div>}
            </div>
            <FaSearch className={styles.searchIcon} size="25" color="#D1D1D1" />
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

// To blur background during search and close when clicking on blur:

// if (searchedText.length > 0) {
//   searchMenuRender = searchMenu;
//   document.getElementById("root").style.filter = "blur(8px)";
//   document.getElementById('root').onclick = this.closeSearchSuggestions;
// } else {
//   searchMenuRender = null;
//   document.getElementById("root").style.filter = "none";
//   document.getElementById('root').onclick = this.closeSearchSuggestions;
// }

// this.closeSearchSuggestions = this.closeSearchSuggestions.bind(this);

// closeSearchSuggestions() {
//   this.setState({
//     searchedText: '',
//   });
//   document.getElementById("root").style.filter = "none";
// }
