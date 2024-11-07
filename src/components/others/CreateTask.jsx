import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [taskAssign, setTaskAssign] = useState('')
  const [taskCategory, setTaskCategory] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    
    const newTask = {
      taskTitle,
      taskDate,
      taskCategory, 
      taskDescription,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    }

    const updatedData = userData.map(elem => {
      if (taskAssign === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskCount: {
            ...elem.taskCount,
            newTask: elem.taskCount.newTask + 1
          }
        }
      }
      return elem
    })

    setUserData(updatedData)

    // Reset form
    setTaskTitle('')
    setTaskDate('')
    setTaskAssign('')
    setTaskCategory('')
    setTaskDescription('')
  }

  return (
    <div className='mt-5 mb-5 flex flex-col gap-8'>
      <form 
        onSubmit={submitHandler}
        className='bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-6 max-w-2xl mx-auto'
      >
        <h2 className='text-3xl font-bold text-indigo-800 mb-6 text-center'>Create New Task</h2>

        <div className='flex flex-wrap -mx-2 mb-4'>
          <div className='w-full md:w-1/2 px-2 mb-4 md:mb-0'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1' htmlFor='task-title'>
              Task Title
            </label>
            <input 
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className='appearance-none block w-full bg-gray-50 text-gray-700 border border-indigo-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 transition duration-200'
              id='task-title'
              type='text'
              placeholder='Make a UI Design'
              required
            />
          </div>
          <div className='w-full md:w-1/2 px-2'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1' htmlFor='task-date'>
              Date
            </label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className='appearance-none block w-full bg-gray-50 text-gray-700 border border-indigo-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 transition duration-200'
              id='task-date'
              type='date'
              required
            />
          </div>
        </div>

        <div className='flex flex-wrap -mx-2 mb-4'>
          <div className='w-full md:w-1/2 px-2 mb-4 md:mb-0'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1' htmlFor='task-assign'>
              Assign to
            </label>
            <input
              value={taskAssign}
              onChange={(e) => setTaskAssign(e.target.value)}
              className='appearance-none block w-full bg-gray-50 text-gray-700 border border-indigo-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 transition duration-200'
              id='task-assign'
              type='text'
              placeholder='Employee Name'
              required
            />
          </div>
          <div className='w-full md:w-1/2 px-2'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1' htmlFor='task-category'>
              Category
            </label>
            <input
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value)}
              className='appearance-none block w-full bg-gray-50 text-gray-700 border border-indigo-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 transition duration-200'
              id='task-category'
              type='text'
              placeholder='design, dev, etc'
              required
            />
          </div>
        </div>

        <div className='mb-4'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1' htmlFor='task-description'>
            Description
          </label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className='appearance-none block w-full bg-gray-50 text-gray-700 border border-indigo-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 transition duration-200'
            id='task-description'
            rows='4'
            placeholder='Enter task description'
            required
          ></textarea>
        </div>

        <div className='flex items-center justify-center'>
          <button 
            className='bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-full transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-lg'
            type='submit'
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
