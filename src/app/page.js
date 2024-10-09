import styles from "./styles/page.module.css"; 
import './globals.css'; 

export default function Home() {
  return (
    <div className="container"> 
    <div className={styles.navbar}>
      <div className={styles.navBar}>Navbar 1</div>
      <div className={styles.navBar}>Navbar 2</div>
      <div className={styles.navBar}>Navbar 3</div>

    </div>
    <div className={styles.sidebar}> 
      <button className={styles.sidebarPage}>Login</button> 

    </div>

      <div className="mainContent"> 
      <div className={styles.KontenUtama}>KontenUtama</div>
      </div>
    </div>
  );
}
