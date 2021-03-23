import React from 'react';
import Post from "./Post";
import {Pagination} from "antd";

const Posts = (props) => {
    if(props.posts===null){return <div>Loading...</div>}

    let onPaginationValueChange=(pageNumber, pageSize,)=> {
       props.updateCurrentPage(pageNumber)
       props.updatePageSize(pageSize)
    }
    return (
        <div>
            <Pagination
                showQuickJumper
                defaultCurrent={1}
                defaultPageSize={10}
                total={props.posts.length}
                onChange={onPaginationValueChange}
            />
            {props.posts
                .slice(props.currentPage * props.pageSize,props.currentPage * props.pageSize + props.pageSize)
                .map(p=> <Post posts={p} key={p.id} />)}
        </div>
    );
};

export default Posts;