'use client';

import { useState } from 'react';
import styles from './SelfAssessment.module.css';
import Link from 'next/link';

type Rating = 'operationalized' | 'acknowledged' | 'violated' | null;

const TRUTHS = [
  {
    num: '01',
    truth: 'The foundation must come before the scaling.',
    working: '4th rep ramps in 45 days',
    broken: 'Every new hire reinvents the wheel',
  },
  {
    num: '02',
    truth: 'Discovery is the whole game.',
    working: 'Avg discount < 15%',
    broken: '40% discounts in week 12',
  },
  {
    num: '03',
    truth: 'You don\u2019t sell software. You teach champions to sell software.',
    working: 'Champions present without you',
    broken: '\u201CGreat meeting\u201D but no internal motion',
  },
  {
    num: '04',
    truth: 'Pipeline is courage.',
    working: '3.5x coverage, honest qualification',
    broken: 'Hope-filled forecasts, end-of-quarter panic',
  },
  {
    num: '05',
    truth: 'Negotiation starts in discovery, not at the end of the quarter.',
    working: 'Buyer defends your price internally',
    broken: 'Procurement runs the process',
  },
  {
    num: '06',
    truth: 'Qualification is a coaching conversation, not a checklist.',
    working: 'Reps explain gaps, not just stages',
    broken: 'MEDDPICC fields filled, nothing learned',
  },
  {
    num: '07',
    truth: 'Average productivity per rep is the only metric that matters.',
    working: 'Adding reps = adding revenue',
    broken: 'Adding reps = adding cost',
  },
  {
    num: '08',
    truth: 'Human behavior drives every outcome.',
    working: 'Reps ask from curiosity, not scripts',
    broken: 'Feature dumps and premature ROI slides',
  },
  {
    num: '09',
    truth: 'The system must run without you.',
    working: 'Founder exits, machine keeps running',
    broken: 'Key person leaves, pipeline collapses',
  },
  {
    num: '10',
    truth: 'Recruiting is the #1 job of a sales leader.',
    working: 'Hires succeed because system exists',
    broken: 'VP Sales fails because nothing exists',
  },
  {
    num: '11',
    truth: 'Bad news must travel fast.',
    working: 'Problems surface in week 2',
    broken: 'Problems surface in week 12',
  },
];

export default function SelfAssessment() {
  const [ratings, setRatings] = useState<Record<string, Rating>>({});

  const setRating = (num: string, rating: Rating) => {
    setRatings((prev) => ({ ...prev, [num]: rating }));
  };

  const answered = Object.values(ratings).filter(Boolean).length;
  const counts = {
    operationalized: Object.values(ratings).filter((r) => r === 'operationalized').length,
    acknowledged: Object.values(ratings).filter((r) => r === 'acknowledged').length,
    violated: Object.values(ratings).filter((r) => r === 'violated').length,
  };
  const allAnswered = answered === 11;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Self-Diagnostic</span>
          <h2 className={styles.title}>
            Now Score<br />
            <span className={styles.accent}>Yourself.</span>
          </h2>
          <p className={styles.sub}>
            You&apos;ve seen the seven areas we evaluate. Before we run the diagnostic, see where you stand. For each of the eleven truths below, rate your organization honestly — the value lives in accuracy, not optimism.
          </p>
        </div>

        {/* Legend */}
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.dotGreen}`} />
            <div>
              <span className={styles.legendLabel}>Operationalized</span>
              <span className={styles.legendDesc}>Built into how we work. Happens without being reminded.</span>
            </div>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.dotAmber}`} />
            <div>
              <span className={styles.legendLabel}>Acknowledged</span>
              <span className={styles.legendDesc}>We know it matters. We do it inconsistently.</span>
            </div>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.dotRed}`} />
            <div>
              <span className={styles.legendLabel}>Violated</span>
              <span className={styles.legendDesc}>We actively do the opposite, usually under pressure.</span>
            </div>
          </div>
        </div>

        {/* Truths */}
        <div className={styles.truths}>
          {TRUTHS.map((t) => {
            const current = ratings[t.num] || null;
            return (
              <div key={t.num} className={`${styles.truth} ${current ? styles[`truth_${current}`] : ''}`}>
                <div className={styles.truthHeader}>
                  <span className={styles.truthNum}>{t.num}</span>
                  <h3 className={styles.truthText}>{t.truth}</h3>
                </div>

                <div className={styles.signals}>
                  <div className={styles.signal}>
                    <span className={styles.signalLabel}>Working</span>
                    <span className={styles.signalValue}>{t.working}</span>
                  </div>
                  <div className={styles.signal}>
                    <span className={styles.signalLabel}>Broken</span>
                    <span className={styles.signalValue}>{t.broken}</span>
                  </div>
                </div>

                <div className={styles.ratingButtons}>
                  <button
                    className={`${styles.ratingBtn} ${styles.btnGreen} ${current === 'operationalized' ? styles.btnActive : ''}`}
                    onClick={() => setRating(t.num, 'operationalized')}
                  >
                    Operationalized
                  </button>
                  <button
                    className={`${styles.ratingBtn} ${styles.btnAmber} ${current === 'acknowledged' ? styles.btnActive : ''}`}
                    onClick={() => setRating(t.num, 'acknowledged')}
                  >
                    Acknowledged
                  </button>
                  <button
                    className={`${styles.ratingBtn} ${styles.btnRed} ${current === 'violated' ? styles.btnActive : ''}`}
                    onClick={() => setRating(t.num, 'violated')}
                  >
                    Violated
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Results */}
        {answered > 0 && (
          <div className={styles.results}>
            <div className={styles.resultBar}>
              <div className={`${styles.resultSegment} ${styles.segGreen}`} style={{ width: `${(counts.operationalized / 11) * 100}%` }}>
                {counts.operationalized > 0 && counts.operationalized}
              </div>
              <div className={`${styles.resultSegment} ${styles.segAmber}`} style={{ width: `${(counts.acknowledged / 11) * 100}%` }}>
                {counts.acknowledged > 0 && counts.acknowledged}
              </div>
              <div className={`${styles.resultSegment} ${styles.segRed}`} style={{ width: `${(counts.violated / 11) * 100}%` }}>
                {counts.violated > 0 && counts.violated}
              </div>
            </div>

            {allAnswered && (
              <div className={styles.resultMessage}>
                <p className={styles.resultText}>
                  {counts.violated >= 4
                    ? 'Your GTM system has significant structural gaps. The areas you marked Violated are where your next quarter\u2019s risk lives — and where a Health Check would have the highest impact.'
                    : counts.violated >= 2
                    ? 'You have the foundation partially in place, but inconsistency in key areas is compounding risk. The Health Check will tell you exactly what to fix first.'
                    : counts.acknowledged >= 4
                    ? 'You know what matters — the gap is between knowing and operating. A structured diagnostic will close that gap faster than iterating internally.'
                    : 'Your GTM organization is operating at a high level. A Health Check would validate what\u2019s working and identify the 2\u20133 optimizations that separate good from elite.'}
                </p>
                <Link href="/healthcheck" className="btn-primary btn-primary--accent">
                  Make It Precise — Request Your Health Check →
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
