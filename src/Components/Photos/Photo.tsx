import React from 'react';

import {Card, Image} from 'antd';
import s from './photos.module.css'
import {PhotosType} from "../../types/types";

const {Meta} = Card;

type PropsType = {
    photos:PhotosType
}

const Photo:React.FC<PropsType> = (props) => {
    return (
        <div className={s.photo}>
            <Card hoverable style={{width: 230}}>
                <Image width={182} src={props.photos.url} />
                <Meta title={props.photos.title} />
            </Card>
        </div>
    );
};

export default Photo;