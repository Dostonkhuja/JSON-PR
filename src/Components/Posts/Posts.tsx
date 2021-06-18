import React, {useEffect} from 'react';
import Post from "./Post";
import {Pagination} from "antd";
import Preloader from "../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {getPostsCurrentPageRs, getPostsPageSizeRs, getPostsRs} from "../../reselect/PostsReselect";
import {Postype} from "../../types/types";
import {getPosts, updateCurrentPage, updatePageSize} from "../../reducers/posts-reducer";

const Posts:React.FC = (props) => {
    const dispatch = useDispatch()

    const posts = useSelector(getPostsRs)
    const pageSize = useSelector(getPostsPageSizeRs)
    const currentPage = useSelector(getPostsCurrentPageRs)

    useEffect(()=>{
        dispatch(getPosts())
    },[])

    if (posts === null) {return <Preloader />}

    let onPaginationValueChange:any = (pageNumber:number, pageSize:number,) => {
        dispatch(updateCurrentPage(pageNumber))
        dispatch(updatePageSize(pageSize))
    }

    return (
        <div>
            <Pagination
                showQuickJumper
                defaultCurrent={1}
                defaultPageSize={10}
                total={posts.length}
                onChange={onPaginationValueChange}
            />
            {
                posts
                    .slice(currentPage * pageSize, currentPage * pageSize + pageSize)
                    .map((p:Postype) => <Post posts={p} key={p.id}/>)
            }
        </div>
    );
};

export default Posts;