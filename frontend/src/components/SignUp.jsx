import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SignUp = () => {

  const [formData, setFormData] = useState({
    username:'',
    email: '',
    password: ''
  })

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    await axios.post('http://localhost:3000/api/sign-up', formData);

    console.log('User created')
} catch (error) {
  console.log(error)
}
}
  return (
    <div className='p-3 max-w-lg mx-auto bg-slate-400 rounded-lg m-11'>
      <h1 className='text-3xl text-center text-white font-semibold my-7'>Sign Up</h1>
      <form 
      className='flex flex-col gap-4 '
      onSubmit={handleSubmit}
      >
        <input 
          type="text" 
          placeholder='username' 
          className='border p-3 rounded-lg' 
          name='username'
          value={formData.username}
          onChange={handleChange}
          />
        <input 
          type="email" 
          placeholder='email' 
          className='border p-3 rounded-lg' 
          name='email'
          value={formData.email}
          onChange={handleChange}
          />
        <input 
          type="password" 
          placeholder='password' 
          className='border p-3 rounded-lg' 
          name='password' 
          value={formData.password}
          onChange={handleChange}
         />
        <button 
          type='submit' 
          className='bg-blue-500 text-white p-3 rounded-lg'>
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUp