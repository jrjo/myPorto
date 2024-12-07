import React from 'react'
import UniItem from './UniItem'

const data=[
  {
      year:  'Since 2021',
      school: 'HOCHSCHULE KAISERSLAUTERN',
      place: 'Kaiserslautern, Deutschland',
      details:
      ' Bachelor Electrical Engineering, Specializations : Automation technology and information technology'
  },
  {
      year:  '08/2019 - 07/2020',
      title: 'Studienkolleg Kaiserslautern',
      place: 'Kaiserslautern, Deutschland',
      details:
      'T-course {German, computer science, mathematics, physics}'
  }
]
const Uni = () => {
  return (
    <div id='uni' className='max-w-[1040px] m-auto md:pl-20 p-55 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e'>Education</h1>
        {data.map((item, idx)=>(
            <UniItem   key={idx} 
                        year={item.year} 
                        title={item.school} 
                        place={item.place} 
                        details={item.details} 
            />
        ))}
    </div>
  )
}

export default Uni