'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import Nav from './Nav/Nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '@/app/common/Rounded/Rounded'; 
import Magnetic from '../../common/Magnetic/Magnetic';
import { Cinzel_Decorative } from 'next/font/google';
import { head } from './animate';


const font = Cinzel_Decorative({ subsets: ['latin'], weight: '700'})

const Header = () => {
  const header = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const pathname = usePathname();
  const button = useRef<HTMLDivElement | null>(null);

  const headView = useInView(header);
  

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, { scale: 1, duration: 0.25, ease: 'power1.out' });
        },
        onEnterBack: () => {
          gsap.to(button.current, { scale: 0, duration: 0.25, ease: 'power1.out' });
          setIsActive(false);
        },
      },
    });
  }, []);


  return (
    <>
      <motion.div ref={header} className={styles.header}>
        <motion.div initial='hidden' animate={headView ? 'visible' : 'hidden'} variants={head} transition={{ duration: 1, delay: 0.5}} 
          className={styles.headerContainer}>
          <div className={styles.logo}>
              <h2 className={`${font.className} cursor-pointer text-3xl hover:scale-105 duration-200 ease-in-out tracking-wide`}>
                  <span className='text-green-500'>i</span>
                  Kitchen
              </h2>
          </div>
          <div className={styles.nav}>
            <Magnetic>
              <div className={styles.el}>
                <a>Programs</a>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
            <Magnetic>
              <div className={styles.el}>
                <a>About</a>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
            <Magnetic>
              <div className={styles.el}>
                <a>Contact</a>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
          </div>
        </motion.div>
      </motion.div>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded backgroundColor='#00A878' onClick={() => setIsActive(!isActive)} className={`${styles.button}`}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
        </Rounded>
      </div>
      <AnimatePresence mode='wait'>
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  );
}

export default Header
