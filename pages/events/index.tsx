import Link from "next/link";
import { Paths } from "enums/routes";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div>
      <p className={styles.test}>This is a events page</p>
      <br />
      <Link href={`${Paths.events}/6`}>Href to events page with id 6</Link>
    </div>
  );
}
