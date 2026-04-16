'use client';

import Link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <header className={styles.header} style={{ position: 'fixed', top: 0, width: '100%', pointerEvents: 'none', background: 'transparent', zIndex: 100 }}>
      <nav className={styles.nav} style={{ padding: '24px' }}>
        <Link href="/" className={styles.logo} style={{ pointerEvents: 'auto' }}>
          <div className={styles.logoImg} aria-label="S-1 Ventures" />
        </Link>
      </nav>
    </header>
  );
}
