import React, {useEffect} from 'react';
import {
    getToDoLists,
    setTodoListFilter,
    updateCurrentPage,
    updatePageSize,
    updateToDo
} from "../../reducers/todo-reducer";
import {
    getPatchingInProgressRs,
    getTodoListsCurrentPageRs,
    getTodoListsPageSizeRs,
    getTodoListsRs
} from "../../reselect/ToDoListsReselect";
import Preloader from "../common/Preloader/Preloader";
import {Card, Pagination, Radio} from "antd";
import {useDispatch, useSelector} from "react-redux";
import ToDoList from "./ToDoList";
import {TodoType} from "../../types/types";

const ToDoListsContainer:React.FC = (props) => {
    const dispatch = useDispatch()

  const  patchingInProgress=useSelector(getPatchingInProgressRs)
  const  currentPage= useSelector(getTodoListsCurrentPageRs)
  const  pageSize= useSelector(getTodoListsPageSizeRs)
  const  toDoLists= useSelector(getTodoListsRs)

    const updateToDoListHandler=(id:number, toDo:TodoType)=> dispatch(updateToDo(id, toDo))

    useEffect(()=> {
        dispatch(getToDoLists())
    },[])

    const onPaginationValueChange:any = (pageNumber:number, pageSize:number,) => {
        dispatch(updateCurrentPage(pageNumber))
       dispatch(updatePageSize(pageSize))
    }

        if (toDoLists === null) return <Preloader />
    return (
            <div>
                <Pagination
                    showQuickJumper
                    defaultCurrent={currentPage + 1}
                    onChange={onPaginationValueChange}
                    defaultPageSize={pageSize}
                    total={toDoLists.length}
                />
                <Card style={{marginTop: 10}}>
                    <Radio.Group>
                        <Radio.Button
                                      onClick={() => dispatch(setTodoListFilter(false))}>not completed</Radio.Button>
                        <Radio.Button
                                      onClick={() => dispatch(setTodoListFilter(true))}>Completed</Radio.Button>
                        <Radio.Button
                                      onClick={() => dispatch(getToDoLists())}>All</Radio.Button>
                    </Radio.Group>
                    {
                        toDoLists
                            .slice(currentPage * pageSize, currentPage * pageSize + pageSize)
                            .map((t:TodoType) => <ToDoList key={t.id}
                                                toDoList={t}
                                                           updateToDoListHandler={updateToDoListHandler}
                                                patchingInProgress={patchingInProgress}
                                />
                            )
                    }
                </Card>
            </div>
        );
}

export default ToDoListsContainer;