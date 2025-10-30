import React from 'react'
import Taskform from './Components/Taskform'
import TaskList from './Components/TaskList'
import Progresstracker from './Components/Progresstracker'

export default function App() {
  return (
    <div>
      <h1>TaskFocus</h1>
      <p>Our friendly Task_Manager</p>

      <Taskform />
      <TaskList />
      <Progresstracker />
      <button>Clear all task</button>
    </div>
  )
}
