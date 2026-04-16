import styles from './BundlesExpectations.module.css';

const EXPECTATIONS = [
  { need: 'Direct leadership engagement', why: '3–5 hours per week. Reviewing deliverables, making decisions, attending key sessions. The work moves at the speed of your decision-making.' },
  { need: 'Decision cadence', why: 'Decisions within one week. A Value Framework sitting in review for a month while pipeline dries up helps no one.' },
  { need: 'Full data access', why: 'CRM, pipeline, win/loss history, existing collateral, tech stack. Data-informed means we need the data.' },
  { need: 'Team participation', why: 'Key people available for workshops and feedback sessions. We build with the team, not for the team — they need to own it after we leave.' },
  { need: 'Willingness to hear hard things', why: 'We will identify gaps that challenge assumptions. Those gaps need to be exposed, not protected. Bad news early is actionable. Bad news late is expensive.' },
];

export default function BundlesExpectations() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.header}>
            <span className={styles.badge}>Mutual Commitment</span>
            <h2 className={styles.title}>What We Need From You</h2>
            <p className={styles.sub}>
              Every engagement that produces results has one thing in common: leadership that shows up. Not delegation — direct participation. Here is what working well together requires.
            </p>
          </div>

          <div className={styles.items}>
            {EXPECTATIONS.map((e) => (
              <div key={e.need} className={styles.item}>
                <h3 className={styles.itemNeed}>{e.need}</h3>
                <p className={styles.itemWhy}>{e.why}</p>
              </div>
            ))}
          </div>

          <p className={styles.footer}>
            The right client for S-1 views this engagement as an investment in their next raise — not an expense against this quarter. They make decisions quickly, are willing to experiment, and want to be told what is actually true about their GTM motion, not what they hoped to hear.
          </p>
        </div>
      </div>
    </section>
  );
}
