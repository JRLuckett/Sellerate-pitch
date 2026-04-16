'use client';

import { useState, useEffect } from 'react';
import styles from './MethodHero.module.css';
import Link from 'next/link';

function useTypewriter(word: string, delay = 800, speed = 120) {
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setText(word.slice(0, i + 1));
        i++;
        if (i >= word.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [word, delay, speed]);

  return { text, done };
}

export default function MethodHero() {
  const { text, done } = useTypewriter('textbook', 600, 100);

  return (
    <section className={styles.hero}>
      <div className={styles.grid_bg} />
      <div className={styles.gradient} />
      <div className={`container ${styles.content}`}>

        <h1 className={styles.headline}>
          Built from the <span className={styles.accent}>inside</span>.<br />
          Not borrowed from a{' '}
          <span className={styles.stroke}>{text}</span>
          <span className={`${styles.cursor} ${done ? styles.cursorBlink : ''}`}>|</span>
        </h1>

        <div className={styles.bottom}>
          <p className={styles.sub}>
            The S-1 Method is the anti-consultant approach. We don&rsquo;t deliver
            slides; we deliver scar tissue, execution frameworks, and repeatable
            revenue systems that we&rsquo;ve personally stress-tested at scale.
          </p>
          <div className={styles.ctas}>
            <Link href="/bundles" className="btn-primary btn-primary--accent">
              View the Bundles →
            </Link>
            <Link href="/healthcheck" className="btn-outline">
              Start with a Health Check
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
