import styles from './ApproachHero.module.css';
import Link from 'next/link';

export default function ApproachHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.scanline} />

      <div className={`container ${styles.content}`}>
        <div className={styles.textSide}>
          <h1 className={styles.headline}>
            WE DIAGNOSE <br />
            <span className={styles.beforeWrap}>
              <span className={styles.accent}>BEFORE</span>
              {/* EKG wave — anchored to BEFORE */}
              <span className={styles.waveformBg} aria-hidden="true">
                <svg
                  viewBox="0 0 1400 100"
                  preserveAspectRatio="none"
                  className={styles.waveformSvg}
                >
                  {/* Static flatline — left */}
                  <path
                    d="M0,50 L500,50"
                    fill="none"
                    stroke="#EB5E28"
                    strokeWidth="1.5"
                  />
                  {/* Animated heartbeat — right */}
                  <path
                    className={styles.heartbeat}
                    d="M500,50 Q520,50 528,18 Q532,0 535,50 Q538,75 540,58 Q543,42 550,50 L680,50 Q700,50 708,18 Q712,0 715,50 Q718,75 720,58 Q723,42 730,50 L860,50 Q880,50 888,18 Q892,0 895,50 Q898,75 900,58 Q903,42 910,50 L1040,50 Q1060,50 1068,18 Q1072,0 1075,50 Q1078,75 1080,58 Q1083,42 1090,50 L1220,50 Q1240,50 1248,18 Q1252,0 1255,50 Q1258,75 1260,58 Q1263,42 1270,50 L1400,50"
                    fill="none"
                    stroke="#EB5E28"
                    strokeWidth="1.5"
                    pathLength="1"
                  />
                </svg>
              </span>
            </span>
            <br />
            WE PRESCRIBE.
          </h1>

          <p className={styles.sub}>
            Every startup is uniquely complex. That&rsquo;s why generic playbooks
            fail—and why we start with your data, not our assumptions.
          </p>

          <div className={styles.ctas}>
            <Link href="/healthcheck" className="btn-primary btn-primary--accent">
              Take the Health Check
            </Link>
            <Link href="/bundles" className="btn-outline">
              See the Bundles →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
