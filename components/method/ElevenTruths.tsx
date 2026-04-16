'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ElevenTruths.module.css';

const TRUTHS = [
  { title: 'The foundation must come before the scaling.', body: 'Foundation, Process, Execution, Scale. The sequence is non-negotiable. Skip it and you scale dysfunction.' },
  { title: 'Discovery is the whole game.', body: 'The 40% discount at the end of the quarter is not a negotiation problem. It is a discovery problem from six weeks ago.' },
  { title: 'You don\u2019t sell software. You teach champions to sell software.', body: 'A coach gives you information. A champion fights for you and takes personal risk on your behalf. Know the difference.' },
  { title: 'Pipeline is courage.', body: 'Without pipeline abundance, reps cling to bad deals. With it, they qualify honestly. The calm in elite orgs is a byproduct of abundance.' },
  { title: 'Negotiation starts in discovery, not at the end of the quarter.', body: 'Every interaction is an opportunity to move the buyer from the apples market to the insulin market.' },
  { title: 'Qualification is a coaching conversation, not a checklist.', body: 'MEDDPICC is a framework for understanding gaps, not a form to fill out before submitting a forecast.' },
  { title: 'Average productivity per rep is the only metric that matters.', body: 'Responding to a productivity problem by adding headcount doesn\u2019t solve the problem. It scales it.' },
  { title: 'Human behavior drives every outcome.', body: 'The buyer\u2019s decision path runs through Survive, Thrive, Think. Selling ROI before disarming survival instincts produces inaction.' },
  { title: 'The system must run without you.', body: 'If your GTM only works because of who\u2019s running it, it hasn\u2019t been built yet. It\u2019s being performed.' },
  { title: 'Recruiting is the number one job of a sales leader.', body: 'VP Sales hires fail at a 50%+ rate. The primary cause isn\u2019t the wrong person. It\u2019s the wrong sequence.' },
  { title: 'Bad news must travel fast.', body: 'Bad news early is actionable. Bad news late is expensive. The difference is almost entirely a leadership design choice.' },
];

export default function ElevenTruths() {
  const sectionRef = useRef<HTMLElement>(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;

      // 0 when section top enters viewport, 1 when section center hits viewport center
      const scrolled = 1 - (sectionCenter - viewportCenter) / (window.innerHeight);
      const clamped = Math.max(0, Math.min(1, scrolled));

      // Map 0–1 to 1–11
      const num = Math.ceil(clamped * 11) || 1;
      setCount(Math.min(num, 11));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>
          {/* Sticky left */}
          <div className={styles.left}>
            <span className={styles.badge}>OPERATING PRINCIPLES</span>
            <h2 className={styles.title}>
              The Eleven Truths
              <span className={styles.watermark}>{String(count).padStart(2, '0')}</span>
            </h2>
            <p className={styles.sub}>
              Patterns that the best revenue operators converge on, regardless of company, stage, or product. These are the non-negotiables.
            </p>
            <div className={styles.divider} />
            <span className={styles.counter}>
              Showing <span className={styles.counterAccent}>5</span> of <span className={styles.counterAccent}>11</span>
            </span>
            <div className={styles.remaining}>
              <p className={styles.remainingText}>
                <span className={styles.remainingLabel}>06–11</span> Productivity. Human behavior. Systems. Recruiting. Bad news. Six more truths that most teams know but fail to operationalize.
              </p>
            </div>
            <div className={styles.ctaWrap}>
              <a href="/eleven-truths.html" target="_blank" rel="noopener noreferrer" className="btn-primary btn-primary--accent">
                Read All Eleven Truths →
              </a>
            </div>
          </div>

          {/* Truths list */}
          <div className={styles.right}>
            {TRUTHS.slice(0, 5).map((truth, i) => (
              <div key={i} className={styles.truthRow}>
                <span className={styles.truthNum}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className={styles.truthTitle}>{truth.title}</h3>
                  <p className={styles.truthBody}>{truth.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
