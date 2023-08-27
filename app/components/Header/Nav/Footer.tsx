import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { BsTwitter } from 'react-icons/bs'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
        <div className={'flex gap-4'}>
          <div className='cursor-pointer'>
            <svg width="2em" height="2.5em">
              <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop stopColor="#962fbf" offset="0%" />
                <stop stopColor="#d62976" offset="50%" />
                <stop stopColor="#fa7e1e" offset="100%" />
              </linearGradient>
              <AiFillInstagram size={32} style={{ fill : "url(#blue-gradient)"}} /> 
            </svg>
          </div>
        <div className='text-green-500 cursor-pointer'> <IoLogoWhatsapp size={32} /> </div>
        <div className='text-blue-500 cursor-pointer'> <BsTwitter size={32} /> </div>
    </div>
    </div>
  )
}

export default Footer