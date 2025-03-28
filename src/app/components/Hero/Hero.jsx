// app/components/Hero/Hero.js
'use client'

import styles from './Hero.module.css';

import { useEffect, useRef, useState } from 'react';


const colorCombinations = [
  { text: '#7dce94', bg: '#f9f8fd' }, // Green text on light bg
  { text: '#000000', bg: '#cc2929' },  // Red text on black bg
  { text: '#213970', bg: '#210070' },  // Blue text on white bg
  { text: '#ffa781', bg: '#fb0e2d' }   // White text on purple bg
];

export default function Hero() {

  
    const sectionRef = useRef(null);
    const [colors, setColors] = useState(colorCombinations[0]);

     useEffect(() => {
        const section = sectionRef.current;
        const randomIndex = Math.floor(Math.random() * colorCombinations.length);
        setColors(colorCombinations[randomIndex]);
    
        const handleScroll = () => {
          if (!section) return;
          
          const rect = section.getBoundingClientRect();
          const scrollPercentage = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / window.innerHeight));
          
          // Apply transform based on scroll position
          section.style.transform = `translateY(${scrollPercentage * -50}%)`;
        //   section.style.opacity = scrollPercentage;
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


  return (
    <section className={styles.hero} style={{ position: 'relative', zIndex: 1,
      color: colors.text,
      backgroundColor: colors.bg
     }}>
      <div className={styles.content}>
        <p className={styles.description}>
          Reform is a branding studio that specializes in elevating brands through the power of storytelling.
        </p>
        
        <nav className={styles.navigation}>
          <a href="#" className={styles.navLink}>PROJECTS</a>
          <a href="#" className={styles.navLink}>STUDIO</a>
          <a href="#" className={styles.navLink}>CONTACT</a>
        </nav>
      </div>

      <div className={styles.branding}>
        <div className={styles.logo}>
        <h1 className={styles.title} ref={sectionRef}>WEBMANIAC</h1>
        </div>
        <div className={styles.meta}>
          <p>CIRCA 2021</p>
          <p>BASED IN PROJECTS</p>
        </div>
      </div>
    </section>
  );
}