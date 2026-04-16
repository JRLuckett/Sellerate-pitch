'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CostStats.module.css';

const STATS = [
  {
    target: 500,
    prefix: '$',
    suffix: 'K+',
    label: 'OPEX DRAIN',
    context: 'Cost of a wrong VP Sales hire — salary, severance, pipeline damage, and time lost.',
    border: 'error',
  },
  {
    target: 78,
    prefix: '',
    suffix: '%',
    label: 'FAILURE RATE',
    context: 'VP Sales fail at $1–$3M ARR. Not because they\u2019re bad — because there\u2019s no system to inherit.',
    border: 'accent',
  },
  {
    target: 12,
    prefix: '',
    suffix: ' MONTHS',
    label: 'RAMP LATENCY',
    context: 'Average enterprise rep ramp time. Every failed hire before ramp costs you double.',
    border: 'muted',
  },
];

function useCountUp(target: number, duration = 2000) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { value, ref };
}

export default function CostStats() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {STATS.map((stat) => (
            <CountCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CountCard({ stat }: { stat: (typeof STATS)[number] }) {
  const { value, ref } = useCountUp(stat.target, 2000);

  return (
    <div ref={ref} className={`${styles.card} ${styles[`border_${stat.border}`]}`}>
      <div className={styles.value}>
        {stat.prefix}{value}{stat.suffix}
      </div>
      <div className={styles.label}>{stat.label}</div>
      <p className={styles.context}>{stat.context}</p>
    </div>
  );
}
