import { useState } from 'react'
import Sidenav from './Sidenav'
import Main from './Main'
import Work from './work'
import Uni from './Uni'
import Certificates from './Certificates'
import Contact from './Contact'
import Projects from './Projects'
function Homepage() {

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

export default Homepage
