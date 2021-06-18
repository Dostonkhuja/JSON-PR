import React, {useEffect} from 'react';

import s from '../../Photos/photos.module.css'
import AlbumPhoto from "./AlbumPhoto";
import Preloader from "../../common/Preloader/Preloader";

import {useDispatch, useSelector} from "react-redux";
import {getPhotosAlmubsRs} from "../../../reselect/AlbumsReselect";
import {getPhotosAlbum} from "../../../reducers/albums-reducer";
import {Link, RouteComponentProps, useHistory, useParams} from 'react-router-dom';
import {StaticContext, withRouter} from "react-router";

type ParamTypes = {
    albumId: string
}

const AlbumPhotos: React.FC<RouteComponentProps<ParamTypes, StaticContext, unknown>> = (props) => {
    const dispatch = useDispatch()
    const {albumId} = useParams<ParamTypes>()
    const history = useHistory()
    const photosAlbum = useSelector(getPhotosAlmubsRs)


    useEffect(() => {
        if (!albumId) {
            history.push("/albums")
        }
        dispatch(getPhotosAlbum(Number(albumId)))
    }, [])

    if (photosAlbum === null) {
        return <Preloader/>
    }
    return (
        <div className={s.photosContainer}>
            <Link to='/albums'>back</Link>
            {photosAlbum.map(p => <AlbumPhoto photos={p} key={p.id}/>)}
            <Link to='/albums'>back</Link>
        </div>
    );
};

export default withRouter(AlbumPhotos)