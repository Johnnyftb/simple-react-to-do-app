import { Input, Tasks } from './components/index';
import React from 'react';

// Task Object Structure
//{ 
//  task: string
//  completed: boolean
//}

const App = () => {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    setTasks(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [])
  }, [])

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])


  return (
    <div className="bg-primary h-screen flex justify-center items-center">
      <div className="container xl:max-w-[52rem] m-auto p-4 drop-shadow-xl bg-secondary rounded-md font-primary">
        <Input setTasks={setTasks} />
        <Tasks tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  )
}

export default App