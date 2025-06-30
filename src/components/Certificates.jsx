import React from 'react'
import CertificateItems from './CertificateItems'
import cmedicalImg from '../assets/images/cmedical.jpg'
import conrampImg from '../assets/images/conramp.jpg'
import csiemensImg from '../assets/images/csiemens.jpg'
import cblockchainImg from '../assets/images/cblockchain.jpg'
import smartcontractImg from '../assets/images/smartc.jpg'
import dappImg from '../assets/images/dapp.jpg'

const Certificates = () => {
  return (
    <div id='certificates' className='max-w[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-8'>Certificates</h1>

    <div className='grid sm:grid-cols-2 gap-12'>
        <CertificateItems img={cmedicalImg} title='Medical image Processing' link='https://coursera.org/share/2b26b30fec4dd765ed6d662df858d5de' ></CertificateItems>
        <CertificateItems img={conrampImg} title='Mathlab Onramp' link='https://matlabacademy.mathworks.com/progress/share/certificate.html?id=17eb811f-6d8f-4086-a5b4-77e337afe48c&'></CertificateItems>
        <CertificateItems img={csiemensImg} title='Siemens NX Mastery' link='https://coursera.org/share/811c047a080604ab2f98928336a5db8a'></CertificateItems>
        <CertificateItems img={cblockchainImg} title='Blockchain Basics' link='https://coursera.org/share/c0389850aa19e1c72c21f81cb9b3bc39'></CertificateItems>
        <CertificateItems img={smartcontractImg} title='Smart Contract' link='https://coursera.org/share/23b07143e473bc6cfc3c84b01189fcc7'></CertificateItems>
        <CertificateItems img={dappImg} title='Decentralized Applications' link='https://coursera.org/share/1facf704de96efeffba26560c18779c1'></CertificateItems>
        


    </div>
    </div>
  
)
}

export default Certificates