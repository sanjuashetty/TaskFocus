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
          <div>
            <span> {task.task}
              <small>({task.priority}, {task.catogery})</small>
            </span>

          </div>


          <div>
            <button onClick={() => toggleComplete(index)}>{task.completed ? "Undo" : "Complete"}</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>

        </li>
      ))}
    </ul>
  )
}
