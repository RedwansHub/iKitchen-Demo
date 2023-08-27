'use client'

import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '@/app/common/Rounded/Rounded';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from '../../common/Magnetic/Magnetic';
import Form from './Form';

type Props = {}

const Contact = (props: Props) => {
    const container = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-300, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    
    return (
        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <div className={styles.body}>
                {/* <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                            alt={"image"}
                            src={`/images/background.jpg`}
                            layout="fill"
                            objectFit="cover"
                            />
                        </div>
                        <h2>Let's work</h2>
                    </span>
                    <h2>together</h2>
                    <motion.div style={{ x }} className={styles.buttonContainer}>
                        <Rounded  backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{ rotate, scale: 2 }} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div> */}
                <div className={styles.contactInfo}>
                    <div className='grid grid-cols-5 p-2 gap-4 lg:px-24 md:px-8 px-2 w-full h-[500px]'>
                        <div className='px-8 col-span-2 shadow-lg shadow-gray-800 bg-gradient-to-t from-[#025f44]  to-[#00A878] rounded-2xl w-full'>
                            <h2>Get in Touch</h2>
                            <h2>Visit Us</h2>
                            <p>Come say hello at our HQ. location Somewhere.</p>
                            <h2>Chat to Us</h2>
                            <h3>Our Friendly team is here to help.</h3>
                            <Rounded className='w-60' backgroundColor='#00A878'>
                                <p>info@ikitchen.com</p>
                            </Rounded>
                            <h2>Call us</h2>
                            <h3>Sun-Thu from 8am to 5pm</h3>
                            
                            <Rounded className='w-60' backgroundColor='#00A878'>
                                <p>+000 00 000 0000</p>
                            </Rounded>
                        </div>
                        <Form />

                    </div>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Copyright</h3>
                            <p>2023 © All Rights Reserved.</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>socials</h3>
                            <Magnetic>
                                <p>Whatsapp</p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p>Instagram</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Dribbble</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Linkedin</p>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact