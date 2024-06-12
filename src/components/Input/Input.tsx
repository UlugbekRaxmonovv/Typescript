import React, { useRef } from 'react';
import './Input.css';

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  addTask: (e: React.FormEvent) => void;
}

const Input: React.FC<Props> = ({ task, setTask, addTask }) => {

  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form action="" className="input" onSubmit={(e) =>{
      addTask(e)
      inputRef.current?.blur()
    }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a task"
        className="input_box"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="input_button" type="submit">
        Go
      </button>
    </form>
  );
};

export default Input;
