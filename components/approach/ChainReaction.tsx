import styles from './ChainReaction.module.css';
import {
  ProductMarketFitIcon,
  SiloedTechStackIcon,
  LackOfPredictabilityIcon,
  PrematureHiringIcon,
} from '../icons/S1Icons';

const RISKS = [
  {
    position: 'topLeft',
    title: 'No Value Story',
    desc: "You can\u2019t articulate why anyone should buy from you in the buyer\u2019s language. Your champion can\u2019t sell it internally. The deal dies in a room you were never invited to.",
    icon: <ProductMarketFitIcon size={24} />,
  },
  {
    position: 'topRight',
    title: 'Tools Without a Process',
    desc: "You bought 5 tools before you had a repeatable process. Now you have 5 dashboards and no answers. You\u2019re measuring noise.",
    icon: <SiloedTechStackIcon size={24} />,
  },
  {
    position: 'bottomLeft',
    title: 'Forecasting by Hope',
    desc: "Your board gets a number. You miss by 40%. The conversation shifts from growth to survival. The next round gets harder.",
    icon: <LackOfPredictabilityIcon size={24} />,
  },
  {
    position: 'bottomRight',
    title: 'Scaling Without a Playbook',
    desc: "You hired a VP Sales and three reps before the playbook existed. Six months later, the founder is still in every deal.",
    icon: <PrematureHiringIcon size={24} />,
  },
];

export default function ChainReaction() {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            YOU BUILT A <span className={styles.accent}>$5M PRODUCT</span>.<br />
            THEN SPENT <span className={styles.accent}>$500K</span> LEARNING HOW TO SELL IT.
          </h2>
          <p className={styles.sub}>
            The failure isn&rsquo;t in the product. It&rsquo;s in the friction
            between growth ambitions and operational reality. We map the friction.
          </p>
        </div>

        {/* Infographic */}
        <div className={styles.infographic}>
          {/* Background diamond silhouette */}
          <div className={styles.bgDiamond} />

          {/* Connecting lines SVG */}
          <svg className={styles.lines} viewBox="0 0 900 900" fill="none" preserveAspectRatio="xMidYMid meet">
            <line x1="349" y1="349" x2="365" y2="365" stroke="rgba(0,0,0,0.7)" strokeWidth="2" />
            <line x1="551" y1="349" x2="535" y2="365" stroke="rgba(0,0,0,0.7)" strokeWidth="2" />
            <line x1="349" y1="551" x2="365" y2="535" stroke="rgba(0,0,0,0.7)" strokeWidth="2" />
            <line x1="551" y1="551" x2="535" y2="535" stroke="rgba(0,0,0,0.7)" strokeWidth="2" />
          </svg>

          {/* 4 corner text cards */}
          {RISKS.map((risk) => (
            <div key={risk.position} className={`${styles.riskText} ${styles[risk.position]}`}>
              <h3 className={styles.riskTitle}>{risk.title}</h3>
              <p className={styles.riskDesc}>{risk.desc}</p>
            </div>
          ))}

          {/* 4 icon diamonds — positioned between text and circle */}
          {RISKS.map((risk) => (
            <div key={`icon-${risk.position}`} className={`${styles.iconWrap} ${styles[`icon_${risk.position}`]}`}>
              <div className={styles.iconDiamond}>
                <div className={styles.iconInner}>{risk.icon}</div>
              </div>
            </div>
          ))}

          {/* Center circle + triangle */}
          <div className={styles.center}>
            <div className={styles.circle} />
            <div className={styles.circleGlow} />
            <svg className={styles.triangle} viewBox="0 0 200 200" fill="none">
              <polygon
                points="100,40 160,150 40,150"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.5"
              />
              <circle cx="100" cy="40" r="4" fill="#fff" />
              <circle cx="40" cy="150" r="4" fill="#fff" />
              <circle cx="160" cy="150" r="4" fill="#fff" />
            </svg>
            <span className={`${styles.triLabel} ${styles.triTop}`}>COST</span>
            <span className={`${styles.triLabel} ${styles.triLeft}`}>TIME</span>
            <span className={`${styles.triLabel} ${styles.triRight}`}>RISK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
