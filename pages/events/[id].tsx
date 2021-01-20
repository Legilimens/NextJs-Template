import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const {
    query: { id },
  } = useRouter();

  return (
    <div>
      <Head>
        <title>Event {id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      This is a page with event id {id}
    </div>
  );
}
