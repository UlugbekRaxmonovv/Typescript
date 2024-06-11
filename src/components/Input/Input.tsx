import React from 'react';
import './Input.css'

interface Props{
    task:string;
    setTask:React.Dispatch<React.SetStateAction<string>>;
}
const Input: React.FC<Props> =({ task, setTask}) => {
    return (
      <>
      <form action="" className="input">
      
      <input type="text" placeholder=' Enter a task' className='input_box' />
      <button className='input_button' type='submit'>Go</button>
      </form>
      </>
    );
}

export default Input;
