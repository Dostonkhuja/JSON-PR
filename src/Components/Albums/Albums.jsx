import React from 'react';

import Album from "./Album";
import {Pagination} from "antd";
import s from './albums.module.css'
import Preloader from "../common/Preloader/Preloader";

const Albums = (props) => {
    if(props.albums === null){return  <Preloader />}
    let onPaginationValueChange=(pageNumber, pageSize,)=> {
        props.updateCurrentPage(pageNumber)
        props.updatePageSize(pageSize)
    }
   
    return (
        <div>
            <Pagination
                showQuickJumper
                defaultPageSize={10}
                total={props.albums.length}
                onChange={onPaginationValueChange}
                defaultCurrent={props.currentPage+1}
            />
            <div className={s.albumsContaiener}>
            {props.albums
                .slice(props.currentPage * props.pageSize,props.currentPage * props.pageSize + props.pageSize)
                .map(a=> <Album albums={a} key={a.id}/>)
            }
            </div>
        </div>
    );
};

export default Albums;