'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './MathSection.module.css';

const CARDS = [
  { target: 500, prefix: '$', suffix: 'K+', context: "Cost of a wrong VP Sales hire — salary, severance, pipeline damage, and time lost." },
  { target: 78, prefix: '', suffix: '%', context: "VP Sales fail at $1\u2013$3M ARR. Not because they\u2019re bad \u2014 because there\u2019s no system to inherit." },
  { target: 12, prefix: '', suffix: ' months', context: "Average enterprise rep ramp time. Every failed hire before ramp costs you double." },
  { target: 53, prefix: '', suffix: '%', context: "SaaS licenses go unused in the average tech stack. Tools without process are donations." },
  { target: 28, prefix: '', suffix: ' months', context: "Median gap between Series A and Series B in 2024. Every month without a GTM system compounds the pressure." },
  { target: 19, prefix: '', suffix: '%', context: "Average B2B win rate. The best GTM systems get this to 35\u201345%. That gap is the work." },
];

function CountUp({ target, prefix, suffix }: { target: number; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out: fast start, slow finish
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.round(eased * target);

      setCount(current);

      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span className={styles.stat} ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function MathSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.headline}>The math behind the mistakes</h2>
          <div className={styles.accentBar} />
        </div>

        <div className={styles.gridWrap}>
          <div className={styles.grid}>
            {CARDS.map((card) => (
              <div key={card.suffix + card.target} className={styles.card}>
                <CountUp target={card.target} prefix={card.prefix} suffix={card.suffix} />
                <p className={styles.context}>{card.context}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
