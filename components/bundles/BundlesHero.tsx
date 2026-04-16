import styles from './BundlesHero.module.css';

export default function BundlesHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid_bg} />
      <div className={styles.gradient} />

      <div className={`container ${styles.content}`}>
        <div className={styles.split}>
          {/* Left 2/3 — text */}
          <div className={styles.textCol}>
            <div className={styles.eyebrow}>
              <span>How We Deliver</span>
            </div>

            <h1 className={styles.headline}>
              Six Bundles.<br />
              <span className={styles.accent}>One Operating System.</span>
            </h1>

            <p className={styles.sub}>
              Every bundle is powered by the same methodology — refined across six companies and 30+ years. Each is a fixed SOW with defined deliverables, a clear timeline, and specific asks from your team.
            </p>
          </div>

          {/* Right 1/3 — orbital */}
          <div className={styles.animCol}>
            <div className={styles.orbital}>
              <div className={`${styles.ring} ${styles.ringOuter}`}>
                <span className={styles.dot} style={{ top: 0, left: '50%', width: 10, height: 10 }} />
                <span className={styles.dot} style={{ bottom: '12%', right: '5%', width: 6, height: 6 }} />
                <span className={styles.dot} style={{ top: '45%', left: 0, width: 8, height: 8 }} />
              </div>
              <div className={`${styles.ring} ${styles.ringMiddle}`}>
                <span className={styles.dot} style={{ top: '50%', right: 0, width: 8, height: 8 }} />
                <span className={styles.dot} style={{ bottom: 0, left: '40%', width: 5, height: 5 }} />
              </div>
              <div className={`${styles.ring} ${styles.ringInner}`}>
                <span className={styles.dot} style={{ bottom: '50%', left: 0, width: 7, height: 7 }} />
              </div>
              <span className={styles.centerDot} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
