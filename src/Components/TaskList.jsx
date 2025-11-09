import React from 'react'

export default function TaskList({tasks, updateTask, deleteTask}) {

  const toggleComplete = (index) => {
       const updatedTask = {...tasks[index], completed: !tasks[index].completed};
       updateTask(updatedTask,index);
  }
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <div className='sanju'>
            <span> <h3>{task.task}
              <small>({task.priority}, {task.catogery})</small></h3>
            </span>

         
            <button className='ttt' onClick={() => toggleComplete(index)}>{task.completed ? "Undo" : "Complete"}</button>
            <button className='ttt' onClick={() => deleteTask(index)}>Delete</button>
          </div>

        </li>
      ))}
    </ul>
  )
}
