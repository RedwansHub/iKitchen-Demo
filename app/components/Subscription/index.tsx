'use client'

import {sideData} from '@/app/utils'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FaCircleDot, FaRegCircle } from 'react-icons/fa6'
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'
import styles from './style.module.scss'


type Props = {}

const Subscription = (props: Props) => {
    const container = useRef(null);
    const subRef = useRef(null);
    const sideRef = useRef(null);
    const subView = useInView(subRef)
    const sideView = useInView(sideRef)
    const subControls = useAnimation()
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
    const subs = [
        { id: 1, name: 'Daily'},
        { id: 2, name: 'Weekly'},
        { id: 3, name: 'Yearly'},
    ]
    const [selectedSubs, setSelectedSubs] = useState(1)
    const handleClick = (id: number) => {
        setSelectedSubs(id)
    }
    
    const subVariants = {
        hidden:{opacity: 0, y:55},
        visible :{ opacity: 1, y:0}
    }
    const optionsVariants = {
        hidden:{x:-50 ,opacity:0 },
        visible :{ x: 0, opacity: 1}
    }

    useEffect( () => {
        if(subView){
            subControls.start('visible')
        } else {
            subControls.start('hidden')
        }
    }, [subView, subControls])
  return (
    <motion.div ref={container}  className={styles.subscription}>
        <div className='w-full z-20 h-full p-20 px-28'>
            <h2 className='text-2xl font-semibold pb-2'>Subscription Plan</h2>
                <div className='  w-full h-full  grid grid-cols-4 gap-2 '>
                    <div className=' p-2 h-full flex flex-col gap-1'>
                        <motion.p initial='hidden' animate={subControls} variants={{ hidden : {opacity: 0, x:20}, visible: {opacity: 1, x:0}}} transition={{ duration: 1}}
                            className='font-medium text-lg'>
                                Choose a Plan
                        </motion.p>
                        <motion.div ref={sideRef} className=' rounded-xl p-2 h-full w-full flex flex-col gap-2 '>
                            <motion.div initial='hidden' animate={sideView ? 'visible' : 'hidden'} variants={optionsVariants} transition={{ duration: 1.5, delay: 0.2}}
                                className='grid gap-2'>
                                {subs.map( sub => (
                                    <div key={sub.id} onClick={() => handleClick(sub.id)} className={`  flex gap-4 items-center w-[70%] rounded-md p-2 cursor-pointer hover:bg-white/40 duration-300 ease-in-out ${sub.id == selectedSubs ? 'bg-white/20' : ''}`}>
                                        {sub.id === selectedSubs ? <FaCircleDot /> : <FaRegCircle />}
                                        <h2 className={` `}>
                                            {sub.name}
                                        </h2>
                                    </div>
                                ))}
                            </motion.div>
                            <motion.div initial='hidden' animate={sideView ? 'visible' : 'hidden'} variants={{ hidden: {opacity: 0, scale: 0}, visible: {opacity: 1, scale: 1}}} transition={{ duration: 1.8, delay: 0.5}}>
                                <Image src={'/salad.svg'} alt='' width={500} height={500}/>
                            </motion.div>
                        </motion.div>
                    </div>
                    <motion.div ref={subRef}  className='grid col-span-3 grid-cols-3 p-4'>
                        {sideData.filter(s => s.id === selectedSubs)
                            .map( side => (
                            <motion.div key={side.id}
                                className='grid col-span-3 grid-cols-3 gap-4'>
                                {side.data.map( (item, index) => (
                                    <motion.div key={index} initial='hidden' animate={subControls} custom={index} variants={subVariants} transition={{ duration: 1, delay: 0.4 * index  }}>
                                        <div className={`border-2  shadow-xl rounded-lg p-2 flex flex-col ${item.name === 'Gold' ? 'bg-[#0B3E2F] text-white' : ''}`}>
                                            <div className=' p-4 font-semibold text-2xl '>
                                                <h2>{item.name}</h2>
                                            </div>
                                            <div className='w-full h-full  flex flex-col  p-4   gap-8 rounded-md'>
                                                <p className='font-medium text-sm'>{item.desc}</p>
                                                <div>
                                                    {item.features.map( feat => (
                                                        <div key={feat.text} className='flex items-center gap-2'>
                                                            {feat.icon}
                                                            <h2>{feat.text}</h2>
                                                        </div>
                                                    ))}
                                                </div>
                                                <h2 className='font-semibold text-3xl'>{item.price}</h2>
                                            </div>
                                            <div className='flex justify-center w-full p-2'>
                                                <div className={`border rounded-md w-[70%] text-center   cursor-pointer duration-300 ease-in-out py-3  hover:bg-black/40 hover:text-white `}>
                                                        <h2 className='font-medium  '>Select {item.name}</h2>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </motion.div>
                                ))} 
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
        </div>
        <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
        </motion.div>
    </motion.div>
  )
}

export default Subscription