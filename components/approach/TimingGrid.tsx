import styles from './TimingGrid.module.css';
import {
  FundraiseProbabilityIcon,
  RevenueGrowthIcon,
  DealQualificationIcon,
  SiloedTechStackIcon,
  TeamPerformanceIcon,
  LackOfPredictabilityIcon,
} from '../icons/S1Icons';

const ITEMS = [
  { icon: <FundraiseProbabilityIcon size={44} />, title: 'JUST RAISED A ROUND', body: 'The board expects a 3x multiplier but your internal processes are still at Seed stage.' },
  { icon: <RevenueGrowthIcon size={44} />, title: 'REVENUE HAS FLATLINED', body: "What worked to $1M isn't working to $10M. You need a structural pivot, not a harder grind." },
  { icon: <DealQualificationIcon size={44} />, title: 'FOUNDER IN EVERY DEAL', body: "The sales process exists in your head, not a system. It's unscalable and fragile." },
  { icon: <SiloedTechStackIcon size={36} />, title: 'TECH STACK IS A MESS', body: 'Data is scattered across 5 tools. Nobody knows which lead source actually converts.' },
  { icon: <TeamPerformanceIcon size={44} />, title: 'REP CHURN IS HIGH', body: "You're hiring talent and watching them fail because the playbook is non-existent." },
  { icon: <LackOfPredictabilityIcon size={36} />, title: 'BOARD REPORT ANXIETY', body: 'Every QBR is a scramble to explain why the forecast was missed again.' },
];

export default function TimingGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            IF THIS SOUNDS FAMILIAR, <br />
            THE TIMING IS RIGHT.
          </h2>
        </div>

        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{item.icon}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
              <p className={styles.cardBody}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
