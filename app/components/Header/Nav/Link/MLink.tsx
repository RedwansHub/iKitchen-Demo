'use client'

import React from 'react' 
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { scale, slide } from '../../animate' 

interface IndexProps {
    data: {
      title: string;
      href: string;
      index: number;
    };
    isActive: boolean;
    setSelectedIndicator: (href: string) => void;
  }

const MLink : React.FC<IndexProps> = ({ data, isActive, setSelectedIndicator }) => {

    const { title, href, index } = data;


  return (
    <motion.div
        className={'link'}
        onMouseEnter={() => {
            setSelectedIndicator(href);
        }}
        custom={index}
        variants={slide}
        initial="initial"
        animate="enter"
        exit="exit"
        >
      <motion.div variants={scale} animate={isActive ? 'open' : 'closed'} className={'indicator'}></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  )
}

export default MLink