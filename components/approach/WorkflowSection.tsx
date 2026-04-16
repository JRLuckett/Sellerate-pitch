'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './WorkflowSection.module.css';

const PHASES = [
  {
    num: '01',
    title: 'DIAGNOSE',
    timeline: 'WEEKS 1-4',
    summary: 'We map your entire GTM motion to find what\u2019s broken.',
    items: [
      'Structured interviews with every GTM leader',
      'CRM pipeline & win/loss audit',
      'Scored assessment across 7 disciplines',
    ],
  },
  {
    num: '02',
    title: 'BUILD',
    timeline: 'WEEKS 5-16',
    summary: 'We rebuild the broken components with a fixed scope.',
    items: [
      'Prioritized deliverables & clear Northstar',
      'Process design & tech stack optimization',
      'Playbook creation & enablement content',
    ],
  },
  {
    num: '03',
    title: 'OPERATE',
    timeline: 'MONTH 4+',
    summary: 'We embed until the system runs without us.',
    items: [
      'Forecast reviews & deal coaching',
      'Live call participation & rep development',
      'Full methodology handoff',
    ],
  },
];

export default function WorkflowSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCards, setActiveCards] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const onScroll = () => {
      const rect = grid.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Progress: 0 when grid top hits bottom of viewport, 1 when grid bottom hits top
      const start = rect.top - windowH;
      const end = rect.bottom - windowH * 0.4;
      const range = end - start;
      const progress = Math.min(1, Math.max(0, -start / range));

      // Activate cards at 0%, 33%, 66% progress
      setActiveCards([
        progress >= 0.0,
        progress >= 0.33,
        progress >= 0.66,
      ]);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            DIAGNOSE FIRST. BUILD SECOND. <br />
            STAY UNTIL IT RUNS.
          </h2>
          <p className={styles.sub}>
            We embed into your team for three phases — find the breakdown,
            rebuild the motion, and hand over a system that elevates your GTM to the next series.
          </p>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {PHASES.map((phase, i) => (
            <div
              key={phase.num}
              className={`${styles.card} ${activeCards[i] ? styles.cardActive : ''}`}
            >
              <span className={styles.num}>{phase.num}</span>
              <h3 className={styles.cardTitle}>{phase.title}</h3>
              <span className={styles.timeline}>{phase.timeline}</span>
              <p className={styles.summary}>{phase.summary}</p>
              <ul className={styles.list}>
                {phase.items.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <span className={styles.bullet} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
