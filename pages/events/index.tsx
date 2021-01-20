import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>This is a events page</p>
      <br />
      <Link href="/events/6">Href to events page with id</Link>
    </div>
  );
}
