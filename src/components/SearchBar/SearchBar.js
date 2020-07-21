import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? 'active' : '';
  }

  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption,
    });
    if (this.state.term) {
      setTimeout(() => {
      this.props.searchYelp(
        this.state.term,
        this.state.location,
        this.state.sortBy
      );
      }, 0) ;
    }    
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value,
    });
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value,
    });
  }

  handleSearch(event) {
    event.preventDefault();
    if (this.state.term && this.state.location) {
      this.props.searchYelp(
        this.state.term,
        this.state.location,
        this.state.sortBy
      );    
    }
  }

  handleKeyDown(event) {
    if (event.keyCode !== 13) return;
    if (this.state.term && this.state.location) {
      this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
      );
    }     
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className='SearchBar'>
        <div className='SearchBar-sort-options'>
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className='SearchBar-fields'>
          <input onChange={this.handleTermChange} onKeyDown={this.handleKeyDown} placeholder='Search Businesses' />
          <input onChange={this.handleLocationChange} onKeyDown={this.handleKeyDown} placeholder='Where?'  />
        </div>
        <div className='SearchBar-submit'>
          <button onClick={this.handleSearch}>Let's Go</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
