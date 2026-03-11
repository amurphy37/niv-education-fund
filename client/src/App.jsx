import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home"
import Success from "./components/success"
import './index.css'

function App() {

  return (
      <Router> 
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
          </Routes> 
      </Router>
  )
}

export default App
