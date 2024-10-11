import Head from 'next/head';
import styles from './styles/page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
        <nav className={styles.nav}>
          <ul>
            <li>Navbar</li>
            <li>Navbar</li>
            <li>Navbar</li>
            <li>Navbar</li>
            <li>Navbar</li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.infoSection}>
          <h1>Main konten</h1>
          {/* <p>
            Platform yang menghadirkan layanan kesehatan berkualitas. Temukan
            layanan terbaik untuk kesehatan Anda.
          </p> */}
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
