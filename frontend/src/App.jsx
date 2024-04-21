
import SignUp from './components/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn'
import HomePage from './components/HomePage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/sign-in' element={<SignIn />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
