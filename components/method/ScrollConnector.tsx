'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ScrollConnector.module.css';

export default function ScrollConnector() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;

      const start = rect.top - windowH * 0.7;
      const end = rect.bottom - windowH * 0.2;
      const range = end - start;
      if (range <= 0) return;

      setLineProgress(Math.max(0, Math.min(1, -start / range)));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={containerRef} className={styles.connector}>
      <svg
        className={styles.lineSvg}
        viewBox="0 0 4 400"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <line
          x1="2" y1="0" x2="2" y2="400"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeDasharray="400"
          strokeDashoffset={400 * (1 - lineProgress)}
          strokeLinecap="round"
          opacity="0.6"
        />
        {lineProgress > 0.01 && lineProgress < 0.99 && (
          <circle
            cx="2"
            cy={lineProgress * 400}
            r="5"
            fill="var(--accent)"
            opacity="0.7"
            filter="url(#glow)"
          />
        )}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
