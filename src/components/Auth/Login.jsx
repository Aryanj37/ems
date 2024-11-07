import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }
 
    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'>
            <div className='bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-12 rounded-3xl shadow-2xl w-96 border border-white border-opacity-30'>
                <h2 className='text-4xl font-bold mb-8 text-center text-white'>Welcome</h2>
                <form onSubmit={submitHandler} className='space-y-6'>
                    <div className='relative'>
                        <input 
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            className='w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border-2 border-white border-opacity-50 focus:border-white focus:bg-opacity-30 focus:outline-none text-white placeholder-white placeholder-opacity-70' 
                            type="email" 
                            placeholder='Email'
                        />
                    </div>
                    <div className='relative'>
                        <input
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            className='w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border-2 border-white border-opacity-50 focus:border-white focus:bg-opacity-30 focus:outline-none text-white placeholder-white placeholder-opacity-70' 
                            type="password" 
                            placeholder='Password'
                        />
                    </div>
                    <button 
                        type="submit"
                        className='w-full py-3 px-4 bg-white text-purple-600 rounded-lg font-bold text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
                    >
                        Sign In
                    </button>
                </form>
                <div className='text-center mt-6'>
                    <a href="#" className='text-sm text-white hover:underline'>Forgot your password?</a>
                </div>
            </div>
        </div>
    )
}

export default Login
