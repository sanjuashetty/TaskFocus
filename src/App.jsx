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

  const crearTask = () => {
    settasks([]);
  }


  return (

    <div className='body'>

      <div className='body1'>
      <h1 className='j'>TaskFocus</h1>
      <h3>Our friendly Task_Manager</h3>

      <Taskform addTask = {addTask}/>
      <TaskList tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks}/>
      <button className='min' onClick={crearTask}>Clear all task</button>
    </div>
      
    </div>
    
  )
}
