import styles from './TransitionBlock.module.css';

export default function TransitionBlock() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.statement}>
          What got you here was product, timing, and talent. What gets you to the
          next stage is the foundation to a GTM engine that produces{' '}
          <span className={styles.accent}>repeatable revenue.</span>
        </p>
      </div>
    </section>
  );
}
