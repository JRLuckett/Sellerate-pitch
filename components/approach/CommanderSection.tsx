import styles from './CommanderSection.module.css';

export default function CommanderSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Text */}
          <div className={styles.textSide}>
            <span className={styles.badge}>FOUNDER &amp; CEO</span>
            <h2 className={styles.name}>PATRICK BALL</h2>
            <blockquote className={styles.quote}>
              &ldquo;Everyone&rsquo;s worried about forecasting and pipeline, but they
              never slow down to set the proper foundation. It&rsquo;s going to catch
              up to you. It always does.&rdquo;
            </blockquote>
            <div className={styles.stats}>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>TRACK RECORD</span>
                <span className={styles.statValue}>$300M+ IN BOOKINGS</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>EXPERIENCE</span>
                <span className={styles.statValue}>26 YEARS · 3x CRO · 3 IPOs</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>SCALE</span>
                <span className={styles.statValue}>SEED → $250M ARR</span>
              </div>
            </div>
            <div className={styles.logos}>
              CLOUDERA · CRUX DATA · PRIVITAR · NEXTLABS · KURRENT · BLADELOGIC
            </div>
          </div>

          {/* Photo */}
          <div className={styles.photoSide}>
            <div className={styles.photoWrap}>
              <img
                src="/photos/patrick-headshot.jpg"
                alt="Patrick Ball"
                className={styles.photo}
              />
              <div className={styles.photoCorner} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
