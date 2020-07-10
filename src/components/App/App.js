import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      loading: false
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    this.setState({loading: true});
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses})
    }).then(()=> {
      this.setState({loading: false})
    });    
  }
 
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        {this.state.loading && <p className="loading">Loading...</p>}
        <BusinessList businesses={this.state.businesses} />        
      </div>
    );
  }  
}

export default App;
