import React from 'react'
import CertificateItems from './CertificateItems'
import cmedicalImg from '../assets/images/cmedical.jpg'
import conrampImg from '../assets/images/conramp.jpg'
import csiemensImg from '../assets/images/csiemens.jpg'

const Certificates = () => {
  return (
    <div id='certificates' className='max-w[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Certificates</h1>
        <p className='text-center py-8'>lalal</p>
    <div className='grid sm:grid-cols-2 gap-12'>
        <CertificateItems img={cmedicalImg} title='Medical image Processing'></CertificateItems>
        <CertificateItems img={conrampImg} title='Mathlab Onramp'></CertificateItems>
        <CertificateItems img={csiemensImg} title='Siemens NX Mastery'></CertificateItems>
        


    </div>
    </div>
  
)
}

export default Certificates