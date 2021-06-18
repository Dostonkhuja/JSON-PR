import React, {ChangeEvent} from 'react';
import s from './todo.module.css'
import {Checkbox} from 'antd'
import {TodoType} from "../../types/types";

type PropsType= {
    toDoList:TodoType
    patchingInProgress:Array<number>
    updateToDoListHandler:(id:number,toDo:TodoType)=> void
}

const ToDoList:React.FC<PropsType> = (props) => {
    const {userId,id,title} = props.toDoList

    const handleChange:any = (event:ChangeEvent<HTMLInputElement>) => {
        props.updateToDoListHandler( Number(event.target.id), {
            completed:event.target.checked,
            userId:userId,
            id:id,
            title:title
        } )
    }

    return <div className={s.checkBox}>
            <span className={s.toDoNumber} style={{marginRight:'10px'}}>
            {props.toDoList.id}.
            </span>
            <Checkbox
                disabled={props.patchingInProgress.some((id:number) => id === props.toDoList.id)}
                checked={props.toDoList.completed}
                onChange={handleChange}
                id={String(props.toDoList.id)}>
                {props.toDoList.completed ? <span>{props.toDoList.title}</span> : props.toDoList.title}
            </Checkbox>
        </div>
};


export default ToDoList;