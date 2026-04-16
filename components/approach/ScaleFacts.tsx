import styles from './ScaleFacts.module.css';

const FACTS = [
  { value: '>10%', text: 'OF SEED STARTUPS EVER REACH SERIES B FUNDING DUE TO POOR SALES OPS.' },
  { value: '>70%', text: 'OF CRM DATA IN SERIES A STARTUPS IS COMPLETELY UNRELIABLE FOR FORECASTING.' },
  { value: '>35%', text: 'LOWER CAC FOR COMPANIES WITH ALIGNED GTM AND PRODUCT TEAMS.' },
];

export default function ScaleFacts() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {FACTS.map((fact, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.value}>{fact.value}</div>
              <p className={styles.text}>{fact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
