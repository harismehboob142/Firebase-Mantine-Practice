import { useState } from 'react'
import './App.css'
import AddMovie from './Components/AddMovie'
import AuthDetails from './Components/AuthDetails'
import { Login } from './Components/Login'
import ReadMovies from './Components/ReadMovies'
import RealtimeMovies from './Components/RealtimeMovies'
import { Register } from './Components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CustomButtom /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <AuthDetails /> */}
      <AddMovie />
      <ReadMovies />
      <RealtimeMovies />

    </>
  )
}

export default App
