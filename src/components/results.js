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
            <div className = "results">
                <Logo size={45} />
                <SearchBar  page ="results" onSubmit={(query) => this.handleSearchBarSubmit(query)} />
                <ResultsPost />
            </div>
        )
    }
}
export default connect(null, actions) (Results);