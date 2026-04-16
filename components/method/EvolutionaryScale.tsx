'use client';

import { useState } from 'react';
import styles from './EvolutionaryScale.module.css';

const STAGES = [
  {
    num: '01',
    stage: 'Seed',
    arr: '$0–$1M ARR',
    items: ['Founder Led Sales', 'Searching for PMF', 'No repeatability'],
  },
  {
    num: '02',
    stage: 'Series A',
    arr: '$1M–$5M ARR',
    items: ['Move from Founder led 1st team', 'Some repeatability', 'Limited scale'],
  },
  {
    num: '03',
    stage: 'Series B',
    arr: '$5M–$20M ARR',
    items: ['Hire CRO', 'Expand team domestic and international', 'Proven PMF', 'Use cases repeatable'],
  },
  {
    num: '04',
    stage: 'Series C',
    arr: '$20M–$100M ARR',
    items: ['Segmentation', 'New verticals and markets', 'Introduce new products', 'Strong unit economics'],
  },
  {
    num: '05',
    stage: 'Series D',
    arr: '$100M+',
    items: ['Scaled out GTM', 'Prepare for exit', 'Market leader or dominant player in category', 'Optimize metrics and sales efficiency'],
  },
];

export default function EvolutionaryScale() {
  // Track which stages have been revealed (01 starts revealed)
  const [revealed, setRevealed] = useState<Set<string>>(new Set(['01']));

  const handleReveal = (num: string) => {
    if (!revealed.has(num)) {
      setRevealed((prev) => new Set(prev).add(num));
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>Growth Intelligence</span>
            <h2 className={styles.title}>
              These truths don&rsquo;t change.<br />
              Only the context does.
            </h2>
            <p className={styles.sub}>
              The eleven truths and the connected system hold true whether you&rsquo;re founder-led at $500K or scaling past $50M. What changes is the complexity of execution, not the principles underneath it.
            </p>
          </div>
          <div className={styles.progress}>
            {STAGES.map((s) => (
              <div
                key={s.num}
                className={revealed.has(s.num) ? styles.progressActive : styles.progressInactive}
              />
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {STAGES.map((s) => {
            const isRevealed = revealed.has(s.num);
            return (
              <div
                key={s.num}
                className={`${styles.card} ${!isRevealed ? styles.card_dim : ''}`}
                onMouseEnter={() => handleReveal(s.num)}
              >
                <div className={styles.cardHeader}>
                  <span className={`${styles.num} ${isRevealed ? styles.numActive : ''}`}>
                    {s.num}
                  </span>
                  <h3 className={styles.cardStage}>{s.stage}</h3>
                  <span className={styles.cardPhase}>{s.arr}</span>
                </div>

                <ul className={styles.details}>
                  {s.items.map((item) => (
                    <li key={item}>
                      <span className={styles.detailValue}>→ {item}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.bar}>
                  <div className={`${styles.barFill} ${isRevealed ? styles.barActive : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        <p className={styles.engagementNote}>
          S-1 engages across Seed through Series C — wherever the foundation needs building.
        </p>
      </div>
    </section>
  );
}
