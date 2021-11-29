
import React, { Component } from "react";
import { connect } from "react-redux";
import Post from './post';

class ResultsPost extends Component{
    renderPosts= function() {
        const posts = this.props.posts.map((post, index) => {
            return <Post type="result" key={index} {...post}/>
        })
        return posts;
    }
    render() {
        return (
            <div className="results-post">
                <div className="results-post-wrapper">
                    <ul className="results-posts-posts">
                       {this.renderPosts()}
                    </ul>
                </div>
         </div>   
        )
    }
}
function mapStateToProps(state) {
    return (
        {posts: state.posts.ResultsPost}
    )
}
export default connect (mapStateToProps)(ResultsPost);