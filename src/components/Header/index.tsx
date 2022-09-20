import EffectLeft from "../../assets/effect-left.svg";
import EffectRight from "../../assets/effect-right.svg";
import BlogLogo from "../../assets/github-logo.svg";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <img className={styles.imgLeft} src={EffectLeft} alt='' />
      <img src={BlogLogo} alt='' />
      <img src={EffectRight} alt='' />
    </header>
  );
}
