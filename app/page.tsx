'use client';

import styles from './page.module.scss';
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import SlidingImages from './components/SlidingImages';
import Contact from './components/Contact';
import Description from './components/Description';
import Landing from './components/Landing';
import Services from './components/Services';
import Programs from './components/Programs';
import Subscription from './components/Subscription';
import SampleSubs from './components/Subscription';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
   <main className={`${styles.main} overflow-hidden`}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing wait={isLoading}/>
      <Description />
      <Programs />
      <Subscription /> 
      <Contact />  
   </main>
  )
}
