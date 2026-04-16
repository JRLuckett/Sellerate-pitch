'use client';

import { useState } from 'react';
import styles from './HealthCheckIntro.module.css';
import Link from 'next/link';

export default function HealthCheckIntro() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    company: '',
    symptom: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/healthcheck-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setShowModal(true);
        setFormData({ name: '', title: '', email: '', company: '', symptom: '' });
      } else {
        alert('There was an error submitting your request. Please email us directly.');
      }
    } catch (err) {
      console.error(err);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.grid_bg} />
        <div className={styles.gradient} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.eyebrow}><span>Where to Start</span></div>
          <h1 className={styles.headline}>
            The GTM<br />
            <span className={styles.accent}>Health Check.</span>
          </h1>
          <p className={styles.heroSub}>
            A structured diagnostic that scores your GTM motion across seven disciplines and tells you exactly what to fix, in what order, and why.
          </p>
          <div className={styles.heroMeta}>
            <div className={styles.heroMetaItem}>
              <span className={styles.heroMetaLabel}>Investment</span>
              <span className={styles.heroMetaValue}>$25K</span>
            </div>
            <div className={styles.heroMetaItem}>
              <span className={styles.heroMetaLabel}>Duration</span>
              <span className={styles.heroMetaValue}>4 Weeks</span>
            </div>
            <div className={styles.heroMetaItem}>
              <span className={styles.heroMetaLabel}>Status</span>
              <span className={styles.heroMetaValue}>Board Ready</span>
            </div>
          </div>

          {/* Inline Intake Form */}
          <div className={styles.intakeContainer}>
            <form onSubmit={handleSubmit} className={styles.intakeForm}>
              <div className={styles.formRow}>
                <input type="text" placeholder="Name" required className={styles.inputField} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                <input type="text" placeholder="Title" required className={styles.inputField} value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
              </div>
              <div className={styles.formRow}>
                <input type="email" placeholder="Work Email" required className={styles.inputField} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                <input type="text" placeholder="Company Website" required pattern=".*\..*" title="Please enter a valid website URL (e.g. s-1.com)" className={styles.inputField} value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
              </div>
              <textarea placeholder="Any specific GTM challenges or context you'd like to share? (Optional)" className={styles.textareaField} value={formData.symptom} onChange={e => setFormData({...formData, symptom: e.target.value})} rows={2} />
              
              <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                {isSubmitting ? 'Requesting...' : 'Request a Health Check →'}
              </button>
            </form>
          </div>
          
          {/* Success Modal */}
          {showModal && (
            <div className={styles.modalOverlay}>
              <div className={styles.modalContent}>
                <div className={styles.modalLogo} aria-hidden="true" />
                <h3 className={styles.modalTitle}>Thank You</h3>
                <p className={styles.modalBody}>
                  We appreciate you taking the time to share your context with us. The S-1 team will review your GTM challenges and reach out shortly to coordinate an introductory conversation.
                </p>
                <button type="button" onClick={() => setShowModal(false)} className={styles.modalCloseBtn}>
                  Close
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ── ZONE 1: The Problem + Why a Diagnostic ── */}
      <section className={styles.problemSection}>
        <div className="container">
          <div className={styles.problemInner}>
            <p className={styles.bridgeLead}>
              The most dangerous question in GTM consulting is &ldquo;What do you need?&rdquo; — because the answer is always a guess. S-1 answers a different question first: <strong>what does the data actually say?</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── ZONE 2: The Process ── */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.processHeader}>
            <span className={styles.processEyebrow}>The Process</span>
            <h2 className={styles.processTitle}>Four Weeks.<br /><span className={styles.accent}>Complete Transparency.</span></h2>
          </div>
          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <span className={styles.processWeek}>Week 1–2</span>
              <h3 className={styles.processCardTitle}>Structured Interviews</h3>
              <p className={styles.processCardBody}>
                We interview your founder, sales leader, 2–3 AEs, product lead, marketing lead, and an engineer — separately. Internal assessments are distorted by politics. The interviews surface the gap between how leadership sees the GTM motion and how the team actually experiences it.
              </p>
            </div>
            <div className={styles.processCard}>
              <span className={styles.processWeek}>Week 2–3</span>
              <h3 className={styles.processCardTitle}>Data Review</h3>
              <p className={styles.processCardBody}>
                CRM pipeline, win/loss history, stage conversion, tech stack, existing collateral. Every team has a story about why they win. We test that story against evidence — where conversion breaks, where pipeline quality deteriorates, and which deals are real vs. fantasy.
              </p>
            </div>
            <div className={styles.processCard}>
              <span className={styles.processWeek}>Week 3–4</span>
              <h3 className={styles.processCardTitle}>Analysis &amp; Scoring</h3>
              <p className={styles.processCardBody}>
                Each discipline gets a maturity score — but the real value is the chain reaction. ICP clarity affects pipeline quality. Pipeline quality affects deal progression. Deal progression affects forecasting. We trace the symptoms to their root cause upstream, so you fix the right link first.
              </p>
            </div>
            <div className={`${styles.processCard} ${styles.processCardAccent}`}>
              <span className={styles.processWeek}>Week 4</span>
              <h3 className={styles.processCardTitle}>Readout</h3>
              <p className={styles.processCardBody}>
                You sit across from operators who have built GTM at six companies — from $0 to $250M ARR — and hear exactly what is working, what is broken, and what to fix first. The output is board-ready: a document your leadership team can present to investors with full confidence in the data, the diagnosis, and the plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ZONE 3: What You Walk Away With + CTA ── */}
      <section className={styles.outputSection}>
        <div className="container">
          <div className={styles.outputInner}>
            <div className={styles.outputHeader}>
              <span className={styles.processEyebrow}>The Output</span>
              <h2 className={styles.processTitle}>What You Walk<br /><span className={styles.accent}>Away With.</span></h2>
            </div>
            <div className={styles.outputGrid}>
              <div className={styles.outputItem}>
                <span className={styles.outputNum}>01</span>
                <div>
                  <h4 className={styles.outputItemTitle}>Maturity Scores</h4>
                  <p className={styles.outputItemDesc}>Each of the seven disciplines scored against what we&apos;ve seen work at companies from pre-revenue to $250M ARR. Specific. Benchmarked. Defensible.</p>
                </div>
              </div>
              <div className={styles.outputItem}>
                <span className={styles.outputNum}>02</span>
                <div>
                  <h4 className={styles.outputItemTitle}>Root Cause Map</h4>
                  <p className={styles.outputItemDesc}>The upstream causes creating downstream symptoms. Most teams treat what they can see. We show you what's actually driving the problem.</p>
                </div>
              </div>
              <div className={styles.outputItem}>
                <span className={styles.outputNum}>03</span>
                <div>
                  <h4 className={styles.outputItemTitle}>Prioritized Roadmap</h4>
                  <p className={styles.outputItemDesc}>Fix now. Fix next. Can wait. Sequenced by impact and dependency — so you invest in the right link of the chain, not the one that feels most urgent.</p>
                </div>
              </div>
              <div className={styles.outputItem}>
                <span className={styles.outputNum}>04</span>
                <div>
                  <h4 className={styles.outputItemTitle}>Scoped Engagement Proposal</h4>
                  <p className={styles.outputItemDesc}>If you choose to continue, the next engagement is already defined — deliverables, timeline, and investment. No ambiguity. No scope creep.</p>
                </div>
              </div>
            </div>

            {/* CTA Removed from bottom to prioritize above the fold capture */}
          </div>
        </div>
      </section>

      {/* ── ZONE 5: Timing + Standalone qualifier (merged) ── */}
      <section className={styles.timingSection}>
        <div className="container">
          <div className={styles.timingInner}>
            <p className={styles.timingText}>
              The Health Check is a standalone engagement. The output — a scored assessment and prioritized roadmap — has full strategic value whether or not you choose to continue with S-1. It is the kind of document that changes how a leadership team talks about their GTM motion. Most clients choose to continue because the diagnostic reveals things no one else has been able to show them.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
