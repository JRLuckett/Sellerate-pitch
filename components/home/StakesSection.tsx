'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StakesSection.module.css';

const STATS = [
  {
    label: 'SCALE GAP',
    symbol: '>',
    target: 90,
    suffix: '%',
    context: 'of seed-funded companies never make it to Series C.',
  },
  {
    label: 'FAILURE RATE',
    symbol: '>',
    target: 70,
    suffix: '%',
    context: 'of venture-backed startups fail due to premature scaling.',
  },
  {
    label: 'TALENT LOSS',
    symbol: '>',
    target: 35,
    suffix: '%',
    context: 'attrition rate for software sales professionals.',
  },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const steps = 40;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StakesSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>The Brutal Reality of Scaling</h2>
          <div className={styles.accent_bar} />
        </div>

        <div className={styles.grid}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.card}>
              <span className={styles.cardLabel}>{stat.label}</span>
              <span className={styles.cardValue}>
                <span className={styles.cardSymbol}>{stat.symbol}</span>
                <CountUp target={stat.target} suffix={stat.suffix} />
              </span>
              <p className={styles.cardContext}>{stat.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
