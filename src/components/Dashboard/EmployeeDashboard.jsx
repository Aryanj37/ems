import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-7 bg-gray-100 h-screen'>
      <Header data={props.data} changeUser={props.changeUser}/>

      <div className='mt-8'>
        <TaskListNumbers data={props.data}/>
      </div>

      <div className='mt-12'>
        <TaskList data={props.data}/>
      </div>
      
    </div>
  )
}

export default EmployeeDashboard
