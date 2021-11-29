import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";

import { connect } from "react-redux";
import * as actions from '../actions';
import ResultsPost from "../components/resultsPost";

class Results extends Component{
    handleSearchBarSubmit(query) {
        this.props.fetchPostWithQuery(query);
    }
    render() {
        return (
            <div>
                <Logo size={45} />
                <SearchBar  onSubmit={(query) => this.handleSearchBarSubmit(query)} />
   
            </div>
        )
    }
}
export default connect(null, actions) (Results);