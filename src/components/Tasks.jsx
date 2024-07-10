import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, setTasks }) => {
  return (
    <div className="px-2 mt-4 max-h-96 overflow-y-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-primary scrollbar-thumb-rounded-full">
        {tasks.map((task, index) => (
            <Task task={task} setTasks={setTasks}  index={index} key={index} />
        ))}
    </div>
  )
}

export default Tasks