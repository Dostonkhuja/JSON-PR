import React from 'react';

import Posts from "./Posts";
import {compose} from "redux";
import {connect} from "react-redux";
import {getPosts, updateCurrentPage, updatePageSize} from "../../reducers/posts-reducer";
import {getPostsCurrentPageRs, getPostsPageSizeRs, getPostsRs} from "../../reselect/PostsReselect";

class PostsContainer extends React.Component {
    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return <Posts
                updateCurrentPage={this.props.updateCurrentPage}
                updatePageSize={this.props.updatePageSize}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                posts={this.props.posts}
            />
    };
}

const mapStateToProps = (state) => ({
    posts: getPostsRs(state),
    pageSize: getPostsPageSizeRs(state),
    currentPage: getPostsCurrentPageRs(state),
})

export default compose(
    connect(mapStateToProps, {getPosts, updatePageSize, updateCurrentPage})
) (PostsContainer);