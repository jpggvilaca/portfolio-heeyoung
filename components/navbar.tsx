import Link from "next/link";

import { capitalise } from "../utils";

const PAGES = ["home", "portfolio", "resume", "about-me"];

export default function Navbar() {
  return (
    <nav>
      {PAGES.map((page) => {
        return <Link href={page}>{capitalise(page.replace("-", " "))}</Link>;
      })}
    </nav>
  );
}
