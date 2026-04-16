'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ConnectedSystem.module.css';
import {
  TalentIcon,
  GtmPlanningIcon,
  SalesExecutionIcon,
  TechStackIcon,
  DemandGenerationIcon,
  ValueSuccessIcon,
  PartnersIcon,
} from '../icons/S1Icons';

const NODES = [
  {
    title: 'Talent',
    icon: <TalentIcon size={48} />,
    pos: 'topLeft',
    items: ['Assess Sales Team/Org', 'Recruiting/Profile/Process', 'Onboarding and Enablement', 'Scorecard/Performance', 'Organizational Structure'],
  },
  {
    title: 'GTM / Planning',
    icon: <GtmPlanningIcon size={48} />,
    pos: 'topRight',
    items: ['ICP & Buyer Persona', 'Capacity Planning & Hiring', 'Productivity Modeling', 'Focus Accounts & Territories', 'Segmentation', 'Land and Expand Motion'],
  },
  {
    title: 'Partners',
    icon: <PartnersIcon size={48} />,
    pos: 'midLeft',
    items: ['Channel', 'OEM', 'Strategic Market (tech)', 'Boutique and Global SI', 'GTM Business Plan'],
  },
  {
    title: 'Sales Execution',
    icon: <SalesExecutionIcon size={48} />,
    pos: 'midRight',
    items: ['Sales Process', 'MEDDPICC', 'Forecasting', 'Pipeline Health', 'Sales Playbook', 'Operating Rhythm'],
  },
  {
    title: 'Value / Success',
    icon: <ValueSuccessIcon size={48} />,
    pos: 'bottomLeft',
    items: ['Value Framework', 'Business Case', 'Comprehensive Success Program', 'Relationship Health', 'Renewal and Expansion'],
  },
  {
    title: 'Tech Stack',
    icon: <TechStackIcon size={48} />,
    pos: 'bottomRight',
    items: ['Conversational Analytics', 'Marketing Automation', 'Product Analytics', 'Sales Engagement'],
  },
  {
    title: 'Demand Generation',
    icon: <DemandGenerationIcon size={48} />,
    pos: 'bottom',
    items: ['Top of Funnel Analysis', 'Outbound Pipeline Generation', 'Digital Demand Generation', 'Field Marketing', 'Account Based Marketing'],
  },
];

export default function ConnectedSystem() {
  const diagramRef = useRef<HTMLDivElement>(null);
  const [circleProgress, setCircleProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = diagramRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = rect.top - windowH * 0.5;
      const end = rect.top - windowH * 0.05;
      const range = end - start;
      if (range <= 0) return;
      const raw = Math.max(0, Math.min(1, -start / range));
      setCircleProgress(raw);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const r = 528;
  const cx = 500;
  const cy = 500;
  const rightHalf = `M ${cx},${cy - r} A ${r},${r} 0 0,1 ${cx},${cy + r}`;
  const leftHalf = `M ${cx},${cy - r} A ${r},${r} 0 0,0 ${cx},${cy + r}`;
  const halfCircumference = Math.PI * r;

  return (
    <section id="system" className={styles.section}>
      <div className={styles.gridBg} />
      <div className={`container ${styles.content}`}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span>S-1 OPERATING SCHEMATIC</span>
          </div>
          <h2 className={styles.title}>The Connected System</h2>
          <p className={styles.sub}>Cross-Functional GTM Alignment Model</p>
        </div>

        <div ref={diagramRef} className={styles.diagram}>
          {/* Drawn circle — concentric with core */}
          <svg className={styles.drawnCircle} viewBox="0 0 1000 1000" fill="none" preserveAspectRatio="xMidYMid meet">
            <path
              d={rightHalf}
              stroke="var(--accent)"
              strokeWidth="2"
              strokeDasharray={halfCircumference}
              strokeDashoffset={halfCircumference * (1 - circleProgress)}
              strokeLinecap="round"
              fill="none"
              opacity={circleProgress > 0 ? 0.6 : 0}
            />
            <path
              d={leftHalf}
              stroke="var(--accent)"
              strokeWidth="2"
              strokeDasharray={halfCircumference}
              strokeDashoffset={halfCircumference * (1 - circleProgress)}
              strokeLinecap="round"
              fill="none"
              opacity={circleProgress > 0 ? 0.6 : 0}
            />
            {/* Glow */}
            <path
              d={rightHalf}
              stroke="var(--accent)"
              strokeWidth="8"
              strokeDasharray={halfCircumference}
              strokeDashoffset={halfCircumference * (1 - circleProgress)}
              strokeLinecap="round"
              fill="none"
              opacity={0.1 * circleProgress}
            />
            <path
              d={leftHalf}
              stroke="var(--accent)"
              strokeWidth="8"
              strokeDasharray={halfCircumference}
              strokeDashoffset={halfCircumference * (1 - circleProgress)}
              strokeLinecap="round"
              fill="none"
              opacity={0.1 * circleProgress}
            />
          </svg>

          {/* Rings */}
          <div className={styles.ringOuter} />
          <div className={styles.ringInner} />

          {/* Radial lines */}
          <svg className={styles.radials} viewBox="0 0 1000 1000" fill="none" preserveAspectRatio="xMidYMid meet">
            {[270, 321.43, 12.86, 64.29, 115.71, 167.14, 218.57].map((angle) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 500 + 160 * Math.cos(rad);
              const y1 = 500 + 160 * Math.sin(rad);
              const x2 = 500 + 420 * Math.cos(rad);
              const y2 = 500 + 420 * Math.sin(rad);
              return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(240,90,40,0.25)" strokeWidth="1" />;
            })}
          </svg>

          {/* Core */}
          <div className={styles.core}>
            <span className={styles.coreTitle}>S-1 CORE</span>
            <span className={styles.coreSub}>SINGLE SOURCE OF TRUTH</span>
          </div>

          {/* Icon positions around the circle */}
          {NODES.map((node) => (
            <div key={node.title} className={`${styles.iconWrap} ${styles[`icon_${node.pos}`]}`}>
              <div className={styles.iconCircle}>
                {node.icon}
              </div>
            </div>
          ))}

          {/* Text cards */}
          {NODES.map((node) => (
            <div key={`text-${node.title}`} className={`${styles.textCard} ${styles[`text_${node.pos}`]}`}>
              <h4 className={styles.cardTitle}>{node.title}</h4>
              <ul className={styles.cardList}>
                {node.items.map((item) => (
                  <li key={item}>
                    <span className={styles.arrow}>›</span> {item}
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
