import React, { Component } from 'react';
import Logo from './logo';
import RecentPosts from './recentPosts';
import SearchBar from './searchBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Gina Daily Smarty</h1>
        <h2>DevCamp Bottega Course</h2>
        <Logo />
        <SearchBar />
        <RecentPosts />
      
        </div>
        
       
    );
  }
}
