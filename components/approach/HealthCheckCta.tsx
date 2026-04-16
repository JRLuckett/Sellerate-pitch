import styles from './HealthCheckCta.module.css';
import Link from 'next/link';

export default function HealthCheckCta() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.headline}>
            READY TO UNCOVER THE GAPS?
          </h2>
          <p className={styles.sub}>
            A structured look at your GTM motion — scored, mapped, and board-ready in 4 weeks.
          </p>
          <Link href="/healthcheck" className={styles.cta}>
            START THE HEALTH CHECK
          </Link>
          <div className={styles.pills}>
            <span className={styles.pill}>DIAGNOSTIC ASSESSMENT</span>
            <span className={styles.pill}>GAP ANALYSIS</span>
            <span className={styles.pill}>SCALING ROADMAP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
