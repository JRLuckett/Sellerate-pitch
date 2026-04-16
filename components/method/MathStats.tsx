import styles from './MathStats.module.css';

const STATS = [
  { label: 'TALENT ATTRITION', value: '$500K+', context: 'Fully loaded cost of a single wrong VP Sales hire, including recruitment, 6-month burn, and the massive missed opportunity cost of a stalled segment.' },
  { label: 'LEADERSHIP FAILURE', value: '78%', context: 'Percentage of external VP Sales hires that fail within 18 months during the critical $1M to $10M ARR scale-up phase.' },
  { label: 'RAMP EFFICIENCY', value: '14 MO', context: 'Average time to full productivity for enterprise reps in organizations without a standardized, playbooked sales enablement infrastructure.' },
  { label: 'WASTED OPEX', value: '53%', context: 'Portion of the typical SaaS GTM tech stack that remains underutilized or completely shelf-ware, creating data silos and friction.' },
  { label: 'FUNDING VELOCITY', value: '2.4X', context: 'Valuation premium for companies demonstrating repeatable, unit-economic-positive GTM motions vs. those growing through brute force.' },
  { label: 'EXECUTION GAP', value: '19%', context: "Typical win rate for companies that lack a formal 'Why Change' value methodology, leading to 'No Decision' as the primary competitor." },
];

export default function MathStats() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>THE AUDIT</span>
            <h2 className={styles.title}>The Math Behind the Mistakes</h2>
            <p className={styles.sub}>GTM inefficiency is the silent killer of enterprise value.</p>
          </div>
        </div>

        <div className={styles.grid}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.card}>
              <div className={styles.cardBar} />
              <span className={styles.cardLabel}>{stat.label}</span>
              <div className={styles.cardValue}>{stat.value}</div>
              <p className={styles.cardContext}>{stat.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
