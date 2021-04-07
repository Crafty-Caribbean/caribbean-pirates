import React from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import _ from 'lodash';
import SearchSuggestions from '../SearchSuggestions';
import AuthorSuggestions from '../AuthorSuggestions';
import styles from './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedText: '',
      searchHover: false,
      searchSuggestionList: [{ id: 1, title: 'Boop' }, { id: 2, title: 'Booper' }, { id: 3, title: 'Bob' }, { id: 4, title: 'Booooooooooba' }],
      authorSuggestionList: [{ id: 1, username: '' }, { id: 2, username: 'Cooper' }, { id: 3, username: 'Booper' }],
    };
    this.debounceSuggestions = _.debounce(this.getSuggestions, 399);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchHover = this.searchHover.bind(this);
    this.toggleShowSuggestions = this.toggleShowSuggestions.bind(this);
  }

  // Get request for searchbar
  // // Need suggestions
  // Suggestions for patterns, authors, tags, etc.

  handleChange(event) {
    const inputtedText = event.target.value;
    this.setState({
      searchedText: inputtedText,
    }, () => {
      this.debounceSuggestions();
    });
  }

  handleSearch(event) {
    const { searchedText } = this.state;
    event.preventDefault();
    console.log('Query/search database for: ', searchedText);
    this.setState({ searchedText: '' });

    // API route will need to be user or author depending on clicked item
    // const type = ???????? (Will need to find a way to retrieve this info when clicked)
    // const id = ???????????
    // axios.get(`/${type}/${id}`, {
    //   params: {
    //     keyword: searchedText,
    //   }
    //     .then((response) => {
    //       const searched = response.data;
    //       this.setState({ searchSuggestionList: searched });
    //     })
    //     .catch((error) => {
    //       console.log('Error fetching search results: ', error);
    //     }),
    // });
  }

  getSuggestions(searchedInput) {
    console.log('DEEEEbouncbeed');
    // axios.get('/api/search', {
    //   params: {
    //     keyword: searchedInput,
    //   }
    //     .then((response) => {
    //       const searched = response.data;
    //       const searchSuggestions = [];
    //       const authorSuggestions = [];
    //        for (let i = 0; i < response.data.length; i++) {
    //          searchSuggestions.push({ id: response.data[i].pattern_id, title: response.data[i].pattern_title });
    //          authorSuggestions.push({id: response.data[i].user_id, username: response.data[i].user_title});
    //        }
    //       this.setState({
    //         searchSuggestionList: searchSuggestions
    //          authorSuggestionList: authorSuggestions
    //       });
    //     })
    //     .catch((error) => {
    //       console.log('Error fetching search suggestions: ', error);
    //     }),
    // });
  }

  searchHover(event) {
    event.preventDefault();
    const { searchHover } = this.state;
    this.setState({ searchHover: !searchHover });
  }

  toggleShowSuggestions() {
    this.setState({
      searchedText: '',
    });
  }

  render() {
    const {
      searchedText,
      searchHover,
      searchSuggestionList,
      authorSuggestionList,
    } = this.state;
    return (
      <div className={styles.searchBar}>
        <form onSubmit={this.handleSearch}>
          <div className={styles.searchContainer}>
            <div>
              <input
                className={styles.searchInput}
                placeholder="Search"
                type="text"
                name="searchedText"
                value={searchedText}
                onChange={this.handleChange}
                autoComplete="off"
              />

              {/* If searchedText > 0, show the search suggestions
              otherwise, show "no results found" in a div that looks like search suggestions */}

              {searchedText.length > 0
              && (
                <div className={styles.searchSuggestions}>
                  {searchSuggestionList.length > 0
                    && (
                      <div className={styles.suggestionTitle}>
                        Patterns
                      </div>
                    )}
                  <div>
                    {
                      searchSuggestionList.map((suggestion) => (
                        <SearchSuggestions
                          suggestion={suggestion}
                          toggleShowSuggestions={this.toggleShowSuggestions}
                        />
                      ))
                    }
                  </div>
                  {authorSuggestionList.length > 0
                    && (
                      <div className={styles.suggestionTitle}>
                        Users and Authors
                      </div>
                    )}
                  <div>
                    {
                      authorSuggestionList.map((author) => (
                        <AuthorSuggestions
                          author={author}
                          toggleShowSuggestions={this.toggleShowSuggestions}
                        />
                      ))
                    }
                  </div>
                </div>
              )}
            </div>
            <div
              className={styles.searchIconWrapper}
              onMouseEnter={this.searchHover}
              onMouseLeave={this.searchHover}
            >
              <FaSearch
                className={styles.searchIcon}
                size="25"
                color={searchHover ? 'black' : '#D1D1D1'}
                onClick={this.handleSearch}
              />
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

// Functional:

{/* <div className={styles.searchBar}>
<form onSubmit={this.handleSearch}>
  <div className={styles.searchContainer}>
    <div>
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
      {searchedText.length > 0
      && <div className={styles.searchSuggestions}>This will be suggestions list</div>}
    </div>
    <div
      className={styles.searchIconWrapper}
      onMouseEnter={this.searchHover}
      onMouseLeave={this.searchHover}
    >
      <FaSearch
        className={styles.searchIcon}
        size="25"
        color={searchHover ? 'black' : '#D1D1D1'}
        onClick={this.handleSearch}
      />
    </div>
  </div>
</form>
</div> */}
