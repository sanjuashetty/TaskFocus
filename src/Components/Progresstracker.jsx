import React from 'react'

export default function Progresstracker({tasks}) {
   const completedTasks = tasks.filter((t)=> t.completed).length;
   const totaltasks = tasks.length;
   const percentage = totaltasks == 0 ? 0: (completedTasks/totaltasks) * 100;

  return (
    <div className='progress-tracker'>
      
      <h4>
      <p>
        {completedTasks} of {totaltasks} tasks completed
      </p></h4>

      <div className='progress-bar'>

        <div
        className='progress'
        style={{width: `${percentage}%`}}>

        </div>

      </div>
    
     
    </div>
  )
}
