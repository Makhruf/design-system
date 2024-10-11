'use client';

import { useState } from 'react';
import Head from 'next/head';
import styles from './styles/page.module.css';

export default function Home() {
  // State untuk menyimpan status navbar mobile
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Fungsi untuk toggle navigasi
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Logo</div>

        {/* Navbar biasa */}
        <nav className={styles.nav}>
          <ul>
            <li>Navbar</li>
            <li>Navbar</li>
            <li>Navbar</li>
            <li>Navbar</li>
            <li>Navbar</li>
          </ul>
          {/* Hamburger Icon */}
          <button className={styles.hamburger} onClick={toggleNav}>
            &#9776; {/* Icon hamburger (titik tiga) */}
          </button>
        </nav>
      </header>

      {/* Mobile Nav, muncul saat hamburger di klik */}
      <nav className={`${styles.mobileNav} ${isNavOpen ? 'active' : ''}`}>
        <ul>
          <li>Navbar</li>
          <li>Navbar</li>
          <li>Navbar</li>
          <li>Navbar</li>
          <li>Navbar</li>
        </ul>
      </nav>

      <main className={styles.main}>
        <section className={styles.infoSection}>
          <h1>Main konten</h1>
          <button className={styles.ctaButton}>button</button>
        </section>

        <section className={styles.featureSection}>
          <div className={styles.grid}>
            <div className={styles.gridItem}>Fitur 1</div>
            <div className={styles.gridItem}>Fitur 2</div>
            <div className={styles.gridItem}>Fitur 3</div>
            <div className={styles.gridItem}>Fitur 4</div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>footer</p>
      </footer>
    </div>
  );
}
