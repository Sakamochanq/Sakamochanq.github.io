import styles from "./Skill.module.css";

export default function Skill() {
  return (
    <section className={styles.section} aria-label="スキル">
      <header className={styles.header}>
        <div className={styles.topTrim} aria-hidden="true">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0 70 C80 42 160 42 240 70 S400 98 480 70 S640 42 720 70 S880 98 960 70 S1120 42 1200 70 S1360 98 1440 70 L1440 0 L0 0 Z" />
          </svg>
        </div>
      </header>
      <footer className={styles.footer} aria-hidden="true" />
      <img
        className={styles.pochita}
        src="/Chainsawman03.png"
        alt="チェンソーマン"
        draggable={false}
      />
      <span className={styles.credit}>@Mauri7super</span>
    </section>
  );
}
