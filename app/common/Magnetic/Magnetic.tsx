import React, { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  children: ReactNode;
}

const Magnetic: React.FC<MagneticProps> = ({ children }) => {
  const magnetic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMagnetic = magnetic.current;
    if (currentMagnetic) {
      const xTo = gsap.quickTo(currentMagnetic, 'x', { duration: 1, ease: 'elastic.out(1, 0.8)' });
      const yTo = gsap.quickTo(currentMagnetic, 'y', { duration: 1, ease: 'elastic.out(1, 0.8)' });

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = currentMagnetic!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.35);
        yTo(y * 0.35);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      currentMagnetic.addEventListener('mousemove', handleMouseMove);
      currentMagnetic.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        currentMagnetic?.removeEventListener('mousemove', handleMouseMove);
        currentMagnetic?.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return <div ref={magnetic}>{children}</div>;
};

export default Magnetic;
