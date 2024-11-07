import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[320px] p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl'>
        <div className='flex justify-between items-center'> 
            <h3 className='bg-yellow-500 px-4 py-1 rounded-full text-white text-sm font-semibold'>
                {data.category}
            </h3>
            <h4 className='text-sm text-gray-600'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-6 text-2xl font-bold text-gray-800'>{data.taskTitle}</h2>
        <p className='text-sm mt-3 text-gray-600 leading-relaxed'> 
            {data.taskDescription}
        </p>

        <div className='flex justify-center mt-6'>
            <button className='bg-green-500 px-4 py-2 rounded-full text-white text-sm font-semibold'>
                Accept Task
            </button>
        </div>
      </div>
  )
}

export default NewTask