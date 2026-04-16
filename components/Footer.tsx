import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top row: brand */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <img
              src="/logos/logo-1-white.svg"
              alt="S-1 Ventures"
              className={styles.logoImg}
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} S-1 Ventures. All rights reserved.
          </span>
          <Link href="mailto:hello@s-1.com" className={styles.email}>
            hello@s-1.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
