'use client';

import { useState } from 'react';
import styles from './BundlesGrid.module.css';
import {
  FoundationIcon,
  ExecuteAndScaleIcon,
  PipelineGenerationIcon,
  PartnerEcosystemIcon,
  RecruitingIcon,
  EnablementIcon,
} from '@/components/icons/S1Icons';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  '01': FoundationIcon,
  '02': ExecuteAndScaleIcon,
  '03': PipelineGenerationIcon,
  '04': PartnerEcosystemIcon,
  '05': RecruitingIcon,
  '06': EnablementIcon,
};

const BUNDLES = [
  {
    num: '01',
    title: 'Foundational',
    thesis: 'What are we selling, to whom, why them, and how is it different?',
    whoFor: 'For teams where the sales org, marketing, and product tell different stories about why customers buy.',
    insight: 'Without these answers, everything downstream — sales process, pipeline generation, enablement, hiring — is built on guesswork. A company that completes this bundle walks out with a documented ICP, a live Value Framework, competitive trap-setting questions, and a pricing strategy calibrated to customer value. It eliminates the most expensive form of dysfunction in early-stage GTM: everyone selling something slightly different to someone slightly wrong.',
    timeline: '8–12 weeks',
    workstreams: [
      { name: 'ICP & Buyer Persona Development', detail: 'Research-driven ICP with three-tier scoring. Persona cards per buyer role — pain points, value drivers, discovery questions, messaging angles. Analyzes pipeline data (closed-won, late-stage closed-lost) to identify patterns.', weeks: 'Weeks 1–4' },
      { name: 'Value Framework Build', detail: 'Cross-functional workshop with GTM, product, marketing, and engineering. Maps the customer journey from Before state through Pain, Consequences, Gap, After state, Positive Business Outcomes, Capabilities, Differentiation, and Proof. The single document that aligns PG, discovery, proposals, and CS.', weeks: 'Weeks 2–6' },
      { name: 'Four Essential Questions Workshop', detail: 'What problems do we solve? How do we solve them? How differently? Where have we done it before? When any member of a sales team cannot answer these with precision and consistency, the organization is speaking different languages to the market.', weeks: 'Weeks 1–2' },
      { name: 'Competitive Positioning & Trap-Setting', detail: 'Positioning matrix against top alternatives, including the status quo. Trap-setting questions that embed your differentiators as the customer\'s decision criteria before the competition gets in the room.', weeks: 'Weeks 4–8' },
      { name: 'Messaging & Positioning Review', detail: 'Audit of all current customer-facing materials against the Value Framework and ICP. Gap analysis and rewrite priorities. Identifies inconsistencies and missed differentiation.', weeks: 'Weeks 6–9' },
      { name: 'Product Pricing Strategy', detail: 'Pricing architecture calibrated to buyer value — not cost-plus. Anchoring strategy, packaging logic, discount governance, and cloud commit structures.', weeks: 'Weeks 7–12' },
    ],
    deliverables: [
      'ICP document with targeting criteria and persona profiles',
      'Value Framework document (Before → After, PBOs, Capabilities, Differentiation, Proof)',
      'Four Essential Questions reference document',
      'Competitive positioning matrix with trap-setting questions',
      'Messaging review with gap analysis and recommendations',
      'Pricing model with packaging, discounting guidelines, and cloud commit structure',
    ],
    clientNeeds: [
      '3-5 hours/week of direct leadership time',
      'Full CRM and pipeline data access',
      'Key team members available for workshops (GTM, product, marketing, engineering)',
      'Existing collateral, competitive intel, and pricing documentation',
      'Decisions on deliverables within one week',
    ],
  },
  {
    num: '02',
    title: 'Execute & Scale',
    thesis: 'The systems that turn strategy into repeatable execution.',
    whoFor: 'For teams where deals close but nobody can explain exactly how — or predict when the next one will.',
    insight: 'The most comprehensive offering in the portfolio and the one most likely to produce visible revenue impact in the shortest time. It covers the full execution stack — from how deals are qualified to how they are closed. The same frameworks that drove results at BladeLogic, Cloudera, and Crux Data, applied to your specific deal motion.',
    timeline: '12–16 weeks build + ongoing',
    workstreams: [
      { name: 'Sales Process Design', detail: 'Stage-gated process with go/no-go checkpoints. Exit criteria at every stage. Do the early stages right and the deal pulls itself forward. All the work is in the beginning.', weeks: 'Weeks 1–6' },
      { name: 'MEDDPICC Scorecards', detail: 'Custom qualification framework built for your specific deal motion — not a generic checklist. Eliminates fantasy pipeline. Reps stop spending 70% of their time on deals that will never close.', weeks: 'Weeks 2–4' },
      { name: 'Discovery Question Architecture', detail: 'Structured discovery by persona. Questions that implicate pain, quantify consequences, and establish the cost of inaction before any solution is mentioned.', weeks: 'Weeks 3–5' },
      { name: 'Champion Development Framework', detail: 'Identify → Test → Develop → Enable. Until a champion has taken action on your behalf, they are a hypothesis, not an asset. Tests, enablement tools, and the Three Whys system.', weeks: 'Weeks 4–8' },
      { name: 'BVH & BVA Systems', detail: 'Business Value Hypothesis earns meetings with research-driven outreach. Business Value Assessment closes deals with a quantified business case for the economic buyer. Engaging BVA early in the process dramatically compresses sales cycles.', weeks: 'Weeks 5–10' },
      { name: 'Forecasting Methodology', detail: 'Commit-based process. Stage analysis, gap deals, and historical conversion. The model that turns pipeline into a number you can defend to a board.', weeks: 'Weeks 8–12' },
      { name: 'Negotiation Playbook', detail: 'Give-get framework. Multiple options structure. T&C pre-negotiation process. Negotiation starts in discovery — this playbook starts there too.', weeks: 'Weeks 10–13' },
      { name: 'Tech Stack & Custom Dashboards', detail: 'Audit, rationalization, and custom dashboards built against your actual CRM APIs — not screenshots of generic tools. Workflow automation with documentation that your team can maintain.', weeks: 'Weeks 1–16' },
    ],
    phaseTwoWorkstreams: [
      { name: 'Forecast Reviews', detail: 'Weekly commit-based forecast sessions. Stage analysis, gap identification, and pipeline health scoring. The discipline that turns pipeline into a number you can defend.', weeks: 'Weekly' },
      { name: 'Deal Coaching', detail: 'Live deal reviews on strategic opportunities. Champion testing, stakeholder mapping, and next-step planning at the deal level.', weeks: 'Ongoing' },
      { name: 'Live Call Participation', detail: 'S-1 joins customer calls — discovery, demos, executive meetings — to observe, coach, and model the methodology in real time.', weeks: 'As needed' },
      { name: 'Business Case Development', detail: 'BVA creation for strategic deals. Quantified business cases built for economic buyer conversations on your highest-value opportunities.', weeks: 'Per deal' },
    ],
    deliverables: [
      'Stage-gated sales process with exit criteria and content maps',
      'Customized MEDDPICC scorecards',
      'Discovery question playbooks by persona',
      'Champion identification and development framework',
      'BVH outreach engine (templates, research framework, process)',
      'BVA business case template with worked examples',
      'Forecasting model and methodology',
      'Negotiation playbook with give-get framework',
      'Custom dashboards (API-built, real-time)',
      'Workflow automations with documentation',
    ],
    clientNeeds: [
      '3-5 hours/week of direct leadership time',
      'Full CRM and pipeline data access',
      'Reps available for deal reviews and process validation',
      'Access to customer call recordings (or willingness to let S-1 join live calls)',
      'Existing sales collateral and competitive intel',
      'Decisions on deliverables within one week',
    ],
  },
  {
    num: '03',
    title: 'Pipeline Generation — in Partnership with Sellerate',
    thesis: 'Outbound that earns meetings with research, not volume. S-1 strategy. Sellerate execution.',
    whoFor: 'For teams who need pipeline that doesn\'t depend on warm intros, referrals, or inbound alone.',
    insight: 'Every SDR program is measured by Sales Qualified Meetings or Sales Qualified Leads. Both metrics can have the same structural flaw: they measure the handoff, not the close outcome. When meetings don\'t qualify, why? When meetings do qualify, why? S-1 instruments the feedback loop: what converts at close informs what gets sourced at top of funnel. Every campaign gets smarter because every deal outcome teaches.',
    timeline: '4–6 weeks build + ongoing',
    workstreams: [
      { name: 'PG Strategy & Architecture', detail: 'Channel mix, coverage ratios, sequencing cadence, persona targeting, and messaging hierarchy — all built against the Value Framework, not generic templates. Sellerate\'s SDR team is enabled on the Four Essential Questions, competitive positioning, and the ICP scoring criteria.', weeks: 'Weeks 1–6' },
      { name: 'POV / Custom Slide Process', detail: 'The Challenger approach to outbound: lead with a perspective and hypothesis about the prospect\'s business problem, not a request for a meeting. Research-driven outreach that earns time with senior buyers.', weeks: 'Weeks 2–4' },
      { name: 'SDR Onboarding & Enablement', detail: 'Onboard and enable the Sellerate SDR team on the company\'s value, ICP, sales process, personas, and goals. Build the SDR-to-AE handoff systems.', weeks: 'Weeks 3–6' },
      { name: 'Bi-Weekly Strategic Analysis', detail: 'Every two weeks, S-1 delivers a strategic read: what\'s converting and why, what\'s stalling and where the breakdown happened. Not activity metrics — a forensic account of what the pipeline motion is actually doing.', weeks: 'Week 6+' },
      { name: 'Transcript Analysis & Pattern Intelligence', detail: 'S-1 identifies which industries convert fastest, which personas produce multi-threaded deals, which messaging resonates at what stage. That intelligence reaches Sellerate\'s team on a rolling basis.', weeks: 'Week 6+' },
      { name: 'AE Accountability', detail: 'When Sellerate earns a meeting with the right account and the deal stalls, S-1 digs into the AE side. Was discovery run against the Value Framework? Were next steps specific? No finger-pointing — the right conversation at the right level.', weeks: 'Week 6+' },
    ],
    deliverables: [
      'Pipeline generation strategy with channel mix and contribution targets',
      'POV/custom slide workflow and templates',
      'SDR onboarding materials tailored to the company',
      'SDR-to-AE handoff systems and workflows',
      'Bi-weekly performance analysis and strategic recommendations',
      'Pattern intelligence reports (converting industries, personas, messaging)',
    ],
    clientNeeds: [
      'AE feedback on meeting quality from SDR-sourced opportunities',
      'CRM data on SDR-sourced pipeline progression',
      'Access to SDR team for enablement sessions',
      'Quick turnaround on ICP or messaging changes',
    ],
    compoundEffect: 'Month one is alignment. By month three, the program operates with pattern-level intelligence on what converts. By month six, the SDR team has context and precision that takes an internal team a year or more to build.',
  },
  {
    num: '04',
    title: 'Partner Ecosystem',
    thesis: 'Revenue through relationships. Pipeline that scales without adding quota.',
    whoFor: 'For teams where partners are on the board slide but not in the pipeline report.',
    insight: 'Most early-stage companies treat partnerships as an afterthought — a checkbox on the board slide. The ones who get it right unlock 20–30% of pipeline from non-headcount sources. The difference is knowing which partner types actually produce co-sell revenue versus which ones consume management bandwidth without return. Patrick has built partner ecosystems firsthand across cloud marketplaces, global SIs, and technology alliances — the playbook is specific, not theoretical.',
    timeline: '8–12 weeks',
    workstreams: [
      { name: 'Partner Strategy & Landscape', detail: 'Map the partner landscape: cloud marketplace (AWS, Azure, GCP), solution integrators, ISVs, technology alliances, and community channels. Tier by potential impact and effort required.', weeks: 'Weeks 1–4' },
      { name: 'Partner Identification & Introductions', detail: 'Identify specific partners. Leverage Patrick\'s network for warm introductions. Prioritize based on deal acceleration potential and stage alignment.', weeks: 'Weeks 3–6' },
      { name: 'Partner Value Framework & Enablement', detail: 'Partner-specific value messaging and co-sell playbooks. The same methodology that equips your AEs — adapted for the partner motion. "Better together" content and partner-facing decks.', weeks: 'Weeks 5–9' },
      { name: 'Partner GTM Business Plan', detail: 'Joint GTM plan with prioritized partners: co-sell targets, field alignment, marketing campaigns, and success metrics.', weeks: 'Weeks 7–12' },
    ],
    deliverables: [
      'Partner landscape map with tiering and prioritization',
      'Partner introductions and fostered relationships',
      'Reseller/referral agreement templates',
      'Partner-facing value framework and enablement materials',
      'Joint sales and marketing campaign plans',
      'Co-sell pipeline tracking and measurement framework',
    ],
    clientNeeds: [
      'Marketing resources for co-branded content',
      'Product/engineering availability for technical partnership requirements',
      'Leadership decisions on partnership terms and economics',
      'Time for joint calls with potential partners',
    ],
  },
  {
    num: '05',
    title: 'Recruiting & Capacity',
    thesis: 'The right people, hired into a working system.',
    whoFor: 'For teams about to hire their first VP Sales, CRO, or next wave of AEs.',
    insight: 'VP Sales hires fail at a 67–78% rate. Not because companies pick the wrong person — because they hire into the wrong environment. We build the system first, then recruit leadership into a foundation that\'s already working. A VP Sales who inherits a documented ICP, a live Value Framework, and a functioning pipeline engine has a dramatically higher probability of success than one who inherits a blank slate and is expected to build everything from scratch while also carrying a number. That changes the odds from coin-flip to near-certain.',
    timeline: '2–4 weeks + 4–8 weeks per role',
    workstreams: [
      { name: 'GTM Org Design & Capacity Modeling', detail: 'Headcount mapped to revenue targets. When to hire SDRs vs. AEs vs. CS vs. leaders. Capacity and productivity modeling for the next 12 months.', weeks: 'Weeks 1–4' },
      { name: 'Per-Role Recruiting', detail: 'End-to-end front-of-funnel: role spec → sourcing → two rounds of screening interviews → deep written analysis on each candidate → founder handles final interviews and close. We screen for what makes reps succeed — not resume keywords.', weeks: 'Weeks 3–10+' },
    ],
    deliverables: [
      'GTM org design with capacity model and hiring roadmap',
      'Role spec sheets with hard/soft skill requirements',
      'Candidate pipeline with sourcing and outreach',
      'Written candidate analysis with detailed rationale',
      'Hiring recommendation per candidate',
    ],
    clientNeeds: [
      'Clarity on budget, timeline, and role priorities',
      'Access to current team structure and performance data',
      'Leadership availability for final-round interviews',
      'Quick decision-making on candidates (good candidates don\'t wait)',
    ],
  },
  {
    num: '06',
    title: 'Enablement',
    thesis: 'A program that produces sellers — not a training event.',
    whoFor: 'For teams where reps are ramping too slowly or performing inconsistently.',
    insight: 'Most enablement fails because it teaches product knowledge, not selling skill. Our program is structured around conversational fluency — reps practice until they can run discovery, handle objections, and build business cases in live customer conversations, not just in a workshop room. The measurement is simple: did rep productivity go up? You cannot enable a team on a foundation that does not exist — which means this bundle is most powerful when the Foundational bundle has been completed first.',
    timeline: '6–8 weeks',
    workstreams: [
      { name: '30-Day Onboarding Program', detail: 'Daily and weekly milestones. Selling fundamentals through first call, discovery, scoping, POC, BVA, pricing, legal, negotiation, and close. Conversational fluency as the standard — not rote recitation.', weeks: 'Weeks 1–4' },
      { name: 'Measurement & Iteration Framework', detail: 'How to assess whether the program is working. Competency scoring, ramp metrics, time-to-first-deal tracking, and a feedback loop that iterates based on rep performance data.', weeks: 'Weeks 3–6' },
      { name: 'Sales Plays & Supporting Materials', detail: 'Battle cards, customer stories, objection handling frameworks, competitive plays, and discovery guides — all built from the Value Framework and calibrated to real customer conversations.', weeks: 'Weeks 2–8' },
    ],
    deliverables: [
      '30-day onboarding program with daily structure and competency checkpoints',
      'Measurement framework with ramp metrics and iteration process',
      'Sales plays, battle cards, customer stories, and objection handling',
      'Operating rhythm design for ongoing coaching cadence',
      'Assessment criteria for new hires and underperforming reps',
    ],
    clientNeeds: [
      'Existing sales collateral, customer stories, and competitive intel',
      'Access to top-performing reps for knowledge capture',
      'Leadership time for program review and sign-off',
      'Commitment to running the program consistently — S-1 builds it, the team owns it',
    ],
    dependency: 'If a Health Check identifies that foundational elements have not been built, the scope will increase to include those areas — because you can\'t enable a team on a foundation that doesn\'t exist.',
  },
];

export default function BundlesGrid() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (num: string) => {
    setExpanded(expanded === num ? null : num);
  };

  return (
    <section id="bundles" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>The Bundles</span>
          <h2 className={styles.sectionTitle}>Six Bundles. One Operating System.</h2>
          <p className={styles.sectionSub}>
            These six areas represent the full GTM operating stack. Every dysfunction we&rsquo;ve diagnosed across 50+ companies maps to one of these six. Each bundle can run independently, or as part of a sequenced GTM build. Click to expand the full scope.
          </p>
        </div>

        <div className={styles.bundles}>
          {BUNDLES.map((bundle) => {
            const isOpen = expanded === bundle.num;
            const IconComponent = ICON_MAP[bundle.num];
            return (
              <div key={bundle.num} className={`${styles.bundle} ${isOpen ? styles.bundleOpen : ''}`}>
                {/* Summary row */}
                <button className={styles.summary} onClick={() => toggle(bundle.num)}>
                  <span className={styles.num}>{bundle.num}</span>
                  <div className={styles.summaryText}>
                    <h3 className={styles.bundleTitle}>{bundle.title}</h3>
                    <p className={styles.bundleThesis}>{bundle.thesis}</p>
                    <p className={styles.bundleWhoFor}>{bundle.whoFor}</p>
                  </div>
                  <span className={styles.timeline}>{bundle.timeline}</span>
                  <span className={styles.toggle}>{isOpen ? '−' : '+'}</span>
                </button>

                {/* Expanded detail */}
                {isOpen && (
                  <div className={styles.detail}>
                    {/* Icon + Insight */}
                    <div className={styles.detailHeader}>
                      {IconComponent && (
                        <div className={styles.detailIcon}>
                          <IconComponent size={40} />
                        </div>
                      )}
                      <div className={styles.insightBlock}>
                        <p className={styles.insight}>{bundle.insight}</p>
                      </div>
                    </div>

                    {/* Callouts */}
                    {'compoundEffect' in bundle && (bundle as any).compoundEffect && (
                      <div className={styles.calloutBlock}>
                        <span className={styles.calloutLabel}>Compound Effect</span>
                        <p className={styles.calloutText}>{(bundle as any).compoundEffect}</p>
                      </div>
                    )}
                    {'dependency' in bundle && (bundle as any).dependency && (
                      <div className={styles.calloutBlock}>
                        <span className={styles.calloutLabel}>Dependency</span>
                        <p className={styles.calloutText}>{(bundle as any).dependency}</p>
                      </div>
                    )}

                    {/* Phase 1 Workstreams */}
                    <div className={styles.workstreamsSection}>
                      <h4 className={styles.colTitle}>
                        {'phaseTwoWorkstreams' in bundle ? 'Phase 1: Build · 12–16 Weeks' : 'Workstreams'}
                      </h4>
                      <div className={styles.workstreamGrid}>
                        {bundle.workstreams.map((w) => (
                          <div key={w.name} className={styles.workstream}>
                            <div className={styles.workstreamHeader}>
                              <h5 className={styles.workstreamName}>{w.name}</h5>
                              <span className={styles.workstreamWeeks}>{w.weeks}</span>
                            </div>
                            <p className={styles.workstreamDetail}>{w.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Phase 2 Workstreams (only for Execute & Scale) */}
                    {'phaseTwoWorkstreams' in bundle && (bundle as any).phaseTwoWorkstreams && (
                      <div className={styles.workstreamsSection}>
                        <div className={styles.phaseBreak}>
                          <span className={styles.phaseBreakLine} />
                          <span className={styles.phaseBreakLabel}>Month-to-month · Cancel anytime</span>
                          <span className={styles.phaseBreakLine} />
                        </div>
                        <h4 className={styles.colTitle}>Phase 2: Operate · Ongoing</h4>
                        <div className={styles.workstreamGrid}>
                          {(bundle as any).phaseTwoWorkstreams.map((w: any) => (
                            <div key={w.name} className={styles.workstream}>
                              <div className={styles.workstreamHeader}>
                                <h5 className={styles.workstreamName}>{w.name}</h5>
                                <span className={styles.workstreamWeeks}>{w.weeks}</span>
                              </div>
                              <p className={styles.workstreamDetail}>{w.detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Deliverables + Client Needs — side by side */}
                    <div className={styles.bottomCards}>
                      <div className={styles.bottomCard}>
                        <h4 className={styles.cardTitle}>What You Walk Away With</h4>
                        <ul className={styles.deliverables}>
                          {bundle.deliverables.map((d) => (
                            <li key={d} className={styles.deliverable}>{d}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
