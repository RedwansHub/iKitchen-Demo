'use client'

import Image from 'next/image';
import styles from './style.module.scss';
import { useRef, useLayoutEffect, useEffect } from 'react';
import gsap, { ScrollTrigger } from 'gsap/all';
import { buttonDown, getTextSlideUpVariants, slideUp, titleVariant } from './animate';
import { motion, useAnimation, useInView } from 'framer-motion';
import Rounded from '@/app/common/Rounded/Rounded';
import { Cinzel, Cinzel_Decorative } from 'next/font/google';


const font = Cinzel_Decorative({ subsets: ['latin'], weight: '700'})

type props = {
  wait: boolean
}

const Landing = ({ wait } : props) => {
  const descRef = useRef<HTMLDivElement | null>(null);
  const parRef = useRef<HTMLDivElement | null>(null);
  const InView = useInView(parRef)
  const InView2 = useInView(descRef)
 
  
  const phrase = "Flibbering through the zonklats, the wobbleflop embarked on a  journey. Its wizzles shimmered in the luminescent gloom, casting a bewildering glow on the dinglehoppers that scattered along the way.";
 

  const firstText = useRef<HTMLParagraphElement | null>(null);
  const secondText = useRef<HTMLParagraphElement | null>(null);
  const slider = useRef<HTMLDivElement | null>(null);
  let xPercent = 0;
  let direction = -1;

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(slider.current, {
  //     scrollTrigger: {
  //       trigger: document.documentElement,
  //       scrub: 0.25,
  //       start: 0,
  //       end: window.innerHeight,
  //       onUpdate: e => (direction = e.direction * -1),
  //     },
  //     x: '-500px',
  //   });
  //   requestAnimationFrame(animate);
  // }, []);

  // const animate = () => {
  //   if (xPercent < -100) {
  //     xPercent = 0;
  //   } else if (xPercent > 0) {
  //     xPercent = -100;
  //   }
  //   gsap.set(firstText.current, { xPercent: xPercent });
  //   gsap.set(secondText.current, { xPercent: xPercent });
  //   requestAnimationFrame(animate);
  //   xPercent += 0.1 * direction;
  // };

  return (
    <motion.main  variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <Image src="/images/background01.jpg" alt="background" width={2000} height={1000} style={{ objectFit: 'cover' }} />

      {/* <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Freelance Developer -</p>
          <p ref={secondText}>Freelance Developer -</p>
        </div>
      </div> */}
      <motion.div ref={descRef}  className={styles.description}>
        <motion.div initial= 'hidden' animate={InView2 ? 'visible' : 'hidden'} variants={titleVariant} transition={{ duration: 1.9, delay: wait ? 2.2 : 0.5}} 
          className={styles.titleContainer}>
          <h2 className={`${styles.title} ${font.className}`}>Take your Health to the next Level</h2>   
        </motion.div>
          <motion.div ref={parRef} className={styles.container}>
            <motion.p 
              className='text-center py-4'>
            {
                  phrase.split(" ").map( (word, index) => {
                    const variants = getTextSlideUpVariants(index, wait);
                      return <span key={index} className={styles.mask}><motion.span variants={variants} animate={InView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                  })
              }
            </motion.p>   
          </motion.div>
          <motion.div initial='hidden' animate={InView ? "visible" : "hidden"} variants={buttonDown} transition={{ duration: 1.5, delay: wait ? 2.8 : 0.9}} className='pt-4'>
            <Rounded className={styles.moreButton}>
              <h2>Get Started</h2>
            </Rounded>
          </motion.div>
      </motion.div>
    </motion.main>
  );
}

export default Landing