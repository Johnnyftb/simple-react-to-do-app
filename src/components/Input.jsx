import React from 'react';

const Input = ({ setTasks }) => {

    const [input, setInput] = React.useState("");
    
    const addTask = () => {
        setTasks(tasks => [...tasks, {
            task: input,
            completed: false
        }]);
        setInput("");
    }

    return (
        <div className="w-full px-2 text-xl text-light flex items-center space-x-4">
            <input type="text" className="rounded-md bg-transparent border border-light p-1 w-full" placeholder="Type task here..." value={input} onChange={(e) => setInput(e.target.value)}/>
            <button className="bg-third px-4 py-1 rounded-md text-xl hover:scale-105 transition-all ease-in-out" onClick={() => addTask()}>Add</button>
        </div>
    )
}

export default Input