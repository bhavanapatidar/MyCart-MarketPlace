import React from 'react'
// ...existing code...
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Navbar/Home/HomePage';
// ...existing code...import './App.css';
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <main>
        <HomePage/>
      </main>
    </div>
  )
}

export default App