'use client'

import React from 'react'
import styles from './styles.module.scss' 

type Props = {}

const Services = (props: Props) => {
  return (
    <div className={styles.serviceContainer}>
        <h2>Services</h2>
        <div className='pt-8 w-full h-full grid grid-cols-2 place-items-center'>
            <div className=' border-8 rounded-lg w-full h-[80%]'>
            </div>
            <div className=' border-8 rounded-lg w-[50%] h-80'>
            </div>

        </div>
    </div>
  )
}

export default Services