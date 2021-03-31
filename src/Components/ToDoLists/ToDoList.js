import React from 'react';

import s from './todo.module.css'
import {Checkbox} from 'antd'

const ToDoList = (props) => {
    const handleChange = (event) => {
        props.updateToDo( event.target.id, {completed: event.target.checked} )
    }

    return <div className={s.checkBox}>
            <span style={{marginRight:'10px'}}>
            {props.toDoList.id}.
            </span>
            <Checkbox
                disabled={props.patchingInProgress.some(id => id === props.toDoList.id)}
                checked={props.toDoList.completed}
                onChange={handleChange}
                id={props.toDoList.id}>
                {props.toDoList.completed ? <strike>{props.toDoList.title}</strike> : props.toDoList.title}
            </Checkbox>
        </div>
};


export default ToDoList;