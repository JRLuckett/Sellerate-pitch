import styles from './OperatorSection.module.css';

export default function OperatorSection() {
  return (
    <section className={styles.section}>
      <div className={styles.split}>
        {/* Text side */}
        <div className={styles.textSide}>
          <div className={styles.textInner}>
            <span className="section-label">The Operator Advantage</span>

            <h2 className={styles.title}>
              We Are Operators, Not Consultants
            </h2>

            <p className={styles.sub}>
              Three-time CRO. Three IPOs. $300M+ in bookings.
            </p>

            <div className={styles.credential}>
              <div className={styles.credentialBar} />
              <div>
                <div className={styles.credentialTitle}>Technical Execution</div>
                <div className={styles.credentialSub}>Validated Methodology</div>
              </div>
            </div>

            <div className={styles.companies}>
              {['Cloudera', 'Crux Data', 'Privitar', 'NextLabs', 'Kurrent', 'BladeLogic'].map((co) => (
                <span key={co} className={styles.company}>{co}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Image side */}
        <div className={styles.imageSide}>
          <img
            src="/photos/patrick-headshot.jpg"
            alt="Patrick Ball"
            className={styles.photo}
          />
          <div className={styles.nameplate}>
            <div className={styles.nameplateTitle}>Patrick Ball</div>
            <div className={styles.nameplateSub}>Three-time CRO</div>
          </div>
        </div>
      </div>
    </section>
  );
}
