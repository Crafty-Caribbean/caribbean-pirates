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
      patternSuggestionList: [],
      authorSuggestionList: [],
    };
    this.debounceSuggestions = _.debounce(this.getSuggestions, 399);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleSearchHover = this.toggleSearchHover.bind(this);
    this.clearSearchSuggestions = this.clearSearchSuggestions.bind(this);
    this.searchSuggestions = React.createRef();
  }

  handleChange(event) {
    const inputtedText = event.target.value;
    this.setState({
      searchedText: inputtedText,
    }, () => {
      this.debounceSuggestions();
    });
  }

  handleSearch(event) {
    event.preventDefault();
    this.getSuggestions();
  }

  getSuggestions() {
    const { searchedText } = this.state;
    if (searchedText.length === 0) {
      return;
    }
    axios.get('/api/search', {
      params: {
        keyword: searchedText,
      },
    })
      .then((response) => {
        this.setState({
          authorSuggestionList: response.data.users,
          patternSuggestionList: response.data.patterns,
        });
      })
      .catch((error) => {
        console.error('Error retrieving search suggestions:', error);
      });
  }

  toggleSearchHover(event) {
    event.preventDefault();
    const { searchHover } = this.state;
    this.setState({ searchHover: !searchHover });
  }

  clearSearchSuggestions() {
    this.setState({
      searchedText: '',
    });
  }

  render() {
    const {
      searchedText,
      searchHover,
      patternSuggestionList,
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
              {searchedText.length > 0
              && (
                <div className={styles.searchSuggestions}>
                  {patternSuggestionList.length > 0
                    && (
                      <div className={styles.suggestionTitle}>
                        Patterns
                      </div>
                    )}
                  <div className={styles.searchSuggestionsList}>
                    {
                      patternSuggestionList.map((suggestion) => (
                        <SearchSuggestions
                          key={`${suggestion.id}-suggestion`}
                          suggestion={suggestion}
                          clearSearchSuggestions={this.clearSearchSuggestions}
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
                  <div className={styles.searchSuggestionsList}>
                    {
                      authorSuggestionList.map((author) => (
                        <AuthorSuggestions
                          key={`${author.id}-suggestion`}
                          author={author}
                          clearSearchSuggestions={this.clearSearchSuggestions}
                        />
                      ))
                    }
                  </div>
                </div>
              )}
            </div>
            <div
              className={styles.searchIconWrapper}
              onMouseEnter={this.toggleSearchHover}
              onMouseLeave={this.toggleSearchHover}
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
