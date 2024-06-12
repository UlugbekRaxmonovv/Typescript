import React from 'react';
import { Todo } from '../modle/modle';
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import './SingleTodo.css'
interface Props {
  todo: Todo;
  taskList: Todo[];
  setTaskList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, taskList, setTaskList }) => {
  return (
    <form className="single-todo">
      <span className="todo-text">
        {todo.task}
      </span>
      <span className="ikon"><AiTwotoneEdit /></span>
      <span className="ikon"><MdDeleteOutline /></span>
      <span className="ikon"><MdOutlineDone /></span>
    </form>
  );
}

export default SingleTodo;
