import React from 'react';

import {compose} from "redux";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import AlbumPhotos from "./AlbumPhotos";
import {getPhotosAlbum} from "../../../reducers/albums-reducer";
import {getPhotosAlmubsRs} from "../../../reselect/AlbumsReselect";

class CurentAlbumContainer extends React.Component {
    componentDidMount() {
        let albumId = this.props.match.params.albumId;
        if (!albumId) {
            this.props.history.push("/albums")
        }
        this.props.getPhotosAlbum(albumId)
    }

    render() {
        return (<>
                <Link to='/albums'>back</Link>
                <AlbumPhotos photosAlbum={this.props.photosAlbum}/>
                <Link to='/albums'>back</Link>
            </>
        );
    }
}

let mapStateToProps = (state) => ({
    photosAlbum: getPhotosAlmubsRs(state),
})

export default compose(
    connect(mapStateToProps, {getPhotosAlbum})
)(CurentAlbumContainer);