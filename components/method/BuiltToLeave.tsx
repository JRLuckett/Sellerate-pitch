import styles from './BuiltToLeave.module.css';
import Link from 'next/link';

const PILLARS = [
  {
    num: '01',
    title: 'Build the system.',
    body: 'Focused engagements that install specific capabilities: value frameworks, pipeline engines, qualification rigor, enablement programs. Each one designed to outlast us.',
  },
  {
    num: '02',
    title: 'Transfer the knowledge.',
    body: 'Every framework, playbook, and process we build gets documented, trained, and handed off. Your team owns it, runs it, and evolves it.',
  },
  {
    num: '03',
    title: 'Leave it running.',
    body: 'The test isn\u2019t whether it works while we\u2019re there. It\u2019s whether it keeps working after we\u2019re gone. That\u2019s how we measure success.',
  },
];

export default function BuiltToLeave() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.header}>
            <span className={styles.badge}>BUILT TO LEAVE</span>
            <h2 className={styles.title}>
              We don&rsquo;t install ourselves.<br />
              We install the system.
            </h2>
            <p className={styles.sub}>
              S-1 delivers focused, time-bound engagements that build real capability inside your organization. We show up, build the foundation, transfer the knowledge, and get out of the way.
            </p>
          </div>

          <div className={styles.pillars}>
            {PILLARS.map((p) => (
              <div key={p.num} className={styles.pillar}>
                <span className={styles.pillarNum}>{p.num}</span>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarBody}>{p.body}</p>
              </div>
            ))}
          </div>

          <div className={styles.cta}>
            <p className={styles.ctaLead}>
              Every engagement is scoped, priced, and structured around a specific outcome. No retainers. No open-ended advisory. No dependency.
            </p>
            <Link href="/bundles" className={styles.ctaButton}>
              See How We Deliver →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
