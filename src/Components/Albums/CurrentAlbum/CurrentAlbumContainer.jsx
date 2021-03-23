import React from 'react';
import {Card} from "antd";
import {compose} from "redux";
import {connect} from "react-redux";
import {getPhotosAlbum} from "../../../reducers/albums-reducer";
import AlbumPhotos from "./AlbumPhotos";
import {Link} from "react-router-dom";

const { Meta } = Card;

class CurentAlbumContainer extends React.Component {
    componentDidMount() {
        let albumId = this.props.match.params.albumId;
        if (!albumId) {
            // userId = this.props.userId
            if (!albumId) {
                this.props.history.push("/albums")
            }
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
    photosAlbum:state.albumsPage.photosAlbum,
    })

export default compose(
    connect(mapStateToProps,{getPhotosAlbum})
)(CurentAlbumContainer);