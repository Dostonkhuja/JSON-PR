import React from 'react';

import {getPosts, updateCurrentPage, updatePageSize} from "../../reducers/posts-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Posts from "./Posts";

class PostsContainer extends React.Component {
    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return (
            <Posts
                updateCurrentPage={this.props.updateCurrentPage}
                updatePageSize={this.props.updatePageSize}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                posts={this.props.posts}
            />
        );
    };
}

const mapStateToProps = (state) => ({
    posts: state.postsPage.posts,
    pageSize: state.postsPage.pageSize,
    currentPage: state.postsPage.currentPage,
})

export default compose(
    connect(mapStateToProps, {getPosts, updatePageSize, updateCurrentPage})
) (PostsContainer);