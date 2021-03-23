import React, {PureComponent} from 'react';
import MyPosts from "./MyPosts";
import {compose} from "redux";
import {connect} from "react-redux";
import {addNewPost} from "../../../reducers/auth-reducer";

class MyPostsContainer extends PureComponent {
    render() {
        return (
            <div>
                <MyPosts myPost={this.props.myPost} addNewPost={this.props.addNewPost}/>
            </div>
        );
    }
}

const mapStateToProps=(state)=>({
    myPost:state.auth.myPost,
})

export default compose(
    connect(mapStateToProps,{addNewPost})
)(MyPostsContainer);