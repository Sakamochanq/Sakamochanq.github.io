import { FiGithub, FiInstagram } from "react-icons/fi";
import styles from "./Profile.module.css";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/sakamochanq", Icon: FiGithub },
  { name: "Instagram", href: "https://instagram.com/Sakamochan123", Icon: FiInstagram },
];

export default function Profile() {
  return (
    <section className={styles.profile} aria-label="プロフィール">
      <img
        className={styles.avatar}
        src="https://avatars.githubusercontent.com/u/126952815?v=4"
        alt=""
        draggable={false}
      />
      <div className={styles.details}>
        <h1 className={styles.name}>Sakamochan</h1>
        <p className={styles.handle}>sakamochanq</p>
        <nav className={styles.socials} aria-label="SNS">
          {socialLinks.map(({ name, href, Icon }) => (
            <a
              className={styles.socialLink}
              href={href}
              key={name}
              aria-label={name}
              target="_blank"
              rel="noreferrer"
            >
              <Icon aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
