'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const alreadyPlayed = sessionStorage.getItem('s1:heroPlayed');

    if (prefersReduced || alreadyPlayed) {
      // Skip animation — show everything instantly
      window.dispatchEvent(new CustomEvent('s1:nav-reveal'));
      [overlayRef, labelRef, line1Ref, line2Ref, subRef, ctaRef].forEach(ref => {
        if (ref.current) {
          ref.current.style.opacity = '1';
          ref.current.style.transform = 'none';
        }
      });
      return;
    }

    import('gsap').then(({ gsap }) => {
      gsap.set([labelRef.current, line1Ref.current, line2Ref.current, subRef.current, ctaRef.current], {
        opacity: 0, y: 24,
      });
      gsap.set(overlayRef.current, { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.to({}, { duration: 0.5 })
        .to(overlayRef.current, { opacity: 1, duration: 1.2, ease: 'power1.inOut' })
        .call(() => { window.dispatchEvent(new CustomEvent('s1:nav-reveal')); }, [], '<')
        .to(labelRef.current, { opacity: 1, y: 0, duration: 0.6 }, '+=0.2')
        .to(line1Ref.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.2')
        .to(line2Ref.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
        .to(subRef.current, { opacity: 1, y: 0, duration: 0.7 }, '-=0.2')
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7 }, '-=0.2')
        .call(() => { sessionStorage.setItem('s1:heroPlayed', '1'); });
    });
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background image + overlay */}
      <div className={styles.bgWrap}>
        <img
          src="/photos/organism.jpeg"
          alt="Microscopic organism visualization"
          className={styles.bgImage}
        />
        <div className={`${styles.bgOverlay} ${styles.animHidden}`} ref={overlayRef} />
      </div>

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.inner}>
          <span className={`section-label ${styles.animHidden}`} ref={labelRef}>Mission Critical Operations</span>

          <h1 className={styles.headline}>
            <span className={styles.animHidden} ref={line1Ref}>Growth is the goal.</span>
            <br />
            <span className={styles.animHidden} ref={line2Ref}>
              It can also be
              <br />
              <span className={styles.accentGlow}>the trap.</span>
            </span>
          </h1>

          <p className={`${styles.sub} ${styles.animHidden}`} ref={subRef}>
            You&rsquo;re trending toward the number. Pipeline is building. Deals
            are progressing. But is this repeatable?
          </p>

          <div className={`${styles.ctas} ${styles.animHidden}`} ref={ctaRef}>
            <Link href="/healthcheck" className={`btn-primary btn-primary--accent ${styles.ctaPrimary}`}>
              See where the gaps are
            </Link>
            <Link href="/approach" className={`btn-outline ${styles.ctaSecondary}`}>
              How we work →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
