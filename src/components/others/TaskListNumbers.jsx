import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='h-[55%] overflow-x-auto flex items-center justify-start gap-6 flex-nowrap w-full py-6 mt-12 px-4 bg-gray-100'>
      <div className='flex-shrink-0 h-full w-[320px] p-6 bg-blue-400 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl'>
        <h2 className='text-3xl font-bold text-gray-800'>{data.taskCount.newTask}</h2>
        <h3 className='mt-2 text-xl font-semibold text-gray-700'>New Task</h3>
      </div>

      <div className='flex-shrink-0 h-full w-[320px] p-6 bg-yellow-400 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl'>
        <h2 className='text-3xl font-bold text-gray-800'>{data.taskCount.active}</h2>
        <h3 className='mt-2 text-xl font-semibold text-gray-700'>Active Task</h3>
      </div>
      <div className='flex-shrink-0 h-full w-[320px] p-6 bg-green-400 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl'>
        <h2 className='text-3xl font-bold text-gray-800'>{data.taskCount.completed}</h2>
        <h3 className='mt-2 text-xl font-semibold text-gray-700'>Completed Task</h3>
      </div>
      

      <div className='flex-shrink-0 h-full w-[320px] p-6 bg-purple-400 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl'>
        <h2 className='text-3xl font-bold text-gray-800'>{data.taskCount.failed}</h2>
        <h3 className='mt-2 text-xl font-semibold text-gray-700'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
