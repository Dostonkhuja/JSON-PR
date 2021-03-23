import React from 'react';
import Comment from "./Comment";
import {Pagination} from "antd";

const Comments = (props) => {
    if(props.comments===null){return <div>Loading...</div>}
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
                total={props.comments.length}
                onChange={onPaginationValueChange}
            />
            {props.comments
                .slice(props.currentPage * props.pageSize,props.currentPage * props.pageSize + props.pageSize)
                .map(c=> <Comment comments={c} key={c.id} />)}
        </div>
    );
};

export default Comments;