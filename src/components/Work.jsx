import React from 'react'
import WorkItem from './workitem'

const data=[
    {
        year:  '07/2024-09/2024',
        title: 'IPPIN RAMEN RESTAURANT',
        place: 'Kaiserslautern, Deutschland',
        details:
        'Küchenhilfe bei der Vorbereitung und Zubereitung von Ramen und Vorspeisen'
    },
    {
        year:  '07/2022-09/2022',
        title: 'RANDSTAD AMAZON',
        place: 'Kaiserslautern, Deutschland',
        details:
        'Mitarbeiter in der Lagerlogistik'
    },
    {
        year: '09/2021-03/2022',
        title: 'KL-TRONIK',
        place: 'Kaiserslautern, Deutschland',
        details:
        'aaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
        year: '10/2018-11/2018',
        title: ' PT.SARI MULTI UTAMA',
        place: 'Pasuruan, Indonesien',
        details:
        'aaaaaaaaaaaaaaaaaaaaaaaa'
    }
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-55 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e'>Work</h1>
        {data.map((item, idx)=>(
            <WorkItem   key={idx} 
                        year={item.year} 
                        title={item.title} 
                        place={item.place} 
                        details={item.details} 
            />
        ))}
    </div>
  )
}

export default Work