'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Footer from './Footer'; 
import Curve from './Curve/Curve';
import { menuSlide, navItems } from '../../../utils';
import MLink from './Link/MLink';
import styles from './style.module.scss';

const Nav = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState<string>(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div onMouseLeave={() => setSelectedIndicator(pathname)} className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <div key={index} className='hover:scale-110 ease-in-out duration-300'>
              <MLink
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            </div>
          ))}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}

export default Nav