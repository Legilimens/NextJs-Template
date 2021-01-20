import Head from "next/head";
import Link from "next/link";
import { Button, DatePicker, version } from "antd";

import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is a home page</h1>
      <div className={styles.ant}>
        <p>antd version: {version}</p>
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </div>
      <Link href="/events">
        <a className={styles.link}>Href to events page</a>
      </Link>
    </div>
  );
}
