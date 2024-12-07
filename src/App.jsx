import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/work'
import Uni from './components/Uni'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Projects from './components/Projects'
function App() {

  return (
    
      <div>
        <Sidenav />
        <Main />
        <Work />
        <Uni />
        <Certificates />
        <Contact />
        <Projects />
      </div>
    
  
  )
}

export default App
