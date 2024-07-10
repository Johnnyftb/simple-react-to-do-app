import React from 'react';
import { FaPencil, FaTrashCan, FaCheck } from 'react-icons/fa6';

const Task = ({ task, setTasks, index }) => {

  const [editMode, setEditMode] = React.useState(false);
  const [taskValue, setTaskValue] = React.useState(task.task);

  const toggleTaskCompletion = () => {
    setTasks((prevTasks) => prevTasks.map((prevTask, idx) => index == idx ? { task: prevTask.task, completed: !prevTask.completed } : prevTask))
  }

  const editTask = () => {
    setTasks((prevTasks) => prevTasks.map((prevTask, idx) => index == idx ? { task: taskValue, completed: false} : prevTask))
    setEditMode(false);
  }

  const deleteTask = () => {
    setTasks((prevTasks) => prevTasks.filter((prevTask, idx) => index != idx))
  }

  return (
    <div className="text-light flex items-center justify-between w-full hover:border-light border border-transparent p-1 rounded-md transition-all ease-in-out duration-100 space-x-2">
      {editMode ? (
          <input type="text" className="rounded-md bg-transparent border-none w-full" value={taskValue} onChange={(e) => setTaskValue(e.target.value)}/>
        ) : ( 
          <div className="flex items-center justify-center space-x-2">
            <input type="checkbox" className="appearance-none text-transparent bg-transparent rounded-xl cursor-pointer focus:ring-0" onChange={() => toggleTaskCompletion()}/>
              <h1 className={`text-lg ${task.completed ? 'line-through text-gray-500': ''}`}>{task.task}</h1>
          </div>
        )}
      <div className="flex items-center justify-center space-x-2">
        {editMode ? (
          <button className="text-lg px-2 py-1 bg-green-400 rounded-md" onClick={() => editTask()}><FaCheck /></button>
        ) : (
          <button className="text-lg px-2 py-1 bg-third rounded-md" onClick={() => setEditMode(true)}><FaPencil /></button>
        )}
        
        <button className="text-lg px-2 py-1 rounded-md bg-red-500" onClick={() => deleteTask()}><FaTrashCan /></button>
      </div>
    </div>
  )
}

export default Task