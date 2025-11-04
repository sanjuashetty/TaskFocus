import React, { useState } from 'react'

export default function Taskform({addTask}) {
  const[task, settask] =  useState('');
  const[priority, setpriority] = useState('medium');
  const[catogery, setcatogery] = useState('general');

  const handelsubmit = (e) => {
    e.preventDefault();
    addTask({task: task, priority, catogery, completed : false});

    settask('');
    setpriority('medium');
    setcatogery('general');
  }
  return (
    <form onSubmit={handelsubmit}>
        <div>

            <input type="text" placeholder='Enter your task' value = {task}
            onChange={(e) => settask(e.target.value)}/>
            <button type='submit'>Add task</button>
            <h1>{task} {priority} {catogery}</h1>

        </div>

        <div>
            <select onChange={(e) => setpriority(e.target.value)} value={priority}>
                <option value = "high">High</option>
                <option value = "medium">Medium</option>
                <option value = "low">Low</option>
            </select>

            <select onChange={(e) => setcatogery(e.target.value)} value={catogery}>
                <option value = "general">General</option>
                <option value = "work">Work</option> 
                <option value = "personal">Personal</option>
            </select>
           
        </div>
    </form>
  )
}
