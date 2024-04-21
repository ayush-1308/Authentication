import React, { useState } from 'react'
import axios from 'axios'

const SignIn = () => {

  const [formData, setFormData] = useState({
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
    await axios.post('http://localhost:3000/api/sign-in', formData);
    localStorage.setItem('token', res.data);
    console.log('Logged in successfully')
} catch (error) {
  console.log(error)
  alert('Invalid email or password')
}
}

  return (
    <div className='p-3 max-w-lg mx-auto bg-slate-400 rounded-lg m-11'>
    <h1 className='text-3xl text-center text-white font-semibold my-7'>Sign In</h1>
    <form 
    className='flex flex-col gap-4 '
    onSubmit={handleSubmit}
    >
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
        Sign In
      </button>
    </form>
  </div>
  )
}

export default SignIn