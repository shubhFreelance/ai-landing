// app/components/ContentSection/ContentSection.js
'use client'; // Required for hooks and browser APIs

import { useEffect, useRef } from 'react';
import styles from './ContentSection.module.css';

export default function ContentSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const handleScroll = () => {
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const scrollPercentage = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / window.innerHeight));
      
      // Apply transform based on scroll position
      section.style.transform = `translateY(${scrollPercentage * -50}%)`;
      section.style.opacity = scrollPercentage;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <section ref={sectionRef} className={styles.section} style={{
      transform: 'translateY(0%)',
      opacity: 0,
      transition: 'transform 0.5s ease-out, opacity 0.5s ease-out'
    }}>
      <div className={styles.container}>
        <h2 className={styles.heading}>REDEFINING THE STANDARDS OF CREATIVITY.</h2>
        
        <div className={styles.content}>
          <p className={styles.text}>
            At REFORM, we believe in reshaping perspectives. Our team combines expertise in strategy, design, and technology to deliver transformative experiences that challenge the ordinary.
          </p>
          
          <a href="#" className={styles.link}>ABOUT US</a>
        </div>
      </div>

      <div className={styles.divider}></div>
      
      <div className={styles.footer}>
        <p>Made in France</p>
      </div>
    </section>
  );
}