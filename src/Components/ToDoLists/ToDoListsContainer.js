import React from 'react';

import {Radio, Pagination, Card} from "antd";
import {connect} from "react-redux";
import ToDoList from "./ToDoList";
import {compose} from "redux";
import {
    updateCurrentPage,
    setTodoListFilter,
    updatePageSize,
    getToDoLists,
    updateToDo
} from "../../reducers/todo-reducer";

class ToDoListsContainer extends React.Component {
    componentDidMount() {
        this.props.getToDoLists()
    }

    onPaginationValueChange = (pageNumber, pageSize,) => {
        this.props.updateCurrentPage(pageNumber)
        this.props.updatePageSize(pageSize)
    }

    render() {

        if (this.props.toDoLists === null) return <div>loading...</div>

        return (
            <div>

                <Pagination
                    showQuickJumper
                    defaultCurrent={this.props.currentPage + 1 }
                    onChange={this.onPaginationValueChange}
                    defaultPageSize={this.props.pageSize}
                    total={this.props.toDoLists.length}

                />

                <Card style={{marginTop: 10}}>
                    <Radio.Group>

                        <Radio.Button htmlType='submit'
                                      onClick={() => this.props.setTodoListFilter(false)}>not completed</Radio.Button>
                        <Radio.Button htmlType='submit'
                            onClick={() => this.props.setTodoListFilter(true)}>Completed</Radio.Button>
                        <Radio.Button htmlType='submit'
                                      onClick={() => this.props.getToDoLists()}>All</Radio.Button>

                    </Radio.Group>

                    {
                        this.props.toDoLists
                            .slice(this.props.currentPage * this.props.pageSize,
                                this.props.currentPage * this.props.pageSize + this.props.pageSize)
                            .map(t => <ToDoList key={t.id}
                                                toDoList={t}
                                                updateToDo={this.props.updateToDo}
                                                patchingInProgress={this.props.patchingInProgress}
                                />
                            )
                    }

                </Card>

            </div>
        );
    };
}

const mapStateProps = (state) => ({
    patchingInProgress: state.toDoListsPage.patchingInProgress,
    currentPage: state.toDoListsPage.currentPage,
    toDoLists: state.toDoListsPage.toDoLists,
    pageSize: state.toDoListsPage.pageSize,
})

export default compose(
    connect(mapStateProps, {getToDoLists, updateToDo, updatePageSize, updateCurrentPage, setTodoListFilter})
) (ToDoListsContainer);