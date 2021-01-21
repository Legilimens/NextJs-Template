import Head from "next/head";
import Link from "next/link";
import getConfig from "next/config";
import { Button, DatePicker, version } from "antd";
import { END } from "redux-saga";

import { SagaStore, wrapper } from "store";

import styles from "./index.module.scss";
import { fetchPostsAction } from "store/ui/posts/actions";

const {
  publicRuntimeConfig: { NEXT_PUBLIC_TEST },
} = getConfig();

function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is a home page</h1>
      <div className={styles.ant}>
        <p>antd version: {version}</p>
        <p>test value from .env: {NEXT_PUBLIC_TEST}</p>
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

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {

    store.dispatch(fetchPostsAction.request());

    store.dispatch(END);
    await (store as SagaStore).sagaTask!.toPromise();
  }
);

export default Home;
