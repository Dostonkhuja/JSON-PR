import React from 'react';

import {getAlbums, updateCurrentPage, updatePageSize} from "../../reducers/albums-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Albums from "./Albums";

class AlbumsContainer extends React.Component {
    componentDidMount() {
        this.props.getAlbums()
    }
    render() {
        return (
            <div>
                <Albums
                    albums={this.props.albums}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    updatePageSize={this.props.updatePageSize}
                    updateCurrentPage={this.props.updateCurrentPage}
                />
            </div>
        );
    }
}

const mapStateToProps=(state)=>({
    albums:state.albumsPage.albums,
    pageSize: state.albumsPage.pageSize,
    currentPage: state.albumsPage.currentPage,
})

export default compose(
    connect(mapStateToProps,{getAlbums,updatePageSize, updateCurrentPage})
)(AlbumsContainer);