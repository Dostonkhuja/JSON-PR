import React, {useEffect} from 'react';

import {Pagination} from "antd";
import s from './albums.module.css'
import Preloader from "../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {getAlbums, updateCurrentPage, updatePageSize} from "../../reducers/albums-reducer";
import {getAlbumsRs, getCurrentPageRs, getPageSizeRs} from "../../reselect/AlbumsReselect";
import Album from "./Album";

const Albums:React.FC = () => {
   const dispatch = useDispatch()

   const albums = useSelector(getAlbumsRs)
   const currentPage = useSelector(getCurrentPageRs)
   const pageSize = useSelector(getPageSizeRs)

    useEffect(()=>{
            dispatch(getAlbums())
    },[])

    let onPaginationValueChange:any = (pageNumber:number, pageSize:number) => {
        dispatch(updateCurrentPage(pageNumber))
        dispatch(updatePageSize(pageSize))
    }

    if(albums === null){return  <Preloader />}
    return (
        <div>
            <Pagination
                showQuickJumper
                defaultPageSize={10}
                total={albums.length}
                onChange={onPaginationValueChange}
                defaultCurrent={currentPage+1}
            />
            <div className={s.albumsContaiener}>
            {albums
                .slice(currentPage * pageSize,currentPage * pageSize + pageSize)
                .map(a=> <Album albums={a} key={a.id}/>)
            }
            </div>
        </div>
    );
};

export default Albums;