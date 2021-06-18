import React from 'react';

import 'antd/dist/antd.css'
import Photo from "./Photo";
import s from './photos.module.css'
import {Carousel, Pagination} from 'antd';
import Preloader from "../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {getPhotosCurrentPageRs, getPhotosPageSizeRs, getPhotosRs} from "../../reselect/PhotosReselect";
import {updateCurrentPage, updatePageSize} from "../../reducers/photos-reducer";
import {PhotosType} from "../../types/types";

const Photos:React.FC = (props) => {
    const dispatch = useDispatch()

    const photos = useSelector(getPhotosRs)
    const pageSize = useSelector(getPhotosPageSizeRs)
    const currentPage = useSelector(getPhotosCurrentPageRs)

    if  (photos.length<1) {return <Preloader/>}

    const onPaginationValueChange:any=(pageNumber:number, pageSize:number,)=> {
        dispatch(updateCurrentPage(pageNumber))
        dispatch(updatePageSize(pageSize))
    }

    return (
        <div className={s.photosContainer}>
            <Pagination
                showQuickJumper
                defaultCurrent={1}
                defaultPageSize={50}
                total={photos.length}
                onChange={onPaginationValueChange}
            />
            <div className={s.corusel}>
                <Carousel autoplay effect="fade">
                    <div>
                        <img className={s.contentStyle} src={photos[0].url} />
                    </div>
                    <div>
                        <img className={s.contentStyle} src={photos[1].url} />
                    </div>
                    <div>
                        <img className={s.contentStyle} src={photos[2].url} />
                    </div>
                    <div>
                        <img className={s.contentStyle} src={photos[3].url} />
                    </div>
                </Carousel>
            </div>
            {
                photos
                .slice(currentPage * pageSize,currentPage * pageSize + pageSize)
                .map((p:PhotosType) => <Photo photos={p} key={p.id}/> )
            }
        </div>
    );
};

export default Photos;