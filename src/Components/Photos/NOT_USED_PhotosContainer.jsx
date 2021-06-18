import React from 'react';

import Photos from "./Photos";
import {compose} from "redux";
import {connect} from "react-redux";
import {getPhotos} from "../../reducers/photos-reducer";
import {updateCurrentPage, updatePageSize} from "../../reducers/photos-reducer";
import {getPhotosCurrentPageRs, getPhotosPageSizeRs, getPhotosRs} from "../../reselect/PhotosReselect";

class NOT_USED_PhotosContainer extends React.Component {
    componentDidMount() {
        this.props.getPhotos()
    }

    render() {
        return(
            <Photos
            photos={this.props.photos}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            updatePageSize={this.props.updatePageSize}
            updateCurrentPage={this.props.updateCurrentPage} />
       )
    }
}

const mapStateToProps = (state) => ({
    photos: getPhotosRs(state),
    pageSize: getPhotosPageSizeRs(state),
    currentPage: getPhotosCurrentPageRs(state),
})

export default compose(
    connect(mapStateToProps, {getPhotos, updatePageSize, updateCurrentPage})
)(NOT_USED_PhotosContainer);