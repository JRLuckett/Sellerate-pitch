import styles from './CtaSection.module.css';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.layout}`}>
        {/* Left column — headline + metrics */}
        <div className={styles.left}>
          <h2 className={styles.headline}>
            Start with a Health Check.
          </h2>

          <div className={styles.metricsRow}>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Investment</span>
              <span className={styles.metricValue}>$25K</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Duration</span>
              <span className={styles.metricValue}>4 Weeks</span>
            </div>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Status</span>
            <span className={styles.metricValue}>Board Ready</span>
          </div>
        </div>

        {/* Right column — shield, copy, CTA */}
        <div className={styles.right}>
          <img
            src="/microscope-silhouette.png"
            alt=""
            className={styles.microscope}
          />

          <div className={styles.copyArea}>
            <div className={styles.copyBlock}>
              <p className={styles.copy}>
                The Health Check is a surgical deep-dive into your GTM machinery. No fluff. Just a roadmap for scalable growth.
              </p>
            </div>

            <Link href="/healthcheck" className="btn-primary btn-primary--accent">
              Start the Diagnostic
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
