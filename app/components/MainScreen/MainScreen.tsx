import styles from "./MainScreen.module.css";
import Profile from "../Profile/Profile";

export default function MainScreen() {
  return (
    <section className={styles.screen} aria-label="メイン画面">
      <Profile />
      <p className={styles.introduction}>
        空間情報工学を専攻する学生です。ツールの作成、画像、動画編集など創作が好きです。趣味は旅行と映画鑑賞、好きなアニメはチェンソーマンと宝石の国。
      </p>
      <footer className={styles.footer} aria-label="フッター">
        <img className={styles.popGirl} src="/popGirl.png" alt="" />
        <span className={styles.credit}>@Clover</span>
      </footer>
    </section>
  );
}
