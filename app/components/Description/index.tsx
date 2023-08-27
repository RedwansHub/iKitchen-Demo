'use client'

import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animate'
import Rounded from '@/app/common/Rounded/Rounded';
import Image from 'next/image';

export default function index() {

    const phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
    const description = useRef<HTMLDivElement>(null);;
    const descImage = useRef<HTMLDivElement>(null);;
    const isInView = useInView(description)
    const isInView2 = useInView(descImage)
    const imageVariant = {
        hidden: {
            y: -50,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition : {
                duration: 1.3 ,
                ease:'easeInOut', delay:.3
            }
        }
    }
    const buttonVariant = {
        hidden: {
            x: -50,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition : {
                duration: 1.1 ,
                ease:'easeInOut', delay:.2
            }
        }
    }

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <div className='flex flex-col w-full'>
                    <p>
                    {
                        phrase.split(" ").map( (word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                    </p>
                    <motion.div variants={buttonVariant} animate={isInView ? 'visible' : 'hidden'} initial='hidden'
                        className='w-48 pt-12'>
                        <Rounded className={styles.moreButton} backgroundColor='#00A878'>
                            <p>About Us</p>
                        </Rounded>
                    </motion.div>
                </div>
               {/* <div className='w-full '>
                   
               </div> */}
                   
                <div className='relative'>
                    {/* <div data-scroll data-scroll-speed={0.1}>
                        <Rounded className={styles.button}>
                            <p>About Us</p>
                        </Rounded>
                    </div> */}
                    <motion.div initial='hidden' animate={isInView ? "visible" : "hidden"} variants={imageVariant}
                        className='border-2 border-black w-full h-full'>
                        <Image src={'/images/officestudio.png'} alt='image' width={900} height={400}/>
                    </motion.div>
                    {/* <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</motion.p> */}

                </div>
            </div>
        </div>
    )
}