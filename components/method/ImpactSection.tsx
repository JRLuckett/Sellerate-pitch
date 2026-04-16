'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ImpactSection.module.css';
import {
  RevenueGrowthIcon,
  FundraiseProbabilityIcon,
  TeamPerformanceIcon,
  ProductAdoptionIcon,
  CompetitiveMoatIcon,
  HealthyScalingIcon,
} from '../icons/S1Icons';

const OUTCOMES = [
  { icon: <RevenueGrowthIcon size={42} />, title: 'Revenue growth', body: 'Pipeline that compounds. Deals that close in half the time because discovery is real and champions know how to sell.' },
  { icon: <FundraiseProbabilityIcon size={42} />, title: 'Fundraise probability', body: "The board sees pipeline coverage, stage conversion rates, and average deal velocity. The story isn't hope — it's math." },
  { icon: <TeamPerformanceIcon size={42} />, title: 'Team performance', body: 'Reps who can run a deal without the founder on Zoom. Managers who coach with data, not intuition.' },
  { icon: <ProductAdoptionIcon size={42} />, title: 'Product adoption', body: 'The right customers buy for the right reasons and stay. Retention goes up because you stopped selling to logos that never renew.' },
  { icon: <CompetitiveMoatIcon size={42} />, title: 'Competitive moat', body: 'When your team can articulate why you, why now, and why not the alternative — competitors become irrelevant.' },
  { icon: <HealthyScalingIcon size={42} />, title: 'Healthy scaling', body: 'Each hire makes the next one easier. Onboarding goes from 9 months to 90 days.' },
];

const PILLARS = [
  { num: '01', title: "We've built this before — inside the companies, not outside them.", body: "Most consultants observe. We've been the CRO sitting across from the board when the forecast missed by 40%." },
  { num: '02', title: 'We see the connected system. Not one organ.', body: "Your ICP defines your value framework. Your value framework shapes discovery. We know the sequence because we've watched what happens when you skip it." },
  { num: '03', title: 'We build to leave.', body: "The measure of whether we did our job is whether you need us next quarter. We install the dashboards, build the processes, and transfer the playbook." },
  { num: '04', title: "We'll tell you what you don't want to hear. In week 2.", body: "If your ICP is wrong, we'll say it. The best clients want the truth early — because the truth is cheaper than finding out in quarter 4." },
];

export default function ImpactSection() {
  const pillarsRef = useRef<HTMLDivElement | null>(null);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = pillarsRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Progress: 0 when section top hits bottom of viewport, 1 when section bottom hits top
      const start = rect.top - windowH;
      const end = rect.bottom - windowH * 0.3;
      const range = end - start;
      if (range <= 0) return;
      const progress = Math.max(0, Math.min(1, -start / range));
      // Activate cards at 15%, 40%, 65%, 90% progress
      const thresholds = [0.15, 0.40, 0.65, 0.90];
      let count = 0;
      for (const t of thresholds) {
        if (progress >= t) count++;
      }
      setActiveCount(count);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>IMPACT PROTOCOL</span>
          <h2 className={styles.title}>What changes when we show up.</h2>
          <p className={styles.sub}>
            We don&rsquo;t deliver a strategy deck and disappear. We embed, build,
            and stay until the system runs without us.
          </p>
        </div>

        {/* 6 Outcomes */}
        <div className={styles.outcomes}>
          {OUTCOMES.map((o) => (
            <div key={o.title} className={styles.outcome}>
              <div className={styles.outcomeIcon}>{o.icon}</div>
              <div>
                <h4 className={styles.outcomeTitle}>{o.title}</h4>
                <p className={styles.outcomeBody}>{o.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 2x2 pillars */}
        <div ref={pillarsRef} className={styles.pillars}>
          {PILLARS.map((p, i) => (
            <div
              key={p.num}
              className={`${styles.pillar} ${i < activeCount ? styles.pillarActive : ''}`}
            >
              <div className={styles.pillarBar} />
              <span className={styles.pillarNum}>{p.num}</span>
              <h4 className={styles.pillarTitle}>{p.title}</h4>
              <p className={styles.pillarBody}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
