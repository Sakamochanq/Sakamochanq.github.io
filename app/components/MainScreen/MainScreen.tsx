import styles from "./MainScreen.module.css";
import Profile from "../Profile/Profile";

export default function MainScreen() {
  return (
    <section className={styles.screen} aria-label="メイン画面">
      <Profile />
      <footer className={styles.footer} aria-label="フッター">
        <img className={styles.popGirl} src="/popGirl.png" alt="" />
        <span className={styles.credit}>@Clover</span>
      </footer>
    </section>
  );
}
