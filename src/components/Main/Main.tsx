import React, { useState } from "react";
import './Main.css';
import Input from "../Input/Input";
import { Todo } from "../modle/modle";
import Todolist from "../Todolist/Todolist";

const Main: React.FC = () => {
    const [task, setTask] = useState<string>("");
    const [taskList, setTaskList] = useState<Todo[]>([]);

    const addTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (task) {
            setTaskList([...taskList, { id: Date.now(), task, isDone: false }]);
            setTask("");
        }
    };
    return (
        <div className="main">
            <span className="heading">Taskify</span>
            <Input task={task} setTask={setTask} addTask={addTask} />
          <Todolist taskList={taskList} setTaskList={setTaskList} />
        </div>
    );
}

export default Main;
