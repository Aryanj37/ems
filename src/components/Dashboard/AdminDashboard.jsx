import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'



const AdminDashboard = (props) => {
  return (
    <div className=' w-full bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-7 pb-1 flex  flex-col gap-2 '>

      <Header changeUser={props.changeUser} />
      {/* <Header data={props.data} changeUser={props.changeUser}/> */}
      
      <CreateTask/>

      <div >
        <AllTask/>
      </div>
     
    </div>
  )
}

export default AdminDashboard
