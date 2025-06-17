import './App.css'
import Navbar from "./components/Navbar.jsx";
import SignInUp from "./components/SignInUp.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Portfolio from "./components/Portfolio.jsx";

function App() {

  return (
      <>
          <Navbar/>
          <Routes>
              <Route path={'/'} element={<SignInUp/>}/>
              <Route path="/portfolio" element={<Portfolio/>}/>
          </Routes>
      </>
  )
}

export default App
