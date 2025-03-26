// app/page.js
import Hero from './components/Hero/Hero';
import ContentSection from './components/ContentSection/ContentSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ContentSection />
    </main>
  );
}