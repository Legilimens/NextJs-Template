import { useRouter } from "next/router";

export default function Home() {
  const {
    query: { id },
  } = useRouter();

  return (
    <div>
      This is a page with event id {id}
    </div>
  );
}
