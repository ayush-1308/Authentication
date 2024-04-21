import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='text-white bg-slate-500 ml-10 mr-10 p-5 rounded-lg '>
        <ul className='items-center flex gap-10'>
          <li onClick={() => navigate("/sign-up")}>Sign Up</li>
          <li onClick={() => navigate("/sign-in")}>Sign In</li>
        </ul>
      </div>
    </>
  )
}

export default HomePage