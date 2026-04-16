'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './FatalMistakes.module.css';

const MISTAKES = [
  {
    title: "CAN'T EXPLAIN WHY ANYONE SHOULD BUY FROM YOU",
    body: "Your reps open with features. Your SDRs send emails that sound like everyone else's. Your champion takes your pitch to their CFO and can't explain why this can't wait. The deal dies in a room you were never invited to — and you blame the buyer for \"going dark.\"",
  },
  {
    title: 'SELL TO ANYONE WHO TAKES A MEETING',
    body: "The pipeline looks full. The logos feel real. But half of them will never buy — they took the meeting out of curiosity, not pain. Your reps spend 6 months nurturing accounts that were never going to close. The cost isn't just the lost revenue — it's the 6 months of real deals you didn't work instead.",
  },
  {
    title: 'LEAD WITH THE DEMO INSTEAD OF THE PROBLEM',
    body: "The buyer sits through 45 minutes of your product. They say \"this is really cool.\" Then they Google your competitor, realize there are four that look the same, and go dark. You never asked what was broken. So they never felt the cost of not fixing it. Cool doesn't close.",
  },
  {
    title: 'CONFUSE INTEREST FOR COMMITMENT',
    body: "\"They loved the demo.\" \"The VP is really excited.\" \"We should have a decision by end of month.\" These aren't buying signals — they're polite deflections. The person nodding in your meeting is not the person fighting for budget in theirs. You're building a forecast on compliments.",
  },
  {
    title: 'SPEND MONEY BEFORE YOU KNOW WHAT TO MEASURE',
    body: "You buy Gong, 6sense, Outreach, and HubSpot before you have a repeatable sales process. Now you have four dashboards and no answers. The tools aren't the problem — you instrumented a motion that doesn't exist. Every dollar you spent is measuring noise.",
  },
  {
    title: 'SCALE BEFORE THE MOTION IS REPEATABLE',
    body: "The founder closes 10 deals. The board says hire. You bring on three reps and a VP Sales. Six months later, the founder is still in every deal, the reps are \"ramping,\" and the VP is rewriting the pitch deck for the third time. You didn't scale a process — you scaled the chaos.",
  },
  {
    title: 'BUILD A FORECAST ON FEELINGS',
    body: "\"Pipeline looks healthy\" isn't a forecast — it's a prayer. Your board gets your number. You miss by 40%. The conversation shifts from growth to survival. The next round gets harder. The runway gets shorter. And the worst part: you saw it coming but couldn't prove it until it was too late.",
  },
];

export default function FatalMistakes() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  useEffect(() => {
    const path = lineRef.current;
    const section = sectionRef.current;
    if (!path || !section) return;

    const totalLength = path.getTotalLength();
    path.style.strokeDasharray = `${totalLength}`;
    path.style.strokeDashoffset = `${totalLength}`;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = rect.top - windowH;
      const end = rect.bottom - windowH * 0.3;
      const range = end - start;
      const progress = Math.min(1, Math.max(0, -start / range));
      path.style.strokeDashoffset = `${totalLength * (1 - progress)}`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.errorLabel}>CRITICAL SYSTEM ERRORS</span>
          <h2 className={styles.title}>THE 7 FATAL MISTAKES</h2>
        </div>

        <div className={styles.listWrap}>
          {/* Scroll-drawing line */}
          <svg className={styles.lineSvg} viewBox="0 0 2 700" preserveAspectRatio="none">
            <path
              ref={lineRef}
              d="M1 0 L1 700"
              stroke="var(--accent)"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          <div className={styles.list}>
            {MISTAKES.map((mistake, i) => (
              <div
                key={i}
                className={`${styles.row} ${openIndex === i ? styles.rowOpen : ''}`}
                onClick={() => toggle(i)}
              >
                <span className={styles.dot} />
                <div className={styles.rowContent}>
                  <div className={styles.rowHeader}>
                    <div className={styles.rowLeft}>
                      <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                      <span className={styles.text}>{mistake.title}</span>
                    </div>
                    <span className={styles.toggle}>
                      {openIndex === i ? '−' : '+'}
                    </span>
                  </div>
                  <div className={styles.bodyWrap}>
                    <p className={styles.body}>{mistake.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
