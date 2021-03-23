import React from 'react';
import Photo from "./Photo";
import s from './photos.module.css'
import {Carousel, Pagination} from 'antd';
import 'antd/dist/antd.css'

const Photos = (props) => {

    if  (props.photos.length<1)
    {return <div>Loading...</div>}

   const onPaginationValueChange=(pageNumber, pageSize,)=> {
        props.updateCurrentPage(pageNumber)
        props.updatePageSize(pageSize)
    }

    return (
        <div className={s.photosContainer}>
            <Pagination
                showQuickJumper
                defaultCurrent={1}
                defaultPageSize={20}
                total={props.photos.length}
                onChange={onPaginationValueChange}
            />
            <div className={s.corusel}>
                <Carousel autoplay effect="fade">
                    <div>
                        <img className={s.contentStyle} src={props.photos[0].url} />
                    </div>
                    <div>
                        <img className={s.contentStyle} src={props.photos[1].url} />
                    </div>
                    <div>
                        <img className={s.contentStyle} src={props.photos[2].url} />
                    </div>
                    <div>
                        <img className={s.contentStyle} src={props.photos[3].url} />
                    </div>
                </Carousel>
            </div>
            {
                props.photos
                .slice(props.currentPage * props.pageSize,props.currentPage * props.pageSize + props.pageSize)
                .map(p => <Photo photos={p} key={p.id}/> )
            }
        </div>
    );
};

export default Photos;