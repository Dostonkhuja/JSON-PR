import React from 'react';

import {updateCurrentPage, updatePageSize} from "../../reducers/todo-reducer";
import {getPhotos} from "../../reducers/photos-reducer";
import {connect} from "react-redux";
import Photos from "./Photos";
import {compose} from "redux";

class PhotosContainer extends React.Component {
    componentDidMount() {
        this.props.getPhotos()
    }

    render() {
        return <Photos
            photos={this.props.photos}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            updatePageSize={this.props.updatePageSize}
            updateCurrentPage={this.props.updateCurrentPage}
        />
    }
}

const mapStateToProps = (state) => ({
    photos: state.photosPage.photos,
    pageSize: state.photosPage.pageSize,
    currentPage: state.photosPage.currentPage,
})

export default compose(
    connect(mapStateToProps, {getPhotos, updatePageSize, updateCurrentPage})
)(PhotosContainer);