import React from 'react'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
const App = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Experience />
      <Projects />
      <Reviews />
    </div>
  )
}

export default App