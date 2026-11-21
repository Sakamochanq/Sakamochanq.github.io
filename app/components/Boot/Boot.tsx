import styles from "./Boot.module.css";

export default function Boot() {
  return (
    <section className={styles.boot} aria-label="Hello World">
      <h1 aria-label="Hello World">
        {[..."Hello World"].map((character, index) => (
          <span
            aria-hidden="true"
            className={styles.letter}
            key={`${character}-${index}`}
            style={{ animationDelay: `${index * 75}ms` }}
          >
            {character === " " ? "\u00a0" : character}
          </span>
        ))}
      </h1>
      <svg className={styles.arrow} viewBox="0 0 24 24" aria-hidden="true">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </section>
  );
}
