import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './home'
import CardGen from './components/CardGen'
// Import other components as needed

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/gen" element={<CardGen />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
