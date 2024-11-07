import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData,setUserData] = useContext(AuthContext)
  
  return (
    <div className='bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-3 h-30'>

      <div className='bg-gradient-to-br from-indigo-500 via-purple-400 to-pink-400 py-2 px-5 m-0 rounded-xl flex justify-between items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg'>
        <h2 className='text-lg font-semibold text-gray-800 transform transition-all duration-300 hover:translate-y-[-2px]'>Employee Name</h2>
        <h3 className='text-md text-gray-700 transform transition-all duration-300 hover:translate-y-[-2px]'>New Task</h3>
        <h5 className='bg-yellow-300 text-yellow-800 py-1 px-3 rounded-full text-sm font-medium transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md'>Active Task</h5>
        <h5 className='bg-green-300 text-green-800 py-1 px-3 rounded-full text-sm font-medium transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md'>Completed</h5>
        <h5 className='bg-red-300 text-red-800 py-1 px-3 rounded-full text-sm font-medium transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md'>Failed</h5>
      </div>

      <div className=''>
      {userData.map(function(elem,idx){
        return <div key={idx} className='bg-gradient-to-r from-indigo-200 to-purple-200 py-3 px-5 pl-10 m-2 rounded-xl flex justify-between items-center transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-indigo-300 hover:via-purple-300 hover:to-pink-300 hover:shadow-lg'>
          <h2 className='text-lg font-semibold text-gray-800 transition-all duration-300 ease-in-out hover:text-indigo-700'>{elem.firstName}</h2>
          <h3 className='text-lg font-bold text-gray-800 transition-all duration-300 ease-in-out hover:font-bold hover:text-purple-700 ml-10 shadow-md'>{elem.taskCount.newTask}</h3>
          <h5 className='text-lg font-bold text-yellow-700 py-1 px-3 rounded-full text-sm transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:text-yellow-900 shadow-md'>{elem.taskCount.active}</h5>
          <h5 className='text-lg font-bold text-green-700 py-1 px-3 rounded-full text-sm transition-all duration-300 ease-in-out hover:bg-green-400 hover:text-green-900 shadow-md'>{elem.taskCount.completed}</h5>
          <h5 className='text-lg font-bold text-red-700 py-1 px-3 rounded-full text-sm transition-all duration-300 ease-in-out hover:bg-red-400 hover:text-red-900 shadow-md'>{elem.taskCount.failed}</h5>
        </div>
      })}
      </div>
    </div>
  )
}
//overflow-auto h-14
export default AllTask
