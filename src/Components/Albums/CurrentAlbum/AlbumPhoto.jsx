import React from 'react';
import { Card } from 'antd';
import s from '../../Photos/photos.module.css'

const { Meta } = Card;

const AlbumPhoto = (props) => {
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