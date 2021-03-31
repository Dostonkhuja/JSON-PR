import React from 'react';

import {getCommentsCurrentPageRs, getCommentsPageSizeRs, getCommentsRs} from "../../reselect/CommentsReselect";
import {getComments, updateCurrentPage, updatePageSize} from "../../reducers/comments-reducer";
import {connect} from "react-redux";
import Comments from "./Comments";
import {compose} from "redux";

class CommentsContainer extends React.Component {
    componentDidMount() {
        this.props.getComments()
    }
    render() {
        return (
            <div>
                <Comments
                    comments={this.props.comments}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    updatePageSize={this.props.updatePageSize}
                    updateCurrentPage={this.props.updateCurrentPage}
                />
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    comments: getCommentsRs(state),
    pageSize: getCommentsPageSizeRs(state),
    currentPage: getCommentsCurrentPageRs(state),
})

export default compose(
    connect(mapStateToProps, {getComments, updatePageSize, updateCurrentPage})
)(CommentsContainer);