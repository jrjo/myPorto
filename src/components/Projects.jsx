import React from 'react'
import ProjectsItem from './ProjectsItem'
import { TypeAnimation } from 'react-type-animation'

const Projects = () => {
  return (
    <div id='projects' className='max-w[1040px] m-auto md:pl-20 p-4 py-16'>
        <h4 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h4>
        <h5 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'In Progress',
                2000, // 
                'Under Construction',
                2000,
                'Warte',
                2000,
                'In Bearbeitung',
                2000
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{ fontSize: '1em', display: '5px' }}
              repeat={Infinity}
              
            />
          </h5>
    <div className='grid sm:grid-cols-2 gap-12'>
        
        


    </div>
    </div>
  )
}

export default Projects