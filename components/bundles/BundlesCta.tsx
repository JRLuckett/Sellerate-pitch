import styles from './BundlesCta.module.css';
import Link from 'next/link';

export default function BundlesCta() {
  return (
    <section className={styles.section}>
      <div className={styles.gridLines} />
      <div className={`container ${styles.content}`}>
        <div className={styles.inner}>
          <h2 className={styles.title}>
            Start with<br />
            <span className={styles.accent}>what&rsquo;s true.</span>
          </h2>
          <p className={styles.sub}>
            The Health Check tells you which bundles matter first — and in what order. No pitch deck. No form maze. A scored look at where you actually stand.
          </p>
          <Link href="/healthcheck" className="btn-primary btn-primary--white">
            Request Your Health Check →
          </Link>
        </div>
      </div>
    </section>
  );
}
