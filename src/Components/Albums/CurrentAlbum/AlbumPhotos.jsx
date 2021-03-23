import React from 'react';
import s from '../../Photos/photos.module.css'
import AlbumPhoto from "./AlbumPhoto";
import {Link} from "react-router-dom";


const AlbumPhotos = (props) => {

    if  (props.photosAlbum===null){return <div>Loading...</div>}
    return (
        <div className={s.photosContainer}>
            {props.photosAlbum.map(p => <AlbumPhoto photos={p} key={p.id}/> )}
        </div>
    );
};

export default AlbumPhotos;