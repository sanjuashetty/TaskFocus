import React, { useEffect, useState } from 'react'
import Taskform from './Components/Taskform'
import TaskList from './Components/TaskList'
import Progresstracker from './Components/Progresstracker'
import "./Style.css";

export default function App() {

  const[tasks, settasks] = useState([]);

  useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    settasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
     const newtask = [...tasks];
     newtask[index] = updatedTask;
     settasks(newtask);
  }
  
  const deleteTask = (index) => {
      settasks(tasks.filter((_, i) => i != index));
  }


  return (
    <div>
      <h1>TaskFocus</h1>
      <p>Our friendly Task_Manager</p>

      <Taskform addTask = {addTask}/>
      <TaskList tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks}/>
      <button>Clear all task</button>
    </div>
  )
}
