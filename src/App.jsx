import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Full from './pages/Full'
import Calendar from './pages/Calendar'

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Dashboard />} /> */}
        {/* <Route path='/' element={<Full />} /> */}
        <Route path='/' element={<Calendar />} />
      </Routes>

    </BrowserRouter>
  </>
}

export default App
