import React from 'react';
import './Todolist.css';
import { Todo } from "../modle/modle";
import SingleTodo from '../SingleTodo/SingleTodo';

interface Props {
    taskList: Todo[];
    setTaskList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolist: React.FC<Props> = ({ taskList}) => {
    return (
        <div >
            <ul className='todos'>
                {taskList.map((todo) => (
                    <SingleTodo 
                    key={todo.id}
                    todo={todo}
                    setTaskList={taskList}
                    taskList={taskList}

                     />

                ))}
            </ul>
        </div>
    );
}

export default Todolist;
