import React from 'react'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Experience from './components/Experience'
import Reviews from './components/Reviews'
const App = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Experience />
      <Reviews />
    </div>
  )
}

export default App