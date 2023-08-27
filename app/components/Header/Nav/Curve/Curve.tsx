'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss'

type Props = {};

const Curve = (props: Props) => {
  const [initialPath, setInitialPath] = useState('');
  const [targetPath, setTargetPath] = useState('');

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateWindowHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    // Attach an event listener to update the window height when it changes
    window.addEventListener('resize', updateWindowHeight);

    // Initialize the window height
    updateWindowHeight();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWindowHeight);
    };
  }, [windowHeight]);
  
  useEffect(() => {
    const initialPathValue = `M100 0 L100 ${windowHeight} Q-100 ${windowHeight / 2} 100 0`;
    const targetPathValue = `M100 0 L100 ${windowHeight} Q100 ${windowHeight / 2} 100 0`;

    setInitialPath(initialPathValue);
    setTargetPath(targetPathValue);
  }, []);

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div>
      <svg className={styles.svgCurve}>
        <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
      </svg>
    </div>
  );
};

export default Curve;