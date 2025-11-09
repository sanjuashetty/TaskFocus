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

    <div className='Task'>
    <form onSubmit={handelsubmit}>

        <div className='parent'>

           <input className='t' type="text" placeholder='Enter your task' value = {task}
            onChange={(e) => settask(e.target.value)}
            />
            
          <button className='tt' type='submit'>Add task</button>
           

        
            <select className='tt' onChange={(e) => setpriority(e.target.value)} value={priority}>
                <option value = "high">High</option>
                <option value = "medium">Medium</option>
                <option value = "low">Low</option>
            </select>

            <select className='tt' onChange={(e) => setcatogery(e.target.value)} value={catogery}>
                <option value = "general">General</option>
                <option value = "work">Work</option> 
                <option value = "personal">Personal</option>
            </select>
           
        </div>
    </form>
    </div>
  )
}
