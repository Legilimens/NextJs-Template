import Link from "next/link";
import { Paths } from "enums/routes";

function Admin() {
  return (
    <div>
      <p>This is a admin page</p>
      <br />
      <Link href={Paths.home}>Href to home page</Link>
    </div>
  );
}

export default Admin;