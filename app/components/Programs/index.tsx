'use client'

import { useInView, motion } from 'framer-motion'
import Modal from '../Modal'
import Program from './Program'
import styles from './style.module.scss' 
import React, { useRef, useState } from 'react'
import { slideUp } from '../Description/animate'
import { Cinzel_Decorative, Eagle_Lake, Quicksand } from 'next/font/google'
import Title from '@/app/utils/Title'

type Props = {}

export type programsItems = {
    title: string,
    subtitle: string,
    src: string,
    color: string,
}


const programsList: programsItems[] = [
    {
      title: "Exotic Flavors Meals",
      subtitle: 'Regular Program',
      src: "locomotive.png",
      color: "#EFE8D3"
    },
    {
      title: "Nourish Your Well-being ",
      subtitle: 'Patients Program',
      src: "c2montreal.png",
      color: "#000000"
    },
    {
      title: "Balance Body",
      subtitle: 'Fitness Program',
      src: "silencio.png",
      color: "#706D63"
    },
    {
      title: "Vibrant Workplace Nutrition ",
      subtitle: 'Office Employees Program',
      src: "officestudio.png",
      color: "#8C8C8C"
    }
  ]

  const font = Cinzel_Decorative({ subsets: ['latin'], weight: '700'})
  const font2 = Quicksand({ subsets: ['latin'], weight: '700'})
  const font3 = Eagle_Lake({ subsets: ['latin'], weight: '400'})
  
const Programs = (props: Props) => {
    const [modal, setModal] = useState({active: false, index: 0})
    
    const phrase = "Embark on a transformative well-being journey with our meticulously crafted programs, fostering vitality, health, and empowerment.";
    const description = useRef(null);
    const isInView = useInView(description)
    const prgRef = useRef<HTMLDivElement | null>(null);
    const InView = useInView(prgRef)

    const programsV = {
      hidden : {
        scale: 0,
        opacity: 0,
      },
      visible : {
        scale: 1,
        opacity: 1,
      },
    }
  return (
    <main className={'main'}>
         <div className='  programsContainer h-full'>
              <div ref={description} className={styles.description}>
                <div className={`${styles.body}`}>
                <Title text='Our Programs'/>
                  <p className={`${font3.className} space-y-1`}>
                    {
                        phrase.split(" ").map( (word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                    </p>
                </div>
              </div>
            <motion.div ref={prgRef}>
                <div className={'programsbody'}>
                {
                    programsList.map( (project, index) => (
                      <motion.div key={index} initial='hidden' animate={InView ? 'visible' : 'hidden'} variants={programsV} transition={{ duration: 1.8, delay: 0.2*index}}>
                        <Program index={index} title={project.title} subtitle={project.subtitle} setModal={setModal} key={index}/>
                      </motion.div>
                    ))
                }
                </div>
                <Modal modal={modal} programs={programsList}/>
            </motion.div>
        </div>
       
  </main>
  )
}

export default Programs