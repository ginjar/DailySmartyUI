import React, { Component } from 'react';
import Logo from './logo';
import RecentPosts from './recentPosts';
import SearchBar from './searchBar';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Home extends Component{


  handleSearchBarSubmit(query) {
    this.props.fetchPostWithQuery(query, () => {
      this.props.history.push('/results');
    });

  }
  render() {
    return (
      <div>
        <h1>Gina Daily Smarty</h1>
        <h2>DevCamp Bottega Course</h2>
        <Logo />
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
        <RecentPosts />
      
        </div>
        
       
    );
  }
}
export default connect(null, actions)(Home);