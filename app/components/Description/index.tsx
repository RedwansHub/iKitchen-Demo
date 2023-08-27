'use client'

import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animate'
import Rounded from '@/app/common/Rounded/Rounded';
import Image from 'next/image';

type Props = {}

const Description = (props: Props) => {
  
    const Phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
    const DescRef = useRef<HTMLDivElement>(null);;
    const isInView = useInView(DescRef)
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
        <div ref={DescRef} className={styles.description}>
            <div className={styles.body}>
                <div className='flex flex-col w-full'>
                    <p>
                    {
                        Phrase.split(" ").map( (word, index) => {
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
                   
                <div className='relative'>
                    <motion.div initial='hidden' animate={isInView ? "visible" : "hidden"} variants={imageVariant}
                        className='border-2 border-black w-full h-full'>
                        <Image src={'/images/officestudio.png'} alt='image' width={900} height={400}/>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Description