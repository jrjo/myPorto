import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter,FaFacebookF, FaInstagram,FaLinkedinIn } from 'react-icons/fa'
/* img 28:43 */
const Main = () => {
  return (
    <div id ='main'>  
        <img className='w-full h-screen object-cover object-left scale-x-[1] 'src="src\assets\images\bg1.jpg" 
          alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/25'>
        
<div className='max-w-[700px] m-auto h-64 w-full flex flex-col justify-center lg:items-start items-center'>          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Alvin Jordan</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            I'm 
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                '_an electrical engineering Student',
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                '_passionate about 3D printing',
                2000,
                '_diving into the world of biomedical engineering',/*exploring biomedical engineering.*/
                2000,
                '_eager to expand my tech and healthcare skills',/*eager to learn more in tech and healthcare.*/
                2000
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{ fontSize: '1em', display: '5px' }}
              repeat={Infinity}
              
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaTwitter className='cursor-pointer' size={20}/>
            <FaFacebookF className='cursor-pointer' size={20}/>
            <FaInstagram className='cursor-pointer' size={20}/>
            <FaLinkedinIn className='cursor-pointer' size={20}/>
          </div>
        </div>
        
        </div>
    
    </div>
  )
}

export default Main