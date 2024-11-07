import React, { useState } from 'react'

const Header = (props) => {

  // const [username,setUsername] = useState('')

  // if(!props.data){
    // setUsername('Admin')
  // }
  // else{
  //   setUsername(data.firstName)
  // }
  // console.log(props.data.firstName);
  

  const LogoutUser = () => {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }

  // Get the name safely with a fallback to 'Admin'
  const displayName = props.data?.firstName || 'Admin'

  return (
    <div className='flex items-center justify-between bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-3xl shadow-xl'>
      <div className='flex flex-col'>
        <h1 className='text-3xl font-bold text-white mb-2'>
          Welcome back,
        </h1>
        <span className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500'>
          {displayName} 👋
        </span>
      </div>
      <button onClick={LogoutUser} className='bg-white text-lg font-semibold text-purple-600 px-6 py-3 rounded-full transition-all duration-300 hover:bg-gray-100 hover:shadow-lg transform hover:scale-105'>
        Log out
      </button>
    </div>
  )
}

export default Header
