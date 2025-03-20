import DropDown from "./dropdown/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <DropDown/>
    </div>
  );
}
