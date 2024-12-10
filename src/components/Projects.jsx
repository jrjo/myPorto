import React from 'react'
import ProjectsItem from './ProjectsItem'
import { TypeAnimation } from 'react-type-animation'
import dpImg from '../assets/images/dp.jpg'
import guiImg from '../assets/images/gui.jpg'
import solderingImg from '../assets/images/soldering.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        
        
        <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800 mb-8'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'still In Progress',
                2000, // 
                'still Under Construction',
                2000,
                'bitte Warte',
                2000,
                'noch In Bearbeitung',
                2000
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{ fontSize: '1em', display: '5px' }}
              repeat={Infinity}
              
            />
          </h2>
          <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-8'>Projects</h1>
      <div className='grid sm:grid-cols-2 gap-12'>
          <ProjectsItem img={dpImg} title='3D Printings'></ProjectsItem>
          <ProjectsItem img={guiImg} title='GUI in Tkinter vs PyQt5'></ProjectsItem>
          <ProjectsItem img={solderingImg} title='personal projects'></ProjectsItem>
      
        


    </div>
    </div>
  )
}

export default Projects