import styles from './BundlesOperator.module.css';

export default function BundlesOperator() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.header}>
            <span className={styles.badge}>WHO DOES THE WORK</span>
            <h2 className={styles.title}>Two Operators. Every Engagement.</h2>
            <p className={styles.sub}>
              The combination of CRO-level experience and zero-to-one operational capability, working together on every engagement, is genuinely rare. S-1 can assess your current state through the lens of what it needs to look like at $50M ARR, while building the components you need right now.
            </p>
          </div>

          <div className={styles.operators}>
            <div className={styles.operator}>
              <div className={styles.operatorPhoto}>
                <img
                  src="/photos/patrick-headshot.jpg"
                  alt="Patrick Ball"
                  className={styles.photo}
                />
              </div>
              <div className={styles.operatorInfo}>
                <h3 className={styles.operatorName}>Patrick Ball</h3>
                <span className={styles.operatorRole}>Managing Partner</span>
                <p className={styles.operatorBg}>Two-time CRO. Three IPOs. Led Western Region at Cloudera from $10M to $250M ARR with 100% YoY growth. Global GTM at Privitar. 80%+ sales growth at NextLabs.</p>
                <p className={styles.operatorValue}>CRO-level strategic altitude on every engagement.</p>
              </div>
            </div>

            <div className={styles.operator}>
              <div className={styles.operatorPhoto}>
                <div className={styles.photoPlaceholder}>JL</div>
              </div>
              <div className={styles.operatorInfo}>
                <h3 className={styles.operatorName}>Jonny Luckett</h3>
                <span className={styles.operatorRole}>Operating Partner</span>
                <p className={styles.operatorBg}>Built GTM from zero. ICP, value framework, messaging, pipeline, process, pricing, analytics, and enablement — from pre-revenue through scale.</p>
                <p className={styles.operatorValue}>Operational depth on every component we build.</p>
              </div>
            </div>
          </div>

          <div className={styles.quote}>
            <p>&ldquo;Strategy grounded in operational reality. Operations directed by a clear strategic view. Together: 30+ years. Six companies. $0 to $250M ARR. The same operating system — refined across every engagement.&rdquo;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
