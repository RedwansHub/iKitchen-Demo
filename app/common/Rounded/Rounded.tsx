'use client'

import React, { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';
import Magnetic from '../Magnetic/Magnetic'; 

interface Props {
  children: React.ReactNode;
  backgroundColor?: string;
  onClick?: () => void;
  className?: string; // Added className prop
  // You can add more prop types here as needed
}

const Rounded = ({ children, backgroundColor = '#455CE9', className, onClick, ...attributes }: Props) => {
  const circle = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(circle.current, { top: '0%', width: '100%', duration: 0.4, ease: 'power3.in' }, 'enter')
      .to(circle.current, { top: '-150%', width: '100%', duration: 0.25 }, 'exit');
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current?.tweenFromTo('enter', 'exit');
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={`${styles.roundedButton} ${className}`}
        style={{ overflow: 'hidden' }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        onClick={onClick}
        {...attributes}
      >
        {children}
        <div ref={circle} style={{ backgroundColor }} className={styles.circle}></div>
      </div>
    </Magnetic>
  );
}

export default Rounded