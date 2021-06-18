import React, {useEffect} from 'react';

import Comment from "./Comment";
import {Pagination} from "antd";
import Preloader from "../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {getCommentsCurrentPageRs, getCommentsPageSizeRs, getCommentsRs} from "../../reselect/CommentsReselect";
import {getComments, updateCurrentPage, updatePageSize} from "../../reducers/comments-reducer";

const Comments:React.FC = () => {
    const dispatch = useDispatch()

    const comments = useSelector(getCommentsRs)
    const pageSize = useSelector(getCommentsPageSizeRs)
    const currentPage = useSelector(getCommentsCurrentPageRs)

    useEffect(()=>{
        dispatch(getComments())
    },[])

    if(comments===null){return  <Preloader />}
    let onPaginationValueChange:any =(pageNumber:number, pageSize:number,)=> {
        dispatch(updateCurrentPage(pageNumber))
        dispatch(updatePageSize(pageSize))
    }
    return (
        <div>
            <Pagination
                showQuickJumper
                defaultCurrent={1}
                defaultPageSize={10}
                total={comments.length}
                onChange={onPaginationValueChange}
            />
            {comments
                .slice(currentPage * pageSize,currentPage * pageSize +pageSize)
                .map(c=> <Comment comments={c} key={c.id} />)}
        </div>
    );
};

export default Comments;