'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './page.module.css';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PILLARS = [
  {
    title: <>Never Setup for Success<br/><span className={styles.pillarAccent}>(Onboarding)</span></>,
    problem: 'The lack of exec alignment affects the overarching goals of the business and Sellerate\'s roles—where are they starting, what are the expectations, what will be the internal support, what is known, and what is unknown? Furthermore, they provide no baseline metrics (historical conversion rates, etc.) so progress is impossible to measure accurately.',
    fix: 'S-1 Intervention: We build alignment with exec and GTM leadership around the orgs identified value add, market challenges, business impacts, differentiators, target market, sales process, clear qualifiers, and desired reporting. We build the KPI baseline from historical pipeline performace metrics. We define the expectations of the exec team and condense the findings into a master playbook.'
  },
  {
    title: <>The REAL Reason Why?<br/><span className={styles.pillarAccent}>(Enablement)</span></>,
    problem: 'SDRs need more than product basics. When a prospect pushes back, the SDR lacks confidence because they were never enabled to defend the position. They need to understand what they are pitching at a fundamental level before they begin their outreach. If they learn the what, why, how, and when prior to building the outbound machine, then when they start carrying KPIs they can focus purely on execution.',
    fix: 'S-1 Intervention: We enable the fundamentals. We train your SDRs to answer the critical 4 questions to be audible ready. We establish a transparent operating rhythm to ensure expectations and accountability flow in both directions (SDR:AE).'
  },
  {
    title: <>One-Way Street<br/><span className={styles.pillarAccent}>(The Feedback Loop)</span></>,
    problem: 'An SDR books a meeting. The opp is created. Then the deal dies. Why? When a deal goes quiet after the handoff, the feedback loop completely stops. The SDR never finds out if they booked a terrible prospect using bad messaging, or if the AE simply blew the discovery call. Without data flowing backward, Sellerate cannot course-correct.',
    fix: 'S-1 Intervention: We analyze the opp with CRM data and raw transcripts. S-1 audits each meeting transcripts—uncovering overarching strategic pivot points—and feeds that intelligence back to the Sellerate AM so the SDR can pivot their strategy, rather than just increasing their output to hit the number.'
  },
  {
    title: <>Finger-Pointing<br/><span className={styles.pillarAccent}>(The Consequence)</span></>,
    problem: 'Lack of pipeline traction breeds internal politics. Sales reps blame the SDRs for low-quality leads; SDRs feel lost because adjustment by the reps were never communicated. The executive team inevitably questions Sellerate’s effectiveness based purely on closed-won revenue vs. spend, rather than diagnosing the root cause.',
    fix: 'S-1 Intervention: We report the reality so leadership can act on the findings. We handle all meeting reviews and pipeline reporting with the AEs, Management, and Execs. Bi-weekly, we deliver the truth to the C-suite. We change the conversation from "Sellerate isn\'t booking enough" to data-driven operational adjustments.'
  }
];

const IMPACT = [
  {
    number: '01',
    title: <>Strategic<br/>Alignment</>,
    desc: 'We force executive consensus and define key historical baseline metrics to measure outbound performance before a single lead is contacted.',
    bullets: [
      'Distill complex features into clear business outcomes',
      'Construct a master SDR playbook building a foundation for long-term success',
      'Define executive level expectations for reporting and analysis'
    ]
  },
  {
    number: '02',
    title: <>Opportunity<br/>Intelligence</>,
    desc: 'S-1 audits each meeting transcripts to identify key outliers and patterns. No more guessing, only chasing repeatability.',
    bullets: [
      'Pass/Fail grading on Account Executive discovery execution',
      'Identify recurring market objections and trap-setting failures',
      'Isolate nuanced findings at the ICP, persona, account level'
    ]
  },
  {
    number: '03',
    title: <>Feedback<br/>Loop</>,
    desc: 'We immediately feed intelligence back to the AE and SDR to pivot messaging based on live market reactions.',
    bullets: [
      'Rapid iteration on outbound sequences from real call data',
      'Continuous SDR coaching on vertical-specific pushback',
      'Bi-weekly C-suite reviews to address concerns and share successes'
    ]
  }
];

const CORE_OPTIMIZATIONS = [
  {
    title: 'The Tiered Persona Bounty Model',
    desc: 'Most agencies misprice their own labor. Because S-1 verifies exact persona and quality via transcript, Sellerate can introduce a highly profitable outbound pricing matrix:',
    pricing: [
      { label: 'Tier 3 (Manager/Director):', value: '$180 (Base)' },
      { label: 'Tier 2 (VP/SVP):', value: '$300 (Premium)' },
      { label: 'Tier 1 (C-Suite/Economic Buyer):', value: '$500 (Executive Bounty)' }
    ]
  },
  {
    title: 'Partner Meeting Setting',
    desc: 'Sellerate SDRs break out of standard prospecting by booking meetings with AWS, GCP, Snowflake, and Databricks alliance managers. S-1 builds the strategy; Sellerate opens the doors.',
    pricing: [
      { label: 'Tier 2 (Niche Agency / SI Partners):', value: '$180 per meeting' },
      { label: 'Tier 1 (Cloud Alliance Managers - AWS/Azure/GCP):', value: '$300 per meeting' }
    ]
  },
  {
    title: 'Renewal Management',
    desc: 'SDRs execute 90-60-30 day outreach for existing clients prior to contract renewals, locking in meetings with the client\'s CSMs.',
    pricing: [
      { label: 'Renewal Orchestration:', value: '$100 per meeting' },
      { label: 'Inbound Qualification:', value: '$50 per lead' }
    ]
  }
];

const NET_NEW_OFFERINGS = [
  {
    title: 'The Vertical "Stress-Test" Sprint (GTM R&D)',
    desc: 'A client wants to test a new vertical (e.g., Healthcare) but isn\'t ready to hire full-time AEs. S-1 builds the vertical thesis, and Sellerate deploys a sprint pod to prove if the market will buy.',
    pricing: [
      { label: 'Pricing Model (90 Day Min):', value: '$25,000 S-1 Setup + Sellerate SDR Monthly + Tiered Bounties' }
    ]
  },
  {
    title: 'Event & Conference "Strike Teams"',
    desc: 'S-1 builds a micro-event strategy for an upcoming conference. Sellerate spins up a dedicated SDR pod to guarantee predefined face-to-face C-suite meetings.',
    pricing: [
      { label: 'Pricing Model (60 Days Prior):', value: '$15,000 S-1 Setup + SDR Monthly + $500 In-Person Fee + Tiered Bounties (Post-Event)' }
    ]
  },
  {
    title: '"Trigger Event" Competitive Displacement',
    desc: 'When a competitor suffers an outage or raises prices, S-1 rapidly builds the trap-setting playbook, and Sellerate shifts a pod into an immediate displacement campaign.',
    pricing: [
      { label: 'Pricing Model (60 Day Min):', value: '$15,000 S-1 Setup + Sellerate SDR Monthly + Tiered Bounties' }
    ]
  },
  {
    title: 'New Product or Feature Launch Blitz',
    desc: 'When a client ships a major new module, S-1 writes the specialized use-case messaging, and Sellerate unleashes a blitz to upsell the current base or target a net-new ICP.',
    pricing: [
      { label: 'Pricing Model (90 Day Min):', value: '$10,000 S-1 Setup + Sellerate SDR Monthly + Tiered Bounties' }
    ]
  }
];

export default function SelleratePitchPage() {
  const containerRef = useRef(null);
  const [openPillar, setOpenPillar] = useState<number | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('s1:nav-reveal'));
      sessionStorage.setItem('s1:heroPlayed', 'true');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.main} ref={containerRef}>
      
      {/* 1. THE HOOK */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className="section-label" style={{ marginBottom: 24 }}>The Reality</div>
          <h1 className={styles.heroTitle}>
            The failure isn't the execution. The failure is <span style={{ color: 'var(--accent)' }}>executing blind</span> without alignment or a mechanism to course-correct.
          </h1>
          <p className={styles.heroBody}>
            You have built world-class Sales Development Infrastructure. Your SDRs hit their KPIs. But activity without intelligence is just noise. When pipeline dries up, Sellerate takes the blame for operating on assumptions instead of data—breakdowns that happen because the client left you blind.
          </p>
        </div>
      </section>

      {/* 2. THE 4 PILLARS (2x2 GRID WITH EXPANDABLE FIX) */}
      <section className={styles.pillarsSection}>
        <div className="container" style={{maxWidth: 1100}}>
          <div className="section-label">The Anatomy of Churn</div>
          <h2 className="h2" style={{ marginTop: 16 }}>The Four Points of Failure</h2>
          
          <div className={styles.pillarGrid2x2} style={{border: '1px solid var(--border)'}}>
            {PILLARS.map((pillar, index) => {
              const isOpen = openPillar === index;
              const cardClass = isOpen ? styles.pillarCardOrange : styles.pillarCardDark;
              
              return (
                <div key={index} className={`${styles.pillarCard2x2} ${cardClass}`} onClick={() => setOpenPillar(isOpen ? null : index)}>
                  
                  <div className={styles.pillarCardHeader}>
                    <div>
                      <div className={styles.pillarNumber}>0{index + 1}</div>
                      <h3 className={styles.pillarCardTitle}>{pillar.title}</h3>
                    </div>
                    {/* Expand Icon */}
                    <div className={styles.accordionIcon} style={{color: isOpen ? '#000' : 'var(--accent)'}}>
                      {isOpen ? '−' : '+'}
                    </div>
                  </div>
                  
                  <p className={styles.pillarCardBody}>
                    <strong style={{ display: 'block', marginBottom: 8, color: isOpen ? '#000' : '#fff' }}>Point of Failure:</strong>
                    {pillar.problem}
                  </p>

                  <div className={`${styles.pillarCardExpandable} ${isOpen ? styles.open : ''}`}>
                    <div className="structural-line" style={{ borderColor: isOpen ? 'rgba(0,0,0,0.1)' : 'var(--structural-line)', margin: '16px 0' }} />
                    <p className={styles.pillarCardBody} style={{marginTop: 0, fontWeight: 700}}>
                      {pillar.fix}
                    </p>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. THE GTM OPERATING SYSTEM PIVOT */}
      <section className={styles.punctuationSection}>
        <div className="container" style={{maxWidth: 1000}}>
          <h2 className={styles.punctuationText}>
            S-1 acts as your <span style={{ color: 'var(--accent)' }}>GTM Operating System.</span>
          </h2>
          <p className="body-lg" style={{ marginTop: 32, color: 'var(--text-body)' }}>
            We shift your outbound motion from a vendor service to an indispensable, data-driven engine embedded deeply within the client&apos;s organization.
          </p>
        </div>
      </section>

      {/* 4. THE GTM OS IMPACT (NEW SLIDE) */}
      <section className={styles.impactSection}>
        <div className="container" style={{maxWidth: 1200}}>
          <div className="section-label">OS Mechanics</div>
          <h2 className="h2" style={{ marginTop: 16 }}>How The Integration Works</h2>
          
          <div className={styles.impactGrid} style={{ borderTop: '2px solid var(--accent)', gap: 0, marginTop: 40 }}>
            {IMPACT.map((item, i) => (
              <div key={i} style={{ 
                padding: '64px 40px', 
                background: '#0a0a0a', 
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' 
              }}>
                <div style={{
                  fontSize: 'clamp(48px, 6vw, 64px)', 
                  fontWeight: 700, 
                  color: 'var(--accent)', 
                  fontFamily: 'var(--font-display)', 
                  lineHeight: 1, 
                  marginBottom: 32 
                }}>
                  {item.number}
                </div>
                <h3 style={{ 
                  fontSize: 20, 
                  fontWeight: 700, 
                  color: 'var(--accent)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px', 
                  marginBottom: 24 
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: 14, 
                  color: 'var(--text-secondary)', 
                  fontStyle: 'italic', 
                  marginBottom: 32,
                  fontFamily: 'var(--font-body)',
                  lineHeight: 1.6
                }}>
                  {item.desc}
                </p>
                <ul style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 24, 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0 
                }}>
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: 12, 
                      fontSize: 14, 
                      color: 'var(--text-body)',
                      lineHeight: 1.5
                    }}>
                      <span style={{ 
                        display: 'block', 
                        minWidth: 6, 
                        height: 6, 
                        backgroundColor: 'var(--accent)', 
                        marginTop: 6 
                      }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="structural-line" style={{ margin: '48px 0' }} />
          <h3 className="h3" style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto', color: 'var(--accent)' }}>
            The Impact: Predictable pipeline, defensible execution, and zero daylight between executives and SDRs.
          </h3>
        </div>
      </section>

      {/* 5. GTM EXPANSION ARCHITECTURE */}
      <section className={styles.expansionSection}>
        <div style={{ height: '240px' }} />
        <div className="container" style={{maxWidth: 1200}}>
          <div className="section-label" style={{ color: 'var(--accent)' }}>High-Margin Offerings</div>
          <h2 className="h2" style={{ marginTop: 16 }}>Product Expansion Models</h2>
          <p className="body-lg" style={{ marginTop: 24, marginBottom: 48 }}>
            Together, we immediately expand your capabilities into specialized, high-margin product offerings that differentiate Sellerate from any competitor in the market.
          </p>

          <div style={{ padding: '0 8px' }}>
              
              {/* GROUP 1: CORE OPTIMIZATIONS */}
              <div style={{ marginBottom: 72 }}>
                <h3 className="h3" style={{ marginBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 16 }}>Core Model Overhauls</h3>
                <p className="body-sm" style={{ color: 'var(--text-secondary)', marginBottom: 32 }}>Variants of the current SDR model that extract higher value strictly through exact, transcript-verified tiering structures.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
                  {CORE_OPTIMIZATIONS.map((item, index) => (
                    <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', padding: 32, background: '#0a0a0a' }}>
                      <div style={{ flexGrow: 1 }}>
                        <h3 className="h4" style={{ color: 'var(--accent)', marginBottom: 16, lineHeight: 1.4, minHeight: 48 }}>{item.title}</h3>
                        <p className="body-md" style={{ color: 'var(--text-body)', marginBottom: 32 }}>{item.desc}</p>
                      </div>
                      
                      {item.pricing.length > 0 && (
                        <div style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)', minHeight: 220 }}>
                          <div className="section-label" style={{ fontSize: 11, marginBottom: 12 }}>Pricing Architecture</div>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {item.pricing.map((price, pIdx) => (
                              <li key={pIdx} style={{ fontSize: 13, display: 'flex', flexDirection: 'column', gap: 4 }}>
                                <span style={{ color: 'var(--text-secondary)' }}>{price.label}</span>
                                <strong style={{ color: '#fff', fontSize: 14 }}>{price.value}</strong>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* GROUP 2: NET-NEW OFFERINGS */}
              <div>
                <h3 className="h3" style={{ color: 'var(--accent)', marginBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 16 }}>Net-New Deployments</h3>
                <p className="body-sm" style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>Entirely new product capabilities resulting from S-1's strategic alignment. These models differentiate Sellerate from any standard SDR firm.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
                  {NET_NEW_OFFERINGS.map((item, index) => (
                    <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', padding: 32, background: 'var(--accent)' }}>
                      <div style={{ flexGrow: 1 }}>
                        <h3 className="h4" style={{ color: '#000', marginBottom: 16, lineHeight: 1.4 }}>{item.title}</h3>
                        <p className="body-md" style={{ color: '#000', marginBottom: 32, fontWeight: 500 }}>{item.desc}</p>
                      </div>
                      
                      {item.pricing.length > 0 && (
                        <div style={{ paddingTop: 24, borderTop: '1px solid rgba(0,0,0,0.15)', minHeight: 120 }}>
                          <div className="section-label" style={{ fontSize: 11, marginBottom: 12, color: '#000' }}>Pricing Architecture</div>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {item.pricing.map((price, pIdx) => (
                              <li key={pIdx} style={{ fontSize: 13, display: 'flex', flexDirection: 'column', gap: 4 }}>
                                <span style={{ color: 'rgba(0,0,0,0.8)' }}>{price.label}</span>
                                <strong style={{ color: '#fff', fontSize: 14 }}>{price.value}</strong>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
        </div>
      </section>

      {/* 6. THE PARTNERSHIP FRAMEWORK / CTA */}
      <section className={styles.divisionSection}>
        <div className="container">
          <div className="section-label">The Partnership Framework</div>
          <h2 className="h2" style={{ marginTop: 16 }}>An Integrated Operating System</h2>

          <div className={styles.divisionGrid}>
            <div className="card">
              <h3 className="h3">S-1 Operates <br/><span className="accent-text" style={{fontSize: 16}}>(Strategic & Diagnostic Layer)</span></h3>
              <ul className={styles.divisionList}>
                <li className="body-md"><strong>Executive Alignment & Reporting:</strong> We define executive alignment, outline exact responsibilities, and enforce ongoing, transparent reporting to completely eliminate the void between the client organization and Sellerate.</li>
                <li className="body-md"><strong>Foundation Building:</strong> We deploy the complete GTM architecture—constructing the master playbooks, competitive frameworks, enablement training structures, and the overarching outbound strategy that powers the execution floor.</li>
                <li className="body-md"><strong>Opportunity Validation:</strong> We substantiate the exact value your SDRs generate. By analyzing transcripts, we identify crucial adjustments that shorten misdirection, increase the probability of qualified pipeline growth, and enforce absolute transparency in GTM opportunity accuracy.</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="h3">Sellerate Executes <br/><span className="muted-text" style={{fontSize: 16}}>(Execution & Scaling Layer)</span></h3>
              <ul className={styles.divisionList}>
                <li className="body-md"><strong>Elite SDR Execution:</strong> Your team owns the outbound activity, running the plays powered by verified data instead of assumptions.</li>
                <li className="body-md"><strong>Account Management:</strong> Your AMs retain full control over day-to-day SDR management, utilizing S-1's intelligence to instantly adjust strategy in the field.</li>
                <li className="body-md"><strong>Infrastructure & Scale:</strong> You own the talent engine, rapidly spinning up dedicated pods and sprint teams to dominate the pipeline.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
