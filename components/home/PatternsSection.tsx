import styles from './PatternsSection.module.css';

const PATTERNS = [
  {
    code: 'S1-OP-01',
    title: 'Finding PMF',
    subtitle: '(The Mirage)',
    body: "You have revenue, but can you explain why? Scaling before you know why you're winning is a trap.",
  },
  {
    code: 'S1-OP-02',
    title: 'No Sales',
    subtitle: 'Foundation',
    body: 'No documented process. No qualification rigor. Every rep is running their own playbook.',
  },
  {
    code: 'S1-OP-03',
    title: 'No Revenue',
    subtitle: 'Predictability',
    body: 'Forecasting based on hope rather than math. You miss by 40% and the next raise gets harder.',
  },
  {
    code: 'S1-OP-04',
    title: 'Premature',
    subtitle: 'Hiring',
    body: 'Scaling headcount before the systems exist. Every new hire into a blank slate costs months and six figures.',
  },
];

export default function PatternsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Common Failure Patterns</h2>
          <p className={styles.sub}>
            We&rsquo;ve seen these problems before—because we&rsquo;ve fixed them before.
          </p>
        </div>

        <div className={styles.grid}>
          {PATTERNS.map((p) => (
            <div key={p.code} className={styles.card}>
              <span className={styles.code}>{p.code}</span>
              <h3 className={styles.cardTitle}>
                {p.title} <br />
                <span className={styles.cardAccent}>{p.subtitle}</span>
              </h3>
              <p className={styles.cardBody}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
