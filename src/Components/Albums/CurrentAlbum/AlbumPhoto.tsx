import React from 'react';
import { Card } from 'antd';
import s from '../../Photos/photos.module.css'
import {PhotoType} from "../../../types/types";

const { Meta } = Card;

type PropsType = {
    photos:PhotoType
}

const AlbumPhoto:React.FC<PropsType> = (props) => {
    return (
        <div className={s.photo}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img  src={props.photos.url} />}
            >
                <Meta title={props.photos.title} />
            </Card>
        </div>
    );
};

export default AlbumPhoto;