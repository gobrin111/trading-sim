import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import SignInUp from "./components/SignInUp.jsx";

function App() {

  return (
      <>
          <Navbar/>
          <SignInUp/>
      </>
  )
}

export default App
