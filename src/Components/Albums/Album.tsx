import React from 'react';

import {Card} from "antd";
import s from './albums.module.css'
import {Link} from "react-router-dom";
import {AlbumType} from "../../types/types";

const {Meta} = Card;

type PropsType = {
    albums :AlbumType
}

const Album:React.FC<PropsType> = (props) => {
    return (
        <div className={s.album}>
            <Card hoverable style={{width: 230}}
                  cover={<img
                      src={'https://ae01.alicdn.com/kf/HTB1OMTeXjvuK1Rjy0Faq6x2aVXay/' +
                      'Photo-Album-Scrapbook-PU-Leather-Albums-Cover-Interleaf-Type-Wedding-Pictures' +
                      '-Album-Large-Volume-Retro-Photograph.jpg'}/>}
            >
                <Meta title={props.albums.title}/>
                <Link to={`/currentAlbum/${props.albums.id}`}>view album </Link>
            </Card>
        </div>
    );
};

export default Album;