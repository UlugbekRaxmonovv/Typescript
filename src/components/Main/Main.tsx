import React,{useState} from "react";
import './Main.css'
import Input from "../Input/Input";

const Main: React.FC = () => {
    const [task, setTask] = useState<string>("");
    return (
        <div className="main">
           <span className="heading">Taskify</span>
           <Input task={task}  setTask={setTask}/>
        </div>
    );
}

export default Main;
